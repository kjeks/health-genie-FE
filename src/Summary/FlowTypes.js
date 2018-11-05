import {Record, Map} from 'immutable';

export type NutrientType = {
    name: string,
    recommended: number,
    id: string
}

export type SummaryReducerType = {
    nutrients: Map<NutrientType>
}
export const makeSummaryReducer = Record({
    nutrients: Map()
});
export const makeNutrient = Record({
    name: null,
    recommended: null,
    id: null
});

export type MealPlanNutrientType = {
    protein: number,
    kcal: number
}
export const makeMealPlanNutrient = Record({
    protein: null,
    kcal: null,

})

