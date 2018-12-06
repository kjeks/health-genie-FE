import {Record, Map} from 'immutable';

export type MealType = {
    id: string,
    grams: number
}
export type NewDayReducerType = {
    meals: Map<string, MealType>
}

export const makeNewDayReducer = Map({
    meals: new Map(),
    activities: new Map()
});

export const makeMealType = Record({
    grams: null
});
export const makeActivityType = Record({
    minutes: null,
    speed: null
});
