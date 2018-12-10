import ActionTypes from "./ActionTypes";
import {makeRequest} from "../common/requestUtil";
import ListActionTypes, {generateActionType} from "../common/ActionTypes";

export default {
    onGramsChange(id, newValue, type) {
        return dispatch => {
            dispatch({type: generateActionType(type, ListActionTypes.GRAMS_CHANGE), id: id, newValue: newValue})
        }
    },
    onDurationChange(activityId, newValue) {
        return dispatch => {
            dispatch({type: ActionTypes.NEW_DAY_DURATION_CHANGE, id: activityId, newValue: newValue})
        }
    },
    onSpeedChange(activityId, newValue) {
        return dispatch => {
            dispatch({type: ActionTypes.NEW_DAY_SPEED_CHANGE, id: activityId, newValue: newValue})
        }
    },
    onMealFavoriteToggle(mealId) {
        return dispatch => {
            dispatch({type: ActionTypes.MEAL_FAVORITE_TOGGLE_REQUESTED, mealId: mealId});
            makeRequest({url:`meals/favorite/${mealId}`, method:'post'}).then((data) => {
                dispatch({type: generateActionType('MEAL', ListActionTypes.FAVORITE_TOGGLE_RECEIVED), favoriteItemIds: data.favoriteItemIds})
            })
        }
    }
}