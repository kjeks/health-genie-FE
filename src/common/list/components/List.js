// @flow
import React, {PureComponent} from 'react';
import ListItem from "./ListItem";
import {Modal, List} from 'semantic-ui-react';
import ListSelection from './ListSelection';
import ListHOC from "../../HOC/ListHOC";

class ListComponent extends PureComponent <{
    index: number,
    id: string,
    item: any
}> {
    handleSelectItem = (id) => {
        this.props.onItemSelected(id, this.props.type);
    };
    render () {
        const items =  this.props.selectedItems.map((item, index) => {
            return item && <ListItem
                index={index}
                id={item._id}
                item={item}
                key={item._id}
            />
        });
        return (
            <div className={`${this.props.type}-log-container`}>
                <List>
                    {items.toList()}
                </List>
                <Modal
                    isOpen={this.props.itemSelectionOpen !==false}
                >
                    <ListSelection
                        list={this.props.itemList}
                        onItemSelected={this.handleSelectItem}
                    />
                </Modal>
            </div>
        )
    }
}

export default ListHOC(ListComponent);