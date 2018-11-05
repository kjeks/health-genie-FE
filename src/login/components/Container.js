// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Actions from "../Actions";
import {Header, Input, Button, Card} from 'semantic-ui-react';

class LoginContainer extends Component <{
    login: (string, string) => void,
},{
    email: string,
    password: string
}> {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""}
    }

    onPasswordChanged = (event) => {
        this.setState({password: event.target.value});
    };
    onEmailChanged = (event) => {
        this.setState({email: event.target.value});
    };
    onLogin = () => {
        this.props.login(this.state.email, this.state.password);
    };

    render() {
        return (
            <div className="login-container">
                <Header as="h1">Login </Header>
                <Card>
                    <Input label='email' onChange={this.onEmailChanged}/>
                    <Input label='password' type="password" onChange={this.onPasswordChanged}/>
                    <Button onClick={this.onLogin}>login</Button>
                </Card>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        login: (email, password) => dispatch(Actions.login(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);