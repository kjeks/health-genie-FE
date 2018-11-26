import {createSelector} from 'reselect';
import {idAndQuantitySelector, selectedItemSelector} from "../common/Selectors";
import {makeMealPlanNutrient} from "./FlowTypes";

const nutrientsSelector = state => {
    return state.get('SummaryReducer').nutrients
};


export const mealPlanNutrients = createSelector(
    idAndQuantitySelector, nutrientsSelector, selectedItemSelector,
    (idAndQuantity, nutrients, mealList) => {
        let protein = 0;
        let kcal = 0;
        let fett = 0;
        let sukker = 0;
        let fiber = 0;
        mealList.forEach(meal => {
            const macros = meal.get('macros');

            protein = protein + (macros && macros.get('protein'));
            kcal = kcal + (macros.get('kcal') && Number(macros.get('kcal')));
            fett = fett + (macros.get('fett') && Number(macros.get('fett')));
            sukker = sukker + (macros.get('sukker') && Number(macros.get('sukker')));
            fiber = fiber + (macros.get('kostfiber') && Number(macros.get('kostfiber')));

        });
        return makeMealPlanNutrient({
            protein: protein || 0,
            kcal: kcal || 0,
            fett: fett || 0,
            sukker: sukker || 0,
            kostfiber: fiber || 0,
        });

    }
);
