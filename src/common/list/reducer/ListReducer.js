import ActionTypes from "../../ActionTypes";
import {makeListReducer} from "../ListFlowTypes";
import {List, Map, fromJS} from "immutable";

const initialState = makeListReducer({
    itemList: Map(),
    favoriteItemIds: List(),
    selectedIds: List(),
    itemSelectionOpen: false
});

export default (reducerName = '') => (next) => (state = initialState, action) => {
    switch (action.type) {
        case `${reducerName}_${ActionTypes.ITEMS_RECEIVED}`:
            action.items.forEach(item => {
                delete item['__v'];
                state = state.setIn(['itemList', item._id], fromJS(item));
            });
            return state.set('selectedItemIds', List(action.selectedIds)).set('favoriteItemIds', List(action.favoriteItemIds));

        case `${reducerName}_${ActionTypes.FAVORITE_TOGGLE_RECEIVED}`:
            return state.set('favoriteItemIds', List(action.favoriteItemIds));

        default:
            return (next[0])(next.slice(1))(reducerName)(state, action);
    }
}
