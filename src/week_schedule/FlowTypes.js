import {Record, List, Map} from 'immutable';
import {RecordOf} from 'immutable';


export type DayPlanType = {
    name: string,
    activityIds: List<string>,
    mealIds: List<string>
}

export const makeDayPlan = Record({
    name: null,
    activityIds: List(),
    mealIds: List()
});
export type WeekReducerType = {
    dayPlans: List<DayPlanType>,
    currentSelectedDay: string,
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
    saturday: string,
    sunday: string
}

export const makeWeekReducer = Record({
    dayPlans: List(),
    currentSelectedDay: null,
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
    sunday: null
});
export type SummaryDayType = {
    kcalBurned: number,
    kcalEaten: number
}
export const makeSummaryDay = Record({
    kcalBurned: null,
    kcalEaten: null
});
export const makeSummaryWeek = Record({
    kcalUsedFromExercise: null,
    kcalEaten: null,
    baseCaloriesUsed: null
});
export const makeSelectorWeekSummary = Record({
    baseCaloriesUsed: null,
    kcalUsedFromExercise: null,
    allCaloriesUsed: null,
    kcalEaten: null,
    difference: null,
    weightChange: null
});

export type SummaryReducerType = {
    days: Map<string, RecordOf<SummaryDayType>>
}
export const makeSummaryReducer = Record({
    days: Map(),
    updatedWeek: null,
    initialWeek: makeSummaryWeek()
});
