// @flow
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import ChangeableList from "./list/components/ChangeableList";
import {Header, Button} from 'semantic-ui-react';
import Actions from "./list/ListActions";

class ButtonedList extends PureComponent <{}> {
    handleAddItem = () => {
        this.props.addItem(this.props.type);
    };
    handleListSaved = () => {
        this.props.listSaved(this.props.selectedItemIds, this.props.type);
    };

    render () {
        return (
            <div>
                <Header as={"h1"} className={"centered"}>{`${this.props.type.toLowerCase()}-list`}</Header>
                <ChangeableList
                    type={this.props.type}
                />
                <Button onClick={this.handleAddItem}>add {this.props.type.toLowerCase()}</Button>
                <Button onClick={this.handleListSaved}>save list</Button>
            </div>
        )
    }
}
function mapStateToProps (state, ownProps) {
    return {
        selectedItemIds: state.get(ownProps.type).selectedItemIds,
    }
}
function mapDispatchToProps (dispatch) {
    return {
        addItem: (type)=> dispatch(Actions.addItem(type)),
        listSaved: (selectedItemIds, type) => dispatch(Actions.onListSaved(selectedItemIds, type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonedList);