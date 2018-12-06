import ActionTypes from "./ActionTypes";
import {makeMealType,makeActivityType,  makeNewDayReducer} from "./FlowTypes";
import ListActionTypes, {generateActionType} from "../common/ActionTypes";
let updatedActivity = null;

export default function (state = makeNewDayReducer, action) {
    switch (action.type) {
        case generateActionType('MEAL', ListActionTypes.SELECT_ITEM):
            return state.setIn(['meals', action.itemId], makeMealType({
                grams: 100
            }));
        case generateActionType('ACTIVITY', ListActionTypes.SELECT_ITEM):
            return state.setIn(['activities', action.itemId], makeActivityType({
                minutes: 100
            }));
        case ActionTypes.NEW_DAY_GRAMS_CHANGE:
            const newMeal = makeMealType({
                grams: action.newValue
            });
            return state.setIn(['meals', action.id], newMeal);
        case ActionTypes.NEW_DAY_DURATION_CHANGE:
            updatedActivity = state.getIn(['activities', action.id]);

            updatedActivity = updatedActivity.set('minutes', action.newValue);
            return state.setIn(['activities', action.id], updatedActivity);
        case ActionTypes.NEW_DAY_SPEED_CHANGE:
            updatedActivity = state.getIn(['activities', action.id]);

            updatedActivity = updatedActivity.set('speed', action.newValue);
            console.log(updatedActivity)
            return state.setIn(['activities', action.id], updatedActivity);

        default:
            return state;
    }
}