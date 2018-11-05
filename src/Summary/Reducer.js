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
        })
    })
});

export default function SummaryReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}