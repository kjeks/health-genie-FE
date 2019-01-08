// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {RecordOf} from 'immutable';
import Actions from "../Actions";
import Summary from "./Summary";
import {BMISelector, dailyCalSelector} from "../Selector";
import {Input, Label, Header, Card, Dropdown, Checkbox, Form, Button} from 'semantic-ui-react';
import {DateInput} from 'semantic-ui-calendar-react';
import moment from 'moment';
import {ACTIVITY_LEVEL} from "../../constants/ActivityLevels";
import type {UserReducerType} from "../FlowTypes";

class UserContainer extends Component <{
    onValueChanged: (string, string|number) => void,
    fetchUser: ()=> void,
    onUserSaved: (RecordOf<UserReducerType>)=> void,
    bmi: number,
    dailyCal: number
}> {
    constructor(props) {
        super(props);
        this.props.fetchUser()
    }

    onHeightChanged = (event) => {
        this.props.onValueChanged('height', event.target.value);
    };
    onWeightChanged = event => {
        this.props.onValueChanged('weight', event.target.value);
    };
    onAgeChanged = event => {
        this.props.onValueChanged('age', event.target.value);
    };
    onTargetWeightChanged = event => {
        this.props.onValueChanged('targetWeight', event.target.value);
    };
    onTargetDateChanged = (event, {name, value}) => {
        this.props.onValueChanged('targetDate', moment(createValidMomentFormat(value)));
    };
    onActivityLevelChanged = (event, data) => {
        this.props.onValueChanged('activityLevel', data.value);
    };
    onSexChanged = (event, data) => {
        this.props.onValueChanged('sex', data.value);
    };
    onUserSaved = () => {
        this.props.onUserSaved(this.props.user);
    };

    render() {
        const user = this.props.user;
        return (
            <div className="user-container">
                <div className='user-data'>
                    <Header as='h1' className={"centered"}>your information</Header>
                    <Card>
                        <Input label={"height(cm)"} type={"number"} value={user.height}
                               onChange={this.onHeightChanged}/>
                        <Input label={"age(years)"} type={"number"} value={user.age}
                               onChange={this.onAgeChanged}/>
                        <Input label={"weight(kg)"} type={"number"} value={user.weight}
                               onChange={this.onWeightChanged}/>
                        <Input label={"target weight(kg)"} type={"number"} value={user.targetWeight}
                               onChange={this.onTargetWeightChanged}/>
                        <Label className="user-date-selector">
                            goal date
                            <DateInput name="time"
                                       placeholder="Time"
                                       value={user.targetDate.format('MMM Do YYYY')}
                                       iconPosition="left"
                                       onChange={this.onTargetDateChanged}
                            />
                        </Label>
                        <Label>
                            select activity level
                            <Dropdown button options={ACTIVITY_LEVEL} label="activity"
                                      placeholder="select activity level"
                                      value={user.activityLevel}
                                      onChange={this.onActivityLevelChanged}
                            />
                        </Label>
                        <Label>
                            <Form>
                                <Form.Field>
                                    <Checkbox radio name="sexRadio" value="male" label={"male"}
                                              checked={user.sex === "male"} onClick={this.onSexChanged}/>
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox radio name="sexRadio" value="female" label={"female"}
                                              checked={user.sex === "female"} onClick={this.onSexChanged}/>
                                </Form.Field>
                            </Form>
                        </Label>
                        <Button onClick={this.onUserSaved}>save changes</Button>
                    </Card>
                </div>
                <Summary bmi={this.props.bmi} dailyCal={this.props.dailyCal}/>
            </div>
        )
    }
}

function createValidMomentFormat(dateString) {
    const dayMonthYearArray = dateString.split('-');

    return `${dayMonthYearArray[2]}-${dayMonthYearArray[1]}-${dayMonthYearArray[0]}`
}

function mapStateToProps(state) {
    return {
        user: state.get('UserReducer'),
        bmi: BMISelector(state),
        dailyCal: dailyCalSelector(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onValueChanged: (type, value) => dispatch(Actions.onValueChanged(type, value)),
        fetchUser: () => dispatch(Actions.fetchUser()),
        onUserSaved: (user)=> dispatch(Actions.onUserSaved(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);