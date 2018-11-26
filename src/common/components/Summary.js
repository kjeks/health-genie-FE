import React, {PureComponent} from 'react';
import {mealPlanNutrients} from "../../Summary/Selectors";
import {connect} from "react-redux";
import {List, Map, RecordOf} from "immutable";
import type {MealPlanNutrientType, NutrientType} from "../../Summary/FlowTypes";
import NutritionList from "./NutritionList";
import {Header, Button, Input} from 'semantic-ui-react';
import Actions from "../../user/Actions";
import {idAndQuantitySelector} from "../Selectors";

class Summary extends PureComponent <{
    nutrients: Map<RecordOf<NutrientType>>,
    nutrientsInMeal: List<RecordOf<MealPlanNutrientType>>,
    tableHeaders: [string]
}> {
    constructor(props) {
        super(props);
        this.state = {dayName: ""}
    }

    handleDayNameChange = (event, data) => {
        this.setState({dayName: data.value});
    };
    handleDaySaved = () => {
        this.props.saveDay(this.props.mealQuantities, this.props.activityQuantities, this.state.dayName);
    };

    render() {
        return (
            <div>
                <Header as='h1' className={'centered'}>Summary</Header>
                <NutritionList
                    nutrients={this.props.nutrients}
                    nutrientsInMeal={this.props.nutrientsInMeal}
                    tableHeaders={this.props.tableHeaders}
                />

                <Input label={'day name'} onChange={this.handleDayNameChange}/>
                <Button onClick={this.handleDaySaved}>Save day</Button>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mealQuantities: idAndQuantitySelector(state, 'MEAL'),
        activityQuantities: idAndQuantitySelector(state, 'ACTIVITY'),
        nutrientsInMeal: mealPlanNutrients(state, ownProps),
        nutrients: state.get('SummaryReducer').nutrients,
        mealIds: state.getIn(['MEAL', 'selectedItemIds']),
        activityIds: state.getIn(['ACTIVITY', 'selectedItemIds'])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveDay: (meals, activities, dayName) => dispatch(Actions.onDaySaved(meals, activities, dayName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);