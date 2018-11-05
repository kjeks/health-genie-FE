import ActionTypes from "../../ActionTypes";

export default (next) => reducerName =>(state, action) => {
    switch(action.type) {
        case `${reducerName}_${ActionTypes.ADD_ITEM}`:
            return state.set('itemSelectionOpen', 'new');
        case `${reducerName}_${ActionTypes.SELECT_ITEM}`:
            if(state.itemSelectionOpen === 'new') {
                state = state.set('selectedItemIds', state.selectedItemIds.push(action.itemId));
            }
            else if(Number.isInteger(state.itemSelectionOpen)){
                state = state.set('selectedItemIds', state.selectedItemIds.set(state.itemSelectionOpen, action.itemId));
            }
            return state.set('itemSelectionOpen', false);
        default:
            return (next[0])(next.slice(1))(reducerName)(state, action);
    }
}
