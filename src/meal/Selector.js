export const MealSelector = (state, ownProps) => {
    return state.getIn(['NewDayReducer', 'meals', ownProps.item.get('_id')])
};
export const ActivitySelector = (state, ownProps) => {
    return state.getIn(['NewDayReducer', 'activities', ownProps.item.get('_id')])
};