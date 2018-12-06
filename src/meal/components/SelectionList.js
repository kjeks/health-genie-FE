import React, {PureComponent} from 'react';
import {Header, List} from 'semantic-ui-react';
import Modal from 'react-modal';
import ListHOC from "../../common/HOC/ListHOC";
import SelectionModal from "./SelectionModal";

class OfficialMealList extends PureComponent {
    handleSelectItem = (id) => {
        this.props.onItemSelected(id, this.props.type)
    };
    render () {
        const Item = this.props.itemComponentType;

        const items =  this.props.selectedItems.map((item, index) => {
            return item && <Item
                index={index}
                id={item.get('_id')}
                item={item}
                key={index}
                onItemRemove={this.props.onItemRemove}
                onItemChange={this.props.onItemChange}
            />
        });
        return (
            <div>
                <Header as={"h1"} className={"centered"}>{`${this.props.type.toLowerCase()}-list`}</Header>
                <div className={`${this.props.type}-log-container`}>
                    <List>
                        {items.toList()}
                    </List>
                    <Modal
                        isOpen={this.props.itemSelectionOpen !==false}
                    >
                        <SelectionModal
                            list={this.props.itemList}
                            onItemSelected={this.handleSelectItem}
                            selectionItemType={this.props.selectionItemType}
                        />
                    </Modal>
                </div>
            </div>
        )
    }
}

export default ListHOC(OfficialMealList);