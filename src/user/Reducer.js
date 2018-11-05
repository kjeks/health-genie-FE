import ActionTypes from "./ActionTypes";
import LoginActionTypes from '../login/ActionTypes';
import {makeUserReducer} from "./FlowTypes";
import moment from 'moment'

export default function(state = makeUserReducer(), action) {
    switch(action.type) {
        case ActionTypes.USER_USER_RECEIVED:
        case LoginActionTypes.LOGIN_SUCCESSFUL:
            let user = action.user;
            return state.set('height', user.height)
                .set('weight', user.weight)
                .set('targetWeight', user.targetWeight)
                .set('targetDate', moment(user.targetDate))
                .set('activityLevel', user.activityLevel)
                .set('sex', user.sex)
                .set('age', user.age);

        case ActionTypes.USER_CHANGE_VALUE:
            return state.set(action.key, action.value);
        default:
            return state;
    }
}