import {createSelector} from 'reselect';
import {getUrlByListName} from "./list/ListUtils";

export const itemListSelector = (state, props) => {
    return state.get(props.type).itemList;
};
const selectedItemIdsSelector = (state, props) => {
    return state.get(props.type || props).selectedItemIds;
};
const quantitySelector = (state, type) => {
    return state.getIn([
        'NewDayReducer',
        getUrlByListName(type)
    ])
};

export const selectedItemSelector = createSelector(
    itemListSelector, selectedItemIdsSelector,
    (itemList, selectedItemIds) => {
        return selectedItemIds.map(mealId => {
            return itemList.get(mealId);
        })
    }
);

export const idAndQuantitySelector = createSelector(
    selectedItemIdsSelector, quantitySelector,
    (selectedItemIds, quantity) => {
        return selectedItemIds.map(id => {
            const quant = quantity &&  quantity.get(id);
            return [id, quant || 100];
        });
    }
)
