// @flow

import React, {PureComponent} from 'react';
import ListItem from "./ListItem";

export default class ChangeableListItem extends PureComponent <{
    index: number,
    id: string,
    onItemChange: (number, string) => void,
    onItemRemove: (number) => void,
    item: any
}> {
    onRemove = () => {
        this.props.onItemRemove(this.props.index)
    };
    onItemChange = () => {
        this.props.onItemChange(this.props.index, this.props.id);
    };

    render() {
        return (
            <ListItem
                values={this.props.item}
                key={this.props.index}
            >
                <i className={"fa fa-arrow-right"} onClick={this.onItemChange}/>
                <i className={"fa fa-window-close"} onClick={this.onRemove}/>
            </ListItem>
        )
    }
}