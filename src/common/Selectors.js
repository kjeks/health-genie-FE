import {createSelector} from 'reselect';
import {getUrlByListName} from "./list/ListUtils";

export const itemListSelector = (state, props) => {
    return state.get(props.type || props).itemList;
};
const selectedItemIdsSelector = (state, props) => {
    return state.get(props.type || props).selectedItemIds;
};
const favoriteIdsSelector = (state, props) => {
    return state.get(props.type || props).favoriteItemIds;
};
const userCreatedIdsSelector = (state, props) => {
    return state.get(props.type).userCreatedItemIds;
};
const quantitySelector = (state, props) => {
    return state.getIn([
        'NewDayReducer',
        getUrlByListName(props.type)
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
            const quant = quantity &&  quantity.getIn([id, 'quantity']);
            return [id, quant];
        });
    }
);
export const favoriteListSelector = createSelector(
    favoriteIdsSelector, itemListSelector,
    (favoriteIds, itemList) => {
        return favoriteIds.map(id => {
            return itemList.get(id);
        })
    }
);
export const userMadeListSelector = createSelector(
    userCreatedIdsSelector, itemListSelector,
    (userCreatedIds, itemList) => {
        return userCreatedIds.map(id => {
            return itemList.get(id);
        })
    }
);
