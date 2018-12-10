import ActionTypes from "./ActionTypes";
import {makeMealType,makeActivityType,  makeNewDayReducer} from "./FlowTypes";
import ListActionTypes, {generateActionType} from "../common/ActionTypes";
let updatedActivity = null;

export default function (state = makeNewDayReducer, action) {
    switch (action.type) {
        case generateActionType('MEAL', ListActionTypes.SELECT_ITEM):
            return state.setIn(['meals', action.itemId], makeMealType({
                quantity: 100
            }));
        case generateActionType('INGREDIENT', ListActionTypes.SELECT_ITEM):
            return state.setIn(['ingredients', action.itemId], makeMealType({
                quantity: 100
            }));
        case generateActionType('ACTIVITY', ListActionTypes.SELECT_ITEM):
            return state.setIn(['activities', action.itemId], makeActivityType({
                quantity: 100
            }));
        case generateActionType('MEAL', ListActionTypes.GRAMS_CHANGE):
            const newMeal = makeMealType({
                quantity: action.newValue
            });
            return state.setIn(['meals', action.id], newMeal);
        case generateActionType('INGREDIENT', ListActionTypes.GRAMS_CHANGE):
            const newIngredient = makeMealType({
                        quantity: action.newValue
                    });
            return state.setIn(['ingredients', action.id], newIngredient);
        case ActionTypes.NEW_DAY_DURATION_CHANGE:
            updatedActivity = state.getIn(['activities', action.id]);

            updatedActivity = updatedActivity.set('quantity', action.newValue);
            return state.setIn(['activities', action.id], updatedActivity);
        case ActionTypes.NEW_DAY_SPEED_CHANGE:
            updatedActivity = state.getIn(['activities', action.id]);

            updatedActivity = updatedActivity.set('speed', action.newValue);
            return state.setIn(['activities', action.id], updatedActivity);

        default:
            return state;
    }
}