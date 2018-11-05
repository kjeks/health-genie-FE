import {createSelector} from 'reselect';

export const itemListSelector = (state, props) => {
    return state.get(props.type).itemList;
};
const selectedItemIdsSelector = (state, props) => {
    return state.get(props.type).selectedItemIds;
};

export const selectedItemSelector = createSelector(
    itemListSelector, selectedItemIdsSelector,
    (itemList, selectedItemIds) => {
        return selectedItemIds.map(mealId => {
            return itemList.get(mealId);
        })
    }
);
