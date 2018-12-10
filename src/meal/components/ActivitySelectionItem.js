import React, {PureComponent} from 'react';
import {List, Header} from 'semantic-ui-react';

export default class ActivitySelectionItem extends PureComponent <> {
    onItemSelected = () => {
        this.props.onItemSelected(this.props.listItem.get('_id'))
    };
    render () {
        const listItem = this.props.listItem;

        return (
            <List.Item className={'list-item'} key={listItem.get('name')} onClick={this.onItemSelected}>
                <Header>{listItem.get('name')}</Header>
            </List.Item>
        )
    }
}