import ActionTypes from "./ActionTypes";

export default {
    onGramsChange(mealId, newValue) {
        return dispatch => {
            dispatch({type: ActionTypes.NEW_DAY_GRAMS_CHANGE, id: mealId, newValue: newValue})
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
    }
}