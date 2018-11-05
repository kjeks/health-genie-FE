import ActionTypes from "./ActionTypes";
import {makeRequest} from "../common/requestUtil";
import ListActionTypes, {generateActionType} from "../common/ActionTypes";
import queryString from 'query-string';
import {getUrlByListName} from "../common/list/ListUtils";
import {toastr} from 'react-redux-toastr'

export default {
    onDaySelected: function (day) {
        return dispatch => {
            dispatch({type: generateActionType('WEEK', ListActionTypes.ADD_ITEM), day: day});
        }
    },
    fetchContent: function (type, contentIds) {
        return dispatch => {
            const query = queryString.stringify(contentIds.toJS());

            makeRequest({url: `${getUrlByListName(type)}/ids/?${query}`,}).then(content => {
                dispatch({
                    type: generateActionType(type, ListActionTypes.ITEMS_RECEIVED),
                    selectedItemIds: [],
                    items: content
                })
            })
        }
    },
    fetchPlansForDays: function () {
        return dispatch => {
            makeRequest({url: `days/plans`}).then(days => {
                dispatch({type: ActionTypes.DAYS_WEEK_PLANS_RECEIVED, days: days})
            })
        }
    },
    fetchSummary: function (dayId) {
        return dispatch => {
            makeRequest({url: `days/summary/${dayId}`}).then(summary => {
                dispatch({type: ActionTypes.DAYS_DAY_SUMMARY_RECEIVED, summary: summary, dayId: dayId})
            });
        }
    },
    fetchWeekSummary: function () {
        return dispatch => {
            makeRequest({url: `days/week/summary`}).then(summary => {
                dispatch({type: ActionTypes.DAYS_WEEK_SUMMARY_RECEIVED, summary: summary});
            });
        }
    },
    savePlan: dayPlans => {
        return dispatch => {
            makeRequest({url: 'days/new/week', body: dayPlans, method: 'POST'}).then(week => {
                toastr.success("plan saved");
            });
        }
    }
}