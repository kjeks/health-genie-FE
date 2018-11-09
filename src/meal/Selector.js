export const MealSelector = (state, ownProps) => {
    return state.getIn(['NewDayReducer', 'meals', ownProps.item.get('_id')])
};