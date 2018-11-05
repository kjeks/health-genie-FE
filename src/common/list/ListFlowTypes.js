import type {RecordFactory, RecordOf} from 'immutable';
import {Record, List, Map} from 'immutable';

export type ListItemType = {
    name: string,
    kcal: number,
    _id: string
}

export type ListReducerType = {
    itemList: Map<string, RecordOf<ListItemType>>,
    selectedItemIds: List<string>,
    itemSelectionOpen: string | boolean
}
export const makeListReducer: RecordFactory<ListReducerType> = Record({
    itemList: Map(),
    selectedItemIds: List(),
    itemSelectionOpen: false
});