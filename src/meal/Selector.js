import {getUrlByListName} from "../common/list/ListUtils";

export const FoodSelector = (state, ownProps) => {
    return state.getIn(['NewDayReducer', getUrlByListName(ownProps.type), ownProps.item.get('_id')])
};
export const ActivitySelector = (state, ownProps) => {
    return state.getIn(['NewDayReducer', 'activities', ownProps.item.get('_id')])
};
