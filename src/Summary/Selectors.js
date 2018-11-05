import {createSelector} from 'reselect';
import {selectedItemSelector} from "../common/Selectors";
import {makeMealPlanNutrient} from "./FlowTypes";

const nutrientsSelector = state => {
    return state.get('SummaryReducer').nutrients
};


export const mealPlanNutrients = createSelector(
    nutrientsSelector, selectedItemSelector,
    (nutrients, mealList) => {
        let protein = 0;
        let kcal = 0;

        mealList.forEach((meal) => {
            protein = protein + (meal && meal.get('protein'));
            kcal = kcal + (meal.get('kcal') && Number(meal.get('kcal')));
        });
        return makeMealPlanNutrient({
            protein: protein || 0,
            kcal: kcal || 0
        });

    }
);
