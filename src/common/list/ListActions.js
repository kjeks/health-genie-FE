import ActionTypes, {generateActionType} from "../ActionTypes";
import {makeRequest} from "../requestUtil";
import {getUrlByListName} from "./ListUtils";

export default {
    onItemChange: function (index, itemId, listName) {
        return dispatch => {
            dispatch({type:generateActionType(listName, ActionTypes.CHANGE_ITEM), index: index, itemId: itemId})
        }
    },
    addItem: function (listName) {
        return dispatch => {
            dispatch({type: generateActionType(listName, ActionTypes.ADD_ITEM)})
        }
    },
    onItemSelected: function (id, listName) {
        return dispatch => {
            dispatch({type: generateActionType(listName, ActionTypes.SELECT_ITEM), itemId: id});
        }
    },
    onItemRemove: function (index, listName) {
        return dispatch => {
            dispatch({type: generateActionType(listName, ActionTypes.REMOVE_ITEM), index: index});
        }
    },
    fetchList: function (listName) {
        return dispatch => {
            dispatch({type: generateActionType(listName, ActionTypes.FETCH_ITEMS)});
            makeRequest({url: `${getUrlByListName(listName)}`}).then(data=> {
                dispatch({
                    type: generateActionType(listName, ActionTypes.ITEMS_RECEIVED),
                    selectedIds: data.selectedIds,
                    favoriteItemIds: data.favoriteItemIds,
                    items: data.items
                });
            })
        }
    },
    onListSaved: function (list, listName) {
        return dispatch => {
            dispatch({type: generateActionType(listName, ActionTypes.REQUEST_LIST_SAVE)});
            makeRequest({url: `users/${getUrlByListName(listName)}`, method:'POST', body: list}).then(()=> {
                dispatch({type: generateActionType(listName, ActionTypes.LIST_SAVE_SUCCESSFUL)})
            })
        }
    }
}