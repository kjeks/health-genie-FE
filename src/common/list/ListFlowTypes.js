import type {RecordFactory, RecordOf} from 'immutable';
import {Record, List,OrderedMap} from 'immutable';

export type ListItemType = {
    name: string,
    kcal: number,
    _id: string
}

export type ListReducerType = {
    itemList: OrderedMap<string, RecordOf<ListItemType>>,
    favoriteItemIds: List<string>,
    selectedItemIds: List<string>,
    itemSelectionOpen: string | boolean,
    userCreatedItemIds: List<string>
}
export const makeListReducer: RecordFactory<ListReducerType> = Record({
    itemList: OrderedMap(),
    favoriteItemIds: List(),
    selectedItemIds: List(),
    itemSelectionOpen: false,
    userCreatedItemIds: List()
});