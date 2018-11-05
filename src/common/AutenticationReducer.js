import ActionTypes from "../login/ActionTypes";
import {makeAuthenticationReducer} from "./FlowTypes";

const initialState = makeAuthenticationReducer({
    isAuthenticated: 0
});
export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOGIN_WHO_AM_I_RECEIVED:
            return state.set('isAuthenticated', action.isAuthenticated);
        default:
            return state;
    }
}