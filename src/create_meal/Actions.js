import ActionTypes from "./ActionTypes";
import {makeRequest} from "../common/requestUtil";
import {generateActionType} from "../common/ActionTypes";
import {getUrlByListName} from "../common/list/ListUtils";
import {toastr} from 'react-redux-toastr';

export default {
    createItem: (name, nutrients, type) => {
        return dispatch => {
            dispatch({type: generateActionType(type, ActionTypes.CREATE_REQUESTED)});
            makeRequest({url: getUrlByListName(type), method: 'POST', body: {name: name, nutrients: nutrients}}).then(item => {
                dispatch({type: generateActionType(type, ActionTypes.CREATE_SUCCESSFUL)});
                toastr.success("meal created", `name: ${item.name}`);
            })
        }
    },
    createMeal: (ingredientIds, name) => {
        return dispatch => {
            dispatch({type: ActionTypes.CREATE_MEAL_REQUESTED});
            makeRequest({url: `${getUrlByListName('MEAL')}/build`, method: 'POST', body: {ingredientIds: ingredientIds, name: name}}).then(meal => {
                dispatch({type: ActionTypes.CREATE_MEAL_SUCCESSFUL});
                toastr.success("meal created", `name: ${meal.name}`);
            });
        }
    }
}



