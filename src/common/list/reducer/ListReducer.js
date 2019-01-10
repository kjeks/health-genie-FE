import ActionTypes from "../../ActionTypes";
import {makeListReducer} from "../ListFlowTypes";
import {List,OrderedMap, fromJS} from "immutable";

const initialState = makeListReducer({
    itemList: OrderedMap(),
    favoriteItemIds: List(),
    selectedIds: List(),
    userCreatedItemIds: List(),
    itemSelectionOpen: false
});

export default (reducerName = '') => (next) => (state = initialState, action) => {
    switch (action.type) {
        case `${reducerName}_${ActionTypes.ITEMS_RECEIVED}`:
            action.items.forEach(item => {
                delete item['__v'];
                state = state.setIn(['itemList', item._id], fromJS(item));
            });
            return state.set('selectedItemIds', List(action.selectedIds))
                .set('favoriteItemIds', List(action.favoriteItemIds))
                .set('userCreatedItemIds', List(action.selfMadeItemIds));

        case `${reducerName}_${ActionTypes.FAVORITE_TOGGLE_RECEIVED}`:
            return state.set('favoriteItemIds', List(action.favoriteItemIds));
        case `${reducerName}_${ActionTypes.CLOSE_MODAL}`:
            return state.set('itemSelectionOpen', false);
        default:
            return (next[0])(next.slice(1))(reducerName)(state, action);
    }
}
