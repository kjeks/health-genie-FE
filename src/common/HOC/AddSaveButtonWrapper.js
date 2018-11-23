import React, {PureComponent} from 'react';
import {Button} from 'semantic-ui-react';
import Actions from "../list/ListActions";
import {connect} from 'react-redux';
import {idAndQuantitySelector} from "../Selectors";


class ButtonWrapper extends PureComponent {
    handleAddItem = () => {
        this.props.addItem(this.props.type);
    };
    handleListSaved = () => {
        this.props.listSaved(this.props.selectedIdsAndQuantities, this.props.type);
    };
    render () {
        return (
            <div>
                {this.props.children}
                <Button onClick={this.handleAddItem}>add {this.props.type.toLowerCase()}</Button>
                <Button onClick={this.handleListSaved}>save list</Button>
            </div>
        )
    }
}
function mapStateToProps (state, ownProps) {
    return {
        selectedItemIds: state.get(ownProps.type).selectedItemIds,
        selectedIdsAndQuantities: idAndQuantitySelector(state, ownProps)
    }
}
function mapDispatchToProps (dispatch) {
    return {
        addItem: (type)=> dispatch(Actions.addItem(type)),
        listSaved: (selectedItemIds, type) => dispatch(Actions.onListSaved(selectedItemIds, type))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonWrapper);