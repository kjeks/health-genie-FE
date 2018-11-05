// @flow
import React, {PureComponent} from 'react';
import {List} from 'immutable';

import ListSimpleItem from "./ListSimpleItem";

export default class ListSelection extends PureComponent<{
    list: List<any>,
    onItemSelected: (string) => void
}> {
    render() {
        const list = this.props.list.map(item => {
            return <ListSimpleItem
                item={item}
                onClick={this.props.onItemSelected}
                key={item.get('_id')}
            />
        });
        return (
            <div className={'selection-list'}>
                {list.toList()}
            </div>
        )
    }
}