import {Map} from 'immutable';
import {makeNutrient, makeSummaryReducer} from "./FlowTypes";

const initialState = makeSummaryReducer({
    nutrients: Map({
        kcal: makeNutrient({
            name: 'kcal',
            id: "kcal",
            recommended: "2500"
        }),
        protein: makeNutrient({
            name: 'protein',
            id: "protein",
            recommended: "120"
        }),
        carbs: makeNutrient({
            name: 'carbs',
            id: "carbs",
            recommended: "400"
        }),
        fiber: makeNutrient({
            name: 'fiber',
            id: 'fiber',
            recommended: '25'
        }),
        fat: makeNutrient({
            name: 'fat',
            id: 'fat',
            recommended: '50'
        })
    })
});

export default function SummaryReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}