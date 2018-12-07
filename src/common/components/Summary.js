import React, {PureComponent} from 'react';
import {mealPlanNutrients} from "../../Summary/Selectors";
import {connect} from "react-redux";
import {List, Map, RecordOf} from "immutable";
import type {MealPlanNutrientType, NutrientType} from "../../Summary/FlowTypes";
import NutritionList from "./NutritionList";
import {Header, Button, Input} from 'semantic-ui-react';
import Actions from "../../user/Actions";
import {idAndQuantitySelector} from "../Selectors";
import {dailyCalSelector} from "../../user/Selector";

class Summary extends PureComponent <{
    nutrients: Map<RecordOf<NutrientType>>,
    nutrientsInMeal: List<RecordOf<MealPlanNutrientType>>,
    tableHeaders: [string]
}> {
    constructor(props) {
        super(props);
        this.props.fetchUser();
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
                    mealQuantities={this.props.mealQuantities}
                    kcalGoal={this.props.kcalGoal}
                />

                <Input label={'day name'} onChange={this.handleDayNameChange}/>
                <Button onClick={this.handleDaySaved}>Save day</Button>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mealQuantities: idAndQuantitySelector(state, {type: 'MEAL'}),
        activityQuantities: idAndQuantitySelector(state, {type: 'ACTIVITY'}),
        nutrientsInMeal: mealPlanNutrients(state, ownProps),
        kcalGoal: dailyCalSelector(state),
        nutrients: state.get('SummaryReducer').nutrients,
        mealIds: state.getIn(['MEAL', 'selectedItemIds']),
        activityIds: state.getIn(['ACTIVITY', 'selectedItemIds'])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveDay: (meals, activities, dayName) => dispatch(Actions.onDaySaved(meals, activities, dayName)),
        fetchUser: () => dispatch(Actions.fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);