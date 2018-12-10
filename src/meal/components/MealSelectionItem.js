import React, {PureComponent} from 'react';
import {List, Header} from 'semantic-ui-react';

export default class MealSelectionItem extends PureComponent {
    onItemSelected = () => {
        this.props.onItemSelected(this.props.listItem.get('_id'))
    };
    render () {
        const listItem = this.props.listItem;
        const macros = listItem.get('macros').map((value, name) => {
            return <div key={name}>{`${name}: ${value}`}</div>
        });
        return (
            <List.Item className={'list-item'} key={listItem.get('name')} onClick={this.onItemSelected}>
                <Header>{listItem.get('name')}</Header>
                <List.Content>
                    {macros.toList()}
                </List.Content>
            </List.Item>
        )
    }
}