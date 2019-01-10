import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';
import {List as VirtualizedList} from 'react-virtualized'


export default class SelectionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {search: ''}

    }

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
            return <div className={'virtualized-list-item'} key={key} style={style}>
                {items.get(index)}
            </div>
        }
        return <VirtualizedList
            rowRenderer={rowRenderer}
            rowHeight={this.props.rowHeight || 170}
            rowCount={items.size}
            height={650}
            width={1000}
        />
    };
    shouldItemRender = item => {
        return item.get('name').toLowerCase().includes(this.state.search.toLowerCase());
    };

    render() {
        return <div className={'selection-list'}>
            <i className={'fa fa-window-close'} onClick={this.props.onModalClose}/>
            <Autocomplete
                items={this.props.list.toList()}
                renderItem={this.renderItem}
                renderMenu={this.renderMenu}
                shouldItemRender={this.shouldItemRender}
                getItemValue={item => item.get('name')}
                value={this.state.search}
                open={true}
                onChange={(e, value) => this.setState({search: value})}
            >
            </Autocomplete>
        </div>

    }
}