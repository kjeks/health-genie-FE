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
        sukker: makeNutrient({
            name: 'sukker',
            id: "sukker",
            recommended: "400"
        }),
        kostfiber: makeNutrient({
            name: 'kostfiber',
            id: 'kostfiber',
            recommended: '25'
        }),
        fett: makeNutrient({
            name: 'fett',
            id: 'fett',
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