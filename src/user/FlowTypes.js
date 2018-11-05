import {List, Record} from 'immutable';
import type {RecordOf} from 'type';
import moment from 'moment';

export type UserReducerType = {
    weight: number,
    height: number,
    targetWeight: number,
    targetDate: moment,
    activityLevel: number,
    sex: string,
    age: number
}
export type ActivityType = {
    name: string,
    kcal: number
}
export const makeActivity = Record({
    name: null,
    kcal: null,
    id: null
});
export type ActivityReducerType = {
    activities: List<RecordOf<ActivityType>>
}

export const makeActivityReducer = Record({
    activities: List()
});
export const makeUserReducer = Record({
    weight: 75,
    height: 175,
    targetWeight: 75,
    targetDate: moment().add('1', 'M'),
    activityLevel: null,
    sex: null,
    age: 25
});