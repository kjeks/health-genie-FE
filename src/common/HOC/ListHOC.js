// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Actions from "../list/ListActions";
import {favoriteListSelector, selectedItemSelector} from "../Selectors";

export default function (ListComponent) {
    function mapStateToProps (state, ownProps) {
        return {
            selectedItems: selectedItemSelector(state, ownProps),
            itemList: state.get(ownProps.type).itemList,
            favoriteList: favoriteListSelector(state, ownProps),
            itemSelectionOpen: state.get(ownProps.type).itemSelectionOpen
        }
    }
    function mapDispatchToProps (dispatch) {
        return {
            onItemSelected: (id, type) => dispatch(Actions.onItemSelected(id, type)),
            onItemRemove: (index, listName) => dispatch(Actions.onItemRemove(index, listName)),
            onItemChange: (index, mealId, listName) => dispatch(Actions.onItemChange(index, mealId, listName))
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(PureHOC(ListComponent));
}
export function PureHOC (ListComponent) {
    return class ListHOC extends Component <{
        type: string
    }> {
        onItemRemove = (index) => {
            this.props.onItemRemove(index, this.props.type)
        };
        onItemChange = (index, id) => {
            this.props.onItemChange(index, id, this.props.type)
        };
        render () {
            return (
                <ListComponent {...this.props} onItemRemove={this.onItemRemove} onItemChange={this.onItemChange}/>
            )
        }
    }
}