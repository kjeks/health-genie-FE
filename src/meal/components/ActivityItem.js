import React, {PureComponent} from 'react';
import {Grid, Header, Input} from 'semantic-ui-react';
import Actions from "../Actions";
import {connect} from "react-redux";
import {ActivitySelector} from "../Selector";
import ActivitySpecifics from './ActivitySpecifics';

class ActivityItem extends PureComponent <{}>{
    onDurationChange = (event, target) => {
        this.props.onDurationChange(this.props.item.get('_id'), Number(target.value))
    };
    onSpeedChange = (event, target) => {
        this.props.onSpeedChange(this.props.item.get('_id'), 'speed', Number(target.value))
    };

    render() {
        const activityItem = this.props.item;
        return (
            <Grid columns={2} celled>
                <Grid.Row>
                    <Grid.Column width={16} textAlign={'center'}>
                        <Header as={'h3'}>{activityItem.get('name')}</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Header as={'h4'} textAlign={'center'}>
                            pr minute
                        </Header>
                        <div>{`kcal ${activityItem.get('kcal')}`}</div>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Input label={'select duration'} type={'number'} value={this.props.activity && this.props.activity.get('quantity')} onChange={this.onDurationChange}/>
                        <Input label={'select speed'} type={'number'} value={this.props.activity && this.props.activity.get('speed')} onChange={this.onSpeedChange}/>
                        {this.props.activity && <ActivitySpecifics
                            kcalBurned={this.props.activity.get('quantity') * activityItem.get('kcal')}
                        />}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        activity: ActivitySelector(state, ownProps)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDurationChange: (activityId, newValue) => dispatch(Actions.onDurationChange(activityId, newValue)),
        onSpeedChange: (activityId, type, newValue) => dispatch(Actions.onSpeedChange(activityId, newValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityItem);