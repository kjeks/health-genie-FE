import React, {PureComponent} from 'react';
import {List} from 'semantic-ui-react';
import SelectSearch from 'react-select-search';

export default class SelectionModal extends PureComponent {
     renderItems = (options)=> {
         const SelectionItem = this.props.selectionItemType;
         return <SelectionItem
             listItem={options.item}
             onItemSelected={this.props.onItemSelected}
             key={options.item.get('_id')}
         />
    };
    render() {
        const searchOptions = this.props.list.map(listItem => {
            return {name: listItem.get('name'), value: listItem.get('_id'), item: listItem};
        });

        return (
            <div>
                <List celled className={'selection-list'}>
                    <i className={'fa fa-window-close'} onClick={this.props.onModalClose}/>
                    <SelectSearch
                        options={searchOptions}
                        renderOption={this.renderItems}
                    />
                </List>
            </div>
        )
    }
}