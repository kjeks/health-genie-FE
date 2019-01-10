import React, {Component} from 'react';
import {List} from 'semantic-ui-react';
import SelectSearch from 'react-select-search';
import Autocomplete from 'react-autocomplete';
import {List as VirtualizedList} from 'react-virtualized'


export default class SelectionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {search: ''}

    }

    // renderItems = (options) => {
    //     const SelectionItem = this.props.selectionItemType;
    //     return  <SelectionItem
    //         listItem={options.item}
    //         onItemSelected={this.props.onItemSelected}
    //         key={options.item.get('_id')}
    //     />
    // };
    //
    // render() {
    //     const searchOptions = this.props.list.map((listItem) => {
    //         return {name: listItem.get('name'), value: listItem.get('_id'), item: listItem};
    //
    //     });
    //
    //     return (
    //         <List celled className={'selection-list'}>
    //             <i className={'fa fa-window-close'} onClick={this.props.onModalClose}/>
    //                 <SelectSearch
    //                     options={searchOptions}
    //                     renderOption={this.renderItems}
    //                 />
    //         </List>
    //     )
    // }
    renderItem = (item) => {
        const SelectionItem = this.props.selectionItemType;
        return <SelectionItem
            listItem={item}
            onItemSelected={this.props.onItemSelected}
            key={item.get('_id')}
        />
    };

    renderMenu = (items, value, style) => {
        const rowRenderer = ({key, index, parent, style}) => {
            return <div className={'virtualized-list-item'} style={style}>
                    {items.get(index)}
                </div>
        }
        return <VirtualizedList
                rowRenderer={rowRenderer}
                rowHeight={200}
                rowCount={items.size}
                height={700}
                width={1000}
                style={{
                    height: 'auto',
                    maxHeight: 700
                }}
            />
    };
    shouldItemRender = item => {
        return item.get('name').toLowerCase().includes(this.state.search.toLowerCase());
    };

    render() {
        return <Autocomplete
            items={this.props.list.toList()}
            renderItem={this.renderItem}
            renderMenu={this.renderMenu}
            shouldItemRender={this.shouldItemRender}
            value={this.state.search}
            open={true}
            onChange={(e, value) => this.setState({search: value})}
        >
        </Autocomplete>

    }
}