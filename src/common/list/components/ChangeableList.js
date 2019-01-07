// @flow
import React, {PureComponent} from 'react';
import ChangeableListItem from "./ChangeableListItem";
import {List} from 'semantic-ui-react';
import Modal from 'react-modal';
import ListSelection from "./ListSelection";
import ListHOC from "../../HOC/ListHOC";

class ChangeableList extends PureComponent <{
    type: string
}> {
    handleSelectItem = (id) => {
        this.props.onItemSelected(id, this.props.type);
    };
    handleModalClose = () => {
        this.props.onModalClose(this.props.type);
    };
    render () {
        const items =  this.props.selectedItems.map((item, index) => {
            return item && <ChangeableListItem
                index={index}
                id={item.get('_id')}
                item={item}
                key={index}
                onItemRemove={this.props.onItemRemove}
                onItemChange={this.props.onItemChange}
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
                        onModalClose={this.handleModalClose}
                        list={this.props.itemList}
                        onItemSelected={this.handleSelectItem}
                    />
                </Modal>
            </div>
        )
    }

}
export default ListHOC(ChangeableList)
