import ActionTypes from "./ActionTypes";
import {makeRequest} from "../common/requestUtil";
import {history} from "../MainRouter";
import {toastr} from 'react-redux-toastr';

export default {
    login: function (email, password) {
        return dispatch => {
            dispatch({type: ActionTypes.LOGIN_REQUEST_LOGIN});
            makeRequest({url: `login/${email}/${password}`}).then(data => {
                localStorage.setItem('token', data.token);
                dispatch({type: ActionTypes.LOGIN_SUCCESSFUL, user: data.user});
                history.push('/');
                toastr.success("Login successful");

            }).catch(error=> {
                error.then(error => {
                    toastr.error(error.msg);
                })
            })
        }
    },
    whoAmI: function () {
        return dispatch => {
            makeRequest({url: `login/whoami`}).then(response => {
                dispatch({type: ActionTypes.LOGIN_WHO_AM_I_RECEIVED, isAuthenticated: response.isAuthenticated})
            })
        }
    }
}