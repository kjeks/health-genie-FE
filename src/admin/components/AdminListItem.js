// @flow
import React, {Component} from 'react';
import {List, Button, Input} from 'semantic-ui-react';

export default class AdminListItem extends Component<{
    kcal: number,
    name: string,
    id: string,
    type: string
}> {

    constructor(props) {
        super(props);
        this.state=({name: this.props.name, kcal: this.props.kcal});
    }
    onKcalChange = (data) => {
        this.setState({kcal: data.target.value});
    };
    onNameChange = (data) => {
        this.setState({name: data.name});
    };
    onUpdate = () => {
        this.props.onUpdate(this.props.id, this.state.name, this.props.type, this.state.kcal);
    };
    onDelete =() => {
        this.props.onDelete(this.props.id, this.props.type);
    };
    render () {
        return (
            <List.Item className={'list-item'}>
                <List.Content>
                    <Input className='list-item__name' label={"name"} value={this.state.name} onChange={this.onNameChange}/>
                    <Input className='list-item-kcal' label={"kcal"} type={'number'} defaultValue={this.state.kcal} onChange={this.onKcalChange}/>
                </List.Content>
                <Button.Group className={'list-item__buttons'}>
                    <Button className={'list-item__button'} onClick={this.onUpdate}>update</Button>
                    <Button className={'list-item__button'} onClick={this.onDelete}>delete</Button>
                </Button.Group>
            </List.Item>
        )
    }
}