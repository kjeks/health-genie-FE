// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Actions from "../Actions";
import {dayPlanIdSelector, daySummarySelector} from "../Selectors";
import ListItem from "../../common/list/components/ListItem";
class DaySummary extends Component <{}> {
    constructor(props) {
        super(props);
        this.props.fetchSummary(this.props.dayId);
    }
    render () {
       if(!this.props.day){
           return null;
       }
        return (
            <ListItem
                values={this.props.day}
                key={this.props.dayId}
            />
        )
    }
}
function mapStateToProps (state, ownProps) {
    return {
        dayId: dayPlanIdSelector(state, ownProps),
        day: daySummarySelector(state, ownProps),

    }
}
function mapDispatchToProps (dispatch) {
    return {
        fetchSummary: (dayId)=> dispatch(Actions.fetchSummary(dayId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DaySummary);