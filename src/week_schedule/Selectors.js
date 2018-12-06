import {createSelector} from 'reselect';
import {Map, List} from 'immutable';
import {itemListSelector} from "../common/Selectors";
import {getUrlByListName} from "../common/list/ListUtils";
import {makeSelectorWeekSummary} from "./FlowTypes";

export const dayReducerSelector = (state) => {
    return state.get('DAYS');
};

export const dayPlanIdSelector = (state, props) => {
    return state.getIn(['DAYS', props.day])
};
export const dayPlansSelector = (state) => {
    return state.getIn(['WEEK', 'itemList'])
};
export const summaryDaysSelector = (state) => {
    return state.getIn(['SummaryDayReducer', 'days']);
};
export const initialWeekSelector = (state) => {
    return state.getIn(['SummaryDayReducer', 'initialWeek']);
};
export const updatedWeekSelector = (state) => {
    return state.getIn(['SummaryDayReducer', 'updatedWeek']);
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
        const contentItem = dayPlan.get(correctType);

        if(type === 'MEAL') {
            return contentItem.map(mealIdAndQuantity => {
                const mealId = mealIdAndQuantity.get('_id');
                const meal = itemList.get(mealId);

                return meal && Map({
                    name: meal.get('name'),
                    kcal: meal.getIn(['macros', 'kcal']),
                    quantity: mealIdAndQuantity.get('quantity')
                })

            }).filter(meal => {
                return !!meal
            })
        }
        if(type === 'ACTIVITY') {
            return contentItem.map(activityIdAndDuration => {
                const activityId = activityIdAndDuration.get('_id');
                const activity = itemList.get(activityId);

                return activity && Map({
                    name: activity.get('name'),
                    duration: activityIdAndDuration.get('quantity')
                })

            }).filter(meal => {
                return !!meal
            })
        }
    }
);
export const daySummarySelector = createSelector(
    dayPlanIdSelector, summaryDaysSelector,
    (dayPlanId, days) => {
        return days.get(dayPlanId)
    }
);
export const dayIdsInWeekSelector = createSelector(
    dayReducerSelector,
    (dayReducer) => {
        return List([
            dayReducer.monday,
            dayReducer.tuesday,
            dayReducer.wednesday,
            dayReducer.thursday,
            dayReducer.friday,
            dayReducer.saturday,
            dayReducer.sunday
        ]).filter(id => {
            return !!id
        });
    }
)
export const initialWeekSummarySelector = createSelector(
    initialWeekSelector,
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
export const updatedWeekSummarySelector = createSelector(
    updatedWeekSelector,
    (week) => {
        if(!week) {
            return null;
        }
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