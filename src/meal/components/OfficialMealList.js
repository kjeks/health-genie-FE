import React, {PureComponent} from 'react';
import {Header, List} from 'semantic-ui-react';
import Modal from 'react-modal';
import OfficialMealItem from "./OfficialMealItem";
import ListHOC from "../../common/HOC/ListHOC";
import MealSelectionModal from "./MealSelectionModal";

class OfficialMealList extends PureComponent {
    handleSelectItem = (id) => {
        this.props.onItemSelected(id, this.props.type)
    };
    render () {
        const items =  this.props.selectedItems.map((item, index) => {
            return item && <OfficialMealItem
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
                        <MealSelectionModal
                            list={this.props.itemList}
                            onItemSelected={this.handleSelectItem}
                        />
                    </Modal>
                </div>
            </div>
        )
    }
}

export default ListHOC(OfficialMealList);