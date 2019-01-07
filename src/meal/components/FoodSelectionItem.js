import React, {PureComponent} from 'react';
import {List, Header} from 'semantic-ui-react';

export default class FoodSelectionItem extends PureComponent {
    onItemSelected = () => {
        this.props.onItemSelected(this.props.listItem.get('_id'))
    };
    render () {
        const listItem = this.props.listItem;
        const macros = listItem.get('macros').map((value, name) => {
            return <div key={name}>{`${name}: ${value}`}</div>
        });
        return (
            <List.Item className={'list-item'} key={listItem.get('name')} onClick={this.props.onItemSelected && this.onItemSelected}>
                <Header>{listItem.get('name')}</Header>
                <List.Content>
                    {this.props.quantity && <div className={'list-item__quantity'}>{`grams: ${this.props.quantity}`}</div>}
                    {macros.toList()}
                </List.Content>
            </List.Item>
        )
    }
}