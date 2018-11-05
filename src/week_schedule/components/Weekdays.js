// @flow
import React, {PureComponent} from 'react';
import {Grid} from 'semantic-ui-react';
import Weekday from "./Weekday";

export default class Weekdays extends PureComponent <{
    days: [string]
}> {
    render() {
        const days = this.props.days.map(dayName => {
            return <Weekday
                key={dayName}
                day={dayName}
            />
        });
        return (
            <Grid.Row>
                {days}
            </Grid.Row>
        )
    }
}