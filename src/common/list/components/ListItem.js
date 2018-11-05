// @flow
import React, {PureComponent} from 'react';
import {List} from 'semantic-ui-react';

export default class ListItem extends PureComponent <{
    values: [Object],
    children: React.Component
}> {
    addSpaceBetweenWords = (key) => {
        return key.replace(/([A-Z])/g, ' $1').trim();
    };
    displayValue = (value) => {
        if(typeof value === 'number') {
            return value.toFixed(2);
        }
        return value;
    };

    render () {
        const values = this.props.values.toJS();
        const items = Object.keys(values).map(key => {
            if(key === '_id' || Array.isArray(values[key])) {
                return null;
            }

            return <div className='list-item__name' key={key}>
                {`${this.addSpaceBetweenWords(key)}: ${this.displayValue(values[key])}`}
            </div>
        });

        return (
            <List.Item className={'list-item'}>
                <List.Content>
                    {items}
                </List.Content>
                {this.props.children}
            </List.Item>
        )
    }
}
