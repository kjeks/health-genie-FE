import ActionTypes from "../../ActionTypes";

export default   next => reducerName => (state, action) => {
    switch (action.type) {
        case `${reducerName}_${ActionTypes.CHANGE_ITEM}`:
            return state.set('itemSelectionOpen', action.index);
        case `${reducerName}_${ActionTypes.REMOVE_ITEM}`:
            return state.set('selectedItemIds', state.selectedItemIds.remove(action.index));
        default:
            return (next[0])(next.slice(1))(reducerName)(state,action)
    }
}