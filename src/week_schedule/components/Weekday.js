// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Grid} from 'semantic-ui-react';
import Modal from 'react-modal';
import ListActions from "../../common/list/ListActions";
import {
    dayIdsInWeekSelector, dayPlanIdSelector, dayPlanActivityIdsSelector, dayPlanSelector,
    dayPlanMealIdsSelector
} from "../Selectors";
import DayContentList from './DayContentList';
import Actions from "../Actions";
import DaySummary from "./DaySummary";
import SelectionModal from "../../meal/components/SelectionModal";
import DaySelectionItem from "./DaySelectionItem";


class Weekday extends Component<{
    day: string
}> {
    constructor (props) {
        super(props);
        this.state = {mealExpanded: false, activitiesExpanded: false, summaryExpanded: false}
    }
    toggleMealExpanded = () => {
        this.setState({mealExpanded: !this.state.mealExpanded})
    };
    toggleActivitiesExpanded = () => {
        this.setState({activitiesExpanded: !this.state.activitiesExpanded})
    };
    toggleSummaryExpanded = () => {
        this.setState({summaryExpanded: !this.state.summaryExpanded});
    };
    handleSelectItem = (id) => {
        const days = this.props.dayReducer.set(this.props.dayReducer.currentSelectedDay, id);
        const dayIds = [
            days.monday,
            days.tuesday,
            days.wednesday,
            days.thursday,
            days.friday,
            days.saturday,
            days.sunday
        ];
        this.props.onItemSelected(id, dayIds)
    };
    handleModalClose = () => {
        this.props.onModalClose('WEEK');
    };
    handlePlanClicked = () => {
        this.props.onDaySelected(this.props.day);
    };

    render() {
        return (
            <Grid.Column>
                <Header as='h4' onClick={this.handlePlanClicked} color='teal' className={'header--clickable'}>{`${this.props.dayPlan.get('name')}`}</Header>
                <Header as='h5' onClick={this.toggleSummaryExpanded} className={'header--clickable'}>summary</Header>
                {this.state.summaryExpanded &&
                <DaySummary
                    day={this.props.day}
                />
                }
                <Header as='h5' onClick={this.toggleMealExpanded} className={'header--clickable'}>Meals</Header>
                {this.state.mealExpanded &&
                <DayContentList
                    type={'MEAL'}
                    contentIds={this.props.dayPlanMealIds}
                    day={this.props.day}
                />}

                <Header as='h5' onClick={this.toggleActivitiesExpanded} className={'header--clickable'}>Activities</Header>
                {this.state.activitiesExpanded &&
                <DayContentList
                    type={'ACTIVITY'}
                    contentIds={this.props.dayPlanActivityIds}
                    day={this.props.day}
                />}
                <Modal
                    isOpen={this.props.itemSelectionOpen !==false}
                >
                    <SelectionModal
                        onModalClose={this.handleModalClose}
                        list={this.props.itemList}
                        onItemSelected={this.handleSelectItem}
                        selectionItemType={DaySelectionItem}
                        rowHeight={300}
                    />
                </Modal>
            </Grid.Column>
        )
    }
}
function mapStateToProps (state, ownProps) {
    return {
        itemSelectionOpen: state.getIn(['WEEK', 'itemSelectionOpen']),
        itemList: state.getIn(['WEEK', 'itemList']),
        dayPlanId: dayPlanIdSelector(state, ownProps),
        dayPlan: dayPlanSelector(state, ownProps),
        dayPlanActivityIds: dayPlanActivityIdsSelector(state, ownProps),
        dayPlanMealIds: dayPlanMealIdsSelector(state, ownProps),
        dayIds: dayIdsInWeekSelector(state),
        dayReducer: state.get('DAYS'),
        currentSelectedDay: state.getIn(['DAYS', 'currentSelectedDay'])
    }
}
function mapDispatchToProps (dispatch) {
    return {
        onItemSelected: (id, dayIds) => dispatch(Actions.onDayPicked(id, dayIds)),
        onDaySelected: (day) => dispatch(Actions.onDaySelected(day)),
        onModalClose: type => dispatch(ListActions.onModalClose(type))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Weekday)