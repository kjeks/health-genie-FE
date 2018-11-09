import React, {PureComponent} from 'react';
import {List} from 'semantic-ui-react';
import MealSelectionItem from "./MealSelectionItem";

export default class MealSelectionModal extends PureComponent {
    render() {
        const list = this.props.list.map(listItem => {
            return <MealSelectionItem
                listItem={listItem}
                onItemSelected={this.props.onItemSelected}
                key={listItem.get('_id')}
            />;
        });
        return (
            <List celled horizontal className={'selection-list'}>
                {list.toList()}
            </List>

        )
    }
}