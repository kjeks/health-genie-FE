import ActionTypes from "./ActionTypes";
import {makeRequest} from "../common/requestUtil";

export default {
    onValueChanged: function (type, value) {
        return dispatch => {
            dispatch({type: ActionTypes.USER_CHANGE_VALUE, key: type, value: value});
        }
    },
    fetchUser: function () {
        return dispatch => {
            dispatch({type: ActionTypes.USER_FETCH_USER});
            makeRequest({url: 'users'}).then(user => {
                dispatch({type: ActionTypes.USER_USER_RECEIVED, user: user});
            });
        }
    },
    onUserSaved: function (user) {
        return dispatch => {
            dispatch({type: ActionTypes.USER_REQUEST_USER_SAVE});
            makeRequest({url: 'users', method: 'POST', body: user})
        }
    },
    onDaySaved: function (mealIds, activityIds, dayName) {
        return dispatch => {
            dispatch({type: ActionTypes.USER_REQUEST_DAY_SAVE});
            makeRequest({url: 'days/new', method: 'POST', body: {mealIds: mealIds, activityIds: activityIds, dayName: dayName}})
        }
    }
}