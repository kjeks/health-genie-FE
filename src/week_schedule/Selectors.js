import {createSelector} from 'reselect';
import {Map, List} from 'immutable';
import {itemListSelector} from "../common/Selectors";
import {getUrlByListName} from "../common/list/ListUtils";
import {makeSelectorWeekSummary} from "./FlowTypes";

export const dayPlanIdSelector = (state, props) => {
    return state.getIn(['DAYS', props.day])
};
export const dayPlansSelector = (state) => {
    return state.getIn(['WEEK', 'itemList'])
};
export const summaryDaysSelector = (state) => {
    return state.getIn(['SummaryDayReducer', 'days']);
};
export const weekSelector = (state) => {
    return state.getIn(['SummaryDayReducer', 'week']);
};

export const dayPlanSelector =  createSelector(
    dayPlanIdSelector, dayPlansSelector,
    (dayPlanId, dayPlans) => {
        return dayPlans.get(dayPlanId) ||Map({
            name: "no plan selected",
            activities: List(),
            meals: List()
        });
    }
);
export const typeSelector = (state, props)=> {
    return props.type;
};

export const contentSelector = createSelector(
    itemListSelector, dayPlanSelector, typeSelector,
    (itemList, dayPlan, type) => {
        const correctType = getUrlByListName(type);
        const test = dayPlan.get(correctType);

        return test.map(id => {
            return itemList.get(id);
        }).filter(item => {
            return !!item;
        })
    }
);
export const daySummarySelector = createSelector(
    dayPlanIdSelector, summaryDaysSelector,
    (dayPlanId, days) => {
        return days.get(dayPlanId)
    }
);
export const weekSummarySelector = createSelector(
    weekSelector,
    (week) => {
        const difference = week.kcalEaten - (week.baseCaloriesUsed + week.kcalUsedFromExercise);

        return makeSelectorWeekSummary({
            baseCaloriesUsed: week.baseCaloriesUsed,
            kcalUsedFromExercise: week.kcalUsedFromExercise,
            allCaloriesUsed: week.baseCaloriesUsed + week.kcalUsedFromExercise,
            kcalEaten: week.kcalEaten,
            difference: difference,
            weightChange: difference / 7000
        })
    }
);