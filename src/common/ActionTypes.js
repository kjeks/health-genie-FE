export default {
    CHANGE_ITEM: 'CHANGE_ITEM',
    ADD_ITEM: 'ADD_ITEM',
    SELECT_ITEM: 'SELECT_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    FETCH_ITEMS: 'FETCH_ITEMS',
    ITEMS_RECEIVED: 'ITEMS_RECEIVED',
    REQUEST_LIST_SAVE: 'REQUEST_LIST_SAVE',
    LIST_SAVE_SUCCESSFUL: 'LIST_SAVE_SUCCESSFUL'
}
export function generateActionType(reducerName, actionType) {
    return `${reducerName}_${actionType}`;
}