import ActionTypes from "./ActionTypes";
import {makeRequest} from "../common/requestUtil";
import {toastr} from 'react-redux-toastr';

export default {
    registerUser: function (email, password) {
        return dispatch => {
            dispatch({type: ActionTypes.REGISTER_REQUEST_REGISTER_USER});
            makeRequest({url:'login/register', method: 'POST', body: {email: email, password: password}}).then(data =>{
                localStorage.setItem("token", data.token);
                dispatch({type: ActionTypes.REGISTER_USER_REGISTERED, user: data.user, token: data.token});
                toastr.error("User registered");
            }).catch(error => {
                toastr.error("Email already exists");
            });
        }
    }
}