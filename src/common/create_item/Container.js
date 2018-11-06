// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Card, Input, Button} from 'semantic-ui-react';
import Actions from "../../create_meal/Actions";

class CreateItemContainer extends Component <{}> {
    constructor(props) {
        super(props);
        this.state = {kcal: 500, fat: 0, carbs: 0, fiber: 0, protein: 0, name: ""}
    }

    changeValue = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    saveItem = () => {
        const nutrients = Object.assign({}, this.state);
        delete nutrients['name'];

        this.props.saveItem(this.state.name, nutrients, this.props.type);
    };
    render () {
        return (
            <Card>
                <Header as={'h1'} className={'centered'}>{this.props.title}</Header>
                <Card className='create-meal-container__content centered'>
                    <Input label={"meal name"} value={this.state.name} name={'name'} onChange={this.changeValue}/>
                    <Input label={"kcal"} type={'number'} value={this.state.kcal} name={'kcal'} onChange={this.changeValue}/>
                    <Input label={"fat"} type={'number'} value={this.state.fat} name={'fat'} onChange={this.changeValue}/>
                    <Input label={"carbs"} type={'number'} value={this.state.carbs} name={'carbs'} onChange={this.changeValue}/>
                    <Input label={"fiber"} type={'number'} value={this.state.fiber} name={'fiber'} onChange={this.changeValue}/>
                    <Input label={"protein"} type={'number'} value={this.state.protein} name={'protein'} onChange={this.changeValue}/>

                    <Button onClick={this.saveItem}>create</Button>
                </Card>
            </Card>
        )
    }
}

function mapStateToProps (state) {
    return {}
}
function mapDispatchToProps (dispatch) {
    return {
        saveItem: (name, nutrients, type) => {dispatch(Actions.createItem(name, nutrients, type))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItemContainer);