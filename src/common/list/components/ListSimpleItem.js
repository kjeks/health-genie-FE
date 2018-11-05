// @flow
import React, {PureComponent} from 'react';
import {List} from 'semantic-ui-react';

export default class ListSimpleItem extends PureComponent<{
    item: any,
    onClick: (string)=> void
}> {
    onClick = () => {
        this.props.onClick(this.props.item.get('_id'));
    };
    render () {
        const values = this.props.item.toJS();
        const items = Object.keys(values).map(key => {
            if(key === '_id' || Array.isArray(values[key])) {
                return null;
            }
            return <div className='list-item__name' key={key} onClick={this.onClick}>
                {`${key}: ${values[key]}`}
            </div>
        });
        return (
            <List.Item className={'list-item selection-list__item'}>
                <List.Content>
                    {items}
                </List.Content>
            </List.Item>
        )
    }
}