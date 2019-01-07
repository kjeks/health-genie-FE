import React, {PureComponent} from 'react';
import FoodSelectionItem from '../../meal/components/FoodSelectionItem';
import {List, Header} from 'semantic-ui-react';
import ActivitySelectionItem from "../../meal/components/ActivitySelectionItem";

export default class DaySelectionItem extends PureComponent <{}> {
    onItemSelected = () => {
        this.props.onItemSelected(this.props.listItem.get('_id'))
    };
    renderMeals = (meals) => {
        return meals.map((meal) => {
            return <FoodSelectionItem
                    quantity={meal.get('quantity')}
                    listItem ={meal.get('meal')}
                    key={meal.getIn(['meal', '_id'])}
                />
        })
    };
    renderActivities = (activities) => {
        return activities.map((activity) => {
            return <ActivitySelectionItem
                listItem={activity.get('activity')}
                key={activity.getIn(['activity', '_id'])}

            />
        });
    };
    render () {
        const dayItem = this.props.listItem;
        const meals = this.renderMeals(dayItem.get('meals'));
        const activities = this.renderActivities(dayItem.get('activities'));

        return (
            <List.Item className={'list-item'} key={dayItem.get('name')} onClick={this.onItemSelected}>
                <Header>{dayItem.get('name')}</Header>
                <List.Content className={'day-list-content'}>
                    <div className={'day-selection-item'}>
                        <Header>meals</Header>
                        <List.Content className={'day-selection-item__content'}>
                        {meals}
                        </List.Content>
                    </div>
                    <div className={'day-selection-item'}>
                        <Header>activities</Header>
                        <List.Content className={'day-selection-item__content'}>
                            {activities}
                        </List.Content>
                    </div>
                </List.Content>
            </List.Item>
        )
    }
}