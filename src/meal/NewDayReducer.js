import ActionTypes from "./ActionTypes";
import {makeMealType, makeNewDayReducer} from "./FlowTypes";
import ListActionTypes, {generateActionType} from "../common/ActionTypes";

export default function (state = makeNewDayReducer, action) {
    switch (action.type) {
        case generateActionType('MEAL', ListActionTypes.ITEMS_RECEIVED):
            action.selectedIds.forEach(selectedId => {
                state = state.setIn(['meals', selectedId], makeMealType({
                    grams: 100
                }))
            });
            return state;
        case ActionTypes.NEW_DAY_GRAMS_CHANGED:
            const newMeal = makeMealType({
                grams: action.newValue
            });
            return state.setIn(['meals', action.mealId], newMeal);
        default:
            return state;
    }
}