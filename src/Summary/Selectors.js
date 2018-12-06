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
            const mealId = meal.get('_id');
            const quantity = findQuantity(mealId, idAndQuantity);

            protein = protein + ((macros && macros.get('protein')) * quantity/100);
            kcal = kcal + ((macros.get('kcal') && Number(macros.get('kcal'))) * quantity/100);
            fett = fett + ((macros.get('fett') && Number(macros.get('fett')))* quantity/100);
            sukker = sukker + ((macros.get('sukker') && Number(macros.get('sukker')))* quantity/100);
            fiber = fiber + ((macros.get('kostfiber') && Number(macros.get('kostfiber'))* quantity/100));

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
function findQuantity(mealId, idAndQuantity) {
    for(let [id, quantity] of idAndQuantity) {
        if(id === mealId) {
            return quantity;
        }
    }
}
