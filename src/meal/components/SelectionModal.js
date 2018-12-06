import React, {PureComponent} from 'react';
import {List} from 'semantic-ui-react';

export default class SelectionModal extends PureComponent {
    render() {
        const SelectionItem = this.props.selectionItemType;

        const list = this.props.list.map(listItem => {
            return <SelectionItem
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