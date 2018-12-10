import React, {Component} from 'react';
import {Header} from 'semantic-ui-react';
import NutritionList from "../../common/components/NutritionList";
import {mealPlanNutrients} from "../../Summary/Selectors";
import {idAndQuantitySelector} from "../../common/Selectors";
import {connect} from "react-redux";

class MealCreationSummary extends Component {
    render () {
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

            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        mealQuantities: idAndQuantitySelector(state, {type: 'INGREDIENT'}),
        nutrientsInMeal: mealPlanNutrients(state, ownProps),
        nutrients: state.get('SummaryReducer').nutrients,
        mealIds: state.getIn(['INGREDIENT', 'selectedItemIds'])
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealCreationSummary);