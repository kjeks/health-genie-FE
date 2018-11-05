// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListActions from "../../common/list/ListActions";
import AdminListItem from "./AdminListItem";
import Actions from "../Actions";
import {Header} from 'semantic-ui-react';

class AdminContainer extends Component <{}> {
    constructor(props) {
        super(props);
        this.props.fetchList('MEAL');
        this.props.fetchList('ACTIVITY');
    }


    render() {
        const activities = this.props.activities.map((activity) => {
            return <AdminListItem
                name={activity.name}
                kcal={activity.kcal}
                id={activity._id}
                key={activity._id}
                onUpdate={this.props.onUpdate}
                onDelete={this.props.onDelete}
                type={"activity"}
            />
        });
        const meals = this.props.meals.map((meal) => {
            return <AdminListItem
                name={meal.name}
                kcal={meal.kcal}
                id={meal._id}
                key={meal._id}
                onUpdate={this.props.onUpdate}
                onDelete={this.props.onDelete}
                type={"meal"}
            />
        });

        return (
            <div className='admin-container'>
                <div>
                    <Header as='h1' className={"centered"}>Activities</Header>
                    {activities.toList()}
                </div>
                <div>
                    <Header as='h1' className={"centered"}>Meals</Header>
                    {meals.toList()}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activities: state.get('ACTIVITY').itemList,
        meals: state.get('MEAL').itemList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchList: (listName) => dispatch(ListActions.fetchList(listName)),
        onUpdate: (id, name, type, kcal) => dispatch(Actions.onUpdate(id, name, type, kcal)),
        onDelete: (id, type) => dispatch(Actions.onDelete(id, type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);