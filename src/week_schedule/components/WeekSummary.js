// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Header} from 'semantic-ui-react';
import Actions from "../Actions";
import ListItem from "../../common/list/components/ListItem";
import {weekSummarySelector} from "../Selectors";

class WeekSummary extends Component <{}> {
    constructor(props) {
        super(props);
        this.props.fetchWeekSummary()
    }

    render() {
        return (
            <Grid.Column width={4} className='week-schedule-container__summary'>
                <Grid celled columns='1'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h3'>Week Summary</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column>
                        <ListItem
                            values={this.props.weekSummary}
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        )
    }
}

function mapStateToProps(state) {
    return {
        week: state.getIn(['SummaryDayReducer', 'week']),
        weekSummary: weekSummarySelector(state)
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchWeekSummary: () => dispatch(Actions.fetchWeekSummary())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekSummary)