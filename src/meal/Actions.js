import ActionTypes from "./ActionTypes";

export default {
    onGramsChanged(mealId, newValue) {
        return dispatch => {
            dispatch({type: ActionTypes.NEW_DAY_GRAMS_CHANGED, mealId: mealId, newValue: newValue})
        }
    }
}