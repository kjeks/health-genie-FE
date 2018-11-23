import ActionTypes from "./ActionTypes";
import {makeMealType,makeActivityType,  makeNewDayReducer} from "./FlowTypes";
import ListActionTypes, {generateActionType} from "../common/ActionTypes";

export default function (state = makeNewDayReducer, action) {
    switch (action.type) {
        case generateActionType('MEAL', ListActionTypes.SELECT_ITEM):
            return state.setIn(['activities', action.itemId], makeActivityType({
                minutes: 100
            }));
        case generateActionType('ACTIVITY', ListActionTypes.SELECT_ITEM):
            return state.setIn(['meals', action.itemId], makeMealType({
                grams: 100
            }));
        case generateActionType('MEAL', ListActionTypes.ITEMS_RECEIVED):
            action.selectedIds.forEach(selectedId => {
                state = state.setIn(['meals', selectedId], makeMealType({
                    grams: 100
                }))
            });
            return state;
        case generateActionType('ACTIVITY', ListActionTypes.ITEMS_RECEIVED):
            action.selectedIds.forEach(selectedId => {
                state = state.setIn(['activities', selectedId], makeActivityType({
                    minutes: 100
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