// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Card, Input, Button} from 'semantic-ui-react';
import Actions from "../../create_meal/Actions";

class CreateItemContainer extends Component <{}> {
    constructor(props) {
        super(props);
        this.state = {kcal: 500, name: ""}
    }

    changeKcal = (event) => {
        this.setState({kcal: event.target.value})
    };
    changeName = event => {
        this.setState({name: event.target.value})
    };
    saveItem = () => {
        this.props.saveItem(this.state.name, this.state.kcal, this.props.type);
    };
    render () {
        return (
            <Card>
                <Header as={'h1'} className={'centered'}>{this.props.title}</Header>
                <Card className='create-meal-container__content centered'>
                    <Input label={"meal name"} value={this.state.name} onChange={this.changeName}/>
                    <Input label={"kcal"} type={'number'} value={this.state.kcal} onChange={this.changeKcal}/>
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
        saveItem: (name, kcal, type) => {dispatch(Actions.createItem(name, kcal, type))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItemContainer);