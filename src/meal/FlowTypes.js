import {Record, Map} from 'immutable';

export type MealType = {
    id: string,
    quantity: number
}
export type NewDayReducerType = {
    meals: Map<string, MealType>
}

export const makeNewDayReducer = Map({
    meals: new Map(),
    activities: new Map(),
    ingredients: new Map()
});

export const makeMealType = Record({
    quantity: null
});
export const makeActivityType = Record({
    quantity: null,
    speed: null
});
