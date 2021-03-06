import React, {PureComponent} from 'react';
import {List, Header} from 'semantic-ui-react';

export default class ActivitySelectionItem extends PureComponent <> {
    onItemSelected = () => {
        this.props.onItemSelected(this.props.listItem.get('_id'))
    };
    render () {
        const listItem = this.props.listItem;
        const kcal = this.props.quantity ? this.props.quantity*listItem.get('kcal'): listItem.get('kcal');
        return (
            <List.Item className={'list-item'} key={listItem.get('name')} onClick={this.props.onItemSelected && this.onItemSelected}>
                <Header>{listItem.get('name')}</Header>
                <List.Content>
                    {this.props.quantity && <div className={'list-item__quantity'}>{`minutes: ${this.props.quantity}`}</div>}
                    {`kcal:${kcal}`}
                    </List.Content>
            </List.Item>
        )
    }
}