// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Grid} from 'semantic-ui-react';
import Modal from 'react-modal';
import ListSelection from "../../common/list/components/ListSelection";
import ListActions from "../../common/list/ListActions";
import {dayPlanIdSelector, dayPlanSelector} from "../Selectors";
import DayContentList from './DayContentList';
import Actions from "../Actions";
import DaySummary from "./DaySummary";


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
        this.props.onItemSelected(id);
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
                <Header as='h5' onClick={this.toggleMealExpanded} className={'header--clickable'}>{`Meals`}</Header>
                {this.state.mealExpanded &&
                <DayContentList
                    type={'MEAL'}
                    contentIds={this.props.dayPlan.get('meals')}
                    day={this.props.day}
                />}

                <Header as='h5' onClick={this.toggleActivitiesExpanded} className={'header--clickable'}>Activities</Header>
                {this.state.activitiesExpanded &&
                <DayContentList
                    type={'ACTIVITY'}
                    contentIds={this.props.dayPlan.get('activities')}
                    day={this.props.day}
                />}
                <Modal
                    isOpen={this.props.itemSelectionOpen !==false}
                >
                    <ListSelection
                        list={this.props.itemList}
                        onItemSelected={this.handleSelectItem}
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
        dayPlan: dayPlanSelector(state, ownProps)
    }
}
function mapDispatchToProps (dispatch) {
    return {
        onItemSelected: (id)=> dispatch(ListActions.onItemSelected(id, 'WEEK')),
        onDaySelected: (day) => dispatch(Actions.onDaySelected(day))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Weekday)