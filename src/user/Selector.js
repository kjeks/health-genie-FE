import {createSelector} from 'reselect';
import moment from 'moment';

const heightSelector = state => {
    return state.getIn(['UserReducer', 'height']);
};
const weightSelector = state => {
    return state.getIn(['UserReducer', 'weight']);
};
const targetWeightSelector = state => {
    return state.getIn(['UserReducer', 'targetWeight']);
};
const targetDateSelector = state => {
    return state.getIn(['UserReducer', 'targetDate']);
};
const activityLevelSelector = state => {
    return state.getIn(['UserReducer', 'activityLevel']);
};
const ageSelector = state => {
    return state.getIn(['UserReducer', 'age']);
};
const sexSelector = state => {
    return state.getIn(['UserReducer', 'sex']);
};

export const BRMSelector = createSelector(
    weightSelector, heightSelector, ageSelector, sexSelector,
    (weight, height, age, sex) => {
        if(sex === 'male') {
            return 88.362 + (13.397*weight) + (4.799 * height) - (5.677 * age);
        }
        if(sex === 'female') {
            return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
    }
);
export const BMISelector = createSelector(
    weightSelector, heightSelector,
    (weight, height)=> {
        const heightInMeters = height/100;

        return weight / (heightInMeters * heightInMeters)
    }
);
export const dailyCaloriesUsedSelector = createSelector(
    BRMSelector, activityLevelSelector,
    (brm, activityLevel) => {
        switch(activityLevel) {
            case 1:
                return brm * 1.2;
            case 2:
                return brm * 1.375;
            case 3:
                return brm * 1.55;
            case 4:
                return brm * 1.725;
            case 5:
                return brm * 1.9;
            default:
                return brm * 1.2;
        }
    }
);
export const dailyCalSelector = createSelector(
    weightSelector, targetWeightSelector, targetDateSelector, dailyCaloriesUsedSelector,
    (weight, targetWeight, targetDate, dailyUsed) => {
        const caloriesPrKg = 7700;
        const kgToLoose = targetWeight - weight;
        const calToLoose = kgToLoose * caloriesPrKg;
        const daysToTarget = targetDate.diff(moment(), 'days');
       
        return dailyUsed + calToLoose/daysToTarget;
    }
);
