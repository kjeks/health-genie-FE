import {makeSummaryDay, makeSummaryReducer, makeSummaryWeek} from "./FlowTypes";
import ActionTypes from "./ActionTypes";

const initialState = makeSummaryReducer();

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.DAYS_DAY_SUMMARY_RECEIVED:
            return state.setIn(['days', action.dayId], makeSummaryDay(action.summary));
        case ActionTypes.DAYS_WEEK_SUMMARY_RECEIVED:
            return state.set('week', makeSummaryWeek(action.summary));
        default:
            return state;
    }
}