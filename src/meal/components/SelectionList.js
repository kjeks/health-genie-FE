import React, {Component} from 'react';
import {Header, List, Menu} from 'semantic-ui-react';
import Modal from 'react-modal';
import ListHOC from "../../common/HOC/ListHOC";
import SelectionModal from "./SelectionModal";

class SelectionList extends Component {
    constructor(props) {
        super(props);
        this.state={selectedList: 'favorites'}
    }
    handleSelectItem = (id) => {
        this.props.onItemSelected(id, this.props.type)
    };
    menuItemSelected = (event, data) => {
        this.setState({selectedList: data.value})
    };

    render() {
        const Item = this.props.itemComponentType;

        const items = this.props.selectedItems.map((item, index) => {
            const isFavorite = this.props.favoriteList.find((favoriteItem)=> {
                return favoriteItem.get('_id') === item.get('_id');
            });
            return item && <Item
                index={index}
                id={item.get('_id')}
                item={item}
                key={index}
                isFavorite={isFavorite}
                onItemRemove={this.props.onItemRemove}
                onItemChange={this.props.onItemChange}
                type={this.props.type}
            />
        });
        let selectionModalList;
        switch(this.state.selectedList) {
            case('favorites'):
                selectionModalList = this.props.favoriteList;
                break;
            case('all'):
                selectionModalList = this.props.itemList;
                break;
            case('user made'):
                selectionModalList = this.props.userMadeList;
                break;
            default:
                selectionModalList = this.props.itemList;
                break;

        }
        return (
            <div>
                <Header as={"h1"} className={"centered"}>{`${this.props.type.toLowerCase()}-list`}</Header>
                <div className={`${this.props.type}-log-container`}>
                    <List>
                        {items.toList()}
                    </List>
                    <Modal
                        isOpen={this.props.itemSelectionOpen !== false}
                    >
                        <Menu tabular>
                            <Menu.Item onClick={this.menuItemSelected} active={this.state.selectedList==='favorites'} value={'favorites'}>
                                favorites
                            </Menu.Item>
                            <Menu.Item onClick={this.menuItemSelected} active={this.state.selectedList==='all'} value={'all'}>
                                all
                            </Menu.Item>
                            <Menu.Item onClick={this.menuItemSelected} active={this.state.selectedList==='user made'} value={'user made'}>
                                self made
                            </Menu.Item>
                        </Menu>
                        <SelectionModal
                            list={selectionModalList}
                            onItemSelected={this.handleSelectItem}
                            selectionItemType={this.props.selectionItemType}
                        />
                    </Modal>
                </div>
            </div>
        )
    }
}

export default ListHOC(SelectionList);