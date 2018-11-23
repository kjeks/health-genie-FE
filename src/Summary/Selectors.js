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
        let fat = 0;
        let carbs = 0;
        let fiber = 0;
        mealList.forEach((meal) => {
            protein = protein + (meal && meal.get('protein'));
            kcal = kcal + (meal.get('kcal') && Number(meal.get('kcal')));
            fat = fat + (meal.get('fat') && Number(meal.get('fat')));
            carbs = carbs + (meal.get('carbs') && Number(meal.get('carbs')));
            fiber = fiber + (meal.get('fiber') && Number(meal.get('fiber')));

        });
        return makeMealPlanNutrient({
            protein: protein || 0,
            kcal: kcal || 0,
            fat: fat || 0,
            carbs: carbs || 0,
            fiber: fiber || 0,
        });

    }
);
