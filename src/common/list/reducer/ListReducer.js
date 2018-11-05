import ActionTypes from "../../ActionTypes";
import {makeListReducer} from "../ListFlowTypes";
import {List, Map, fromJS} from "immutable";

const initialState = makeListReducer({
    itemList: Map(),
    selectedItemIds: List(),
    itemSelectionOpen: false
});

export default  (reducerName = '')=>  (next)  => (state = initialState, action) =>{
    switch (action.type) {
        case `${reducerName}_${ActionTypes.ITEMS_RECEIVED}`:
            action.items.forEach(item => {
                delete item['__v'];

                state = state.setIn(['itemList', item._id], fromJS(item))
            });
            return state.set('selectedItemIds', List(action.selectedIds));
        default:
            return (next[0])(next.slice(1))(reducerName)(state, action);
    }
}
