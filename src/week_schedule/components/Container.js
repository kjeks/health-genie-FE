// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Button, Header} from 'semantic-ui-react';
import Weekdays from "./Weekdays";
import WeekSummary from './WeekSummary';
import ListActions from "../../common/list/ListActions";
import Actions from "../Actions";

class WeeklyContainer extends Component <{}> {
    constructor(props) {
        super(props);
        this.props.fetchDays();
        this.props.fetchPlansForDays();
    }

    handleDaySelected = (day) => {
        this.props.onDaySelected(day);
    };
    handleSavePlan = () => {
        this.props.savePlan(this.props.dayPlans)
    };

    render() {
        const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const tableHeader = weekdays.map(day => {
            const onClick = () => {
                this.handleDaySelected(day);
            };
            return <Grid.Column key={day} onClick={onClick}>
                <Header as={'h3'} className={'header--clickable'}>{day}</Header>
            </Grid.Column>
        });
        return (
            <div>
                <Grid width={18} className={'week-schedule-container'}>
                    <Grid.Column width={12}>
                        <Grid celled columns='7'>
                            <Grid.Row>
                                {tableHeader}
                            </Grid.Row>
                            <Weekdays
                                days={weekdays}
                            />
                        </Grid>
                    </Grid.Column>
                    <WeekSummary/>
                </Grid>
                <Button onClick={this.handleSavePlan}>Save week plan</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dayPlans: state.get('DAYS')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDaySelected: (day) => dispatch(Actions.onDaySelected(day)),
        fetchDays: () => dispatch(ListActions.fetchList('WEEK')),
        fetchPlansForDays: () => dispatch(Actions.fetchPlansForDays()),
        savePlan: (dayPlan) => dispatch(Actions.savePlan(dayPlan))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyContainer);