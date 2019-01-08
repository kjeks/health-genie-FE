import {makeWeekReducer} from "./FlowTypes";
import ActionTypes from "./ActionTypes";
import ListActionTypes from "../common/ActionTypes";

const initialState = makeWeekReducer();

export default function (state = initialState, action) {
    switch (action.type) {
        case `${'WEEK'}_${ListActionTypes.ADD_ITEM}`:
            return state.set('currentSelectedDay', action.day);
        case `${'WEEK'}_${ListActionTypes.SELECT_ITEM}`:
            return state.set(state.currentSelectedDay, action.itemId).set('currentSelectedDay');
        case ActionTypes.DAYS_WEEK_PLANS_RECEIVED:
            return state.set('monday', action.days.monday)
                .set('tuesday', action.days.tuesday)
                .set('wednesday', action.days.wednesday)
                .set('thursday', action.days.thursday)
                .set('friday', action.days.friday)
                .set('saturday', action.days.saturday)
                .set('sunday', action.days.sunday);
        default:
            return state;
    }
}