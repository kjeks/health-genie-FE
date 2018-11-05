// @flow
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Actions from "../Actions";
import {Button, Input, Header, Card} from 'semantic-ui-react';

class RegisterContainer extends Component <{
    register: (string, string)=> void
},{
    email: string,
    password: string,
    repeatPassword: string
}> {
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", repeatPassword: ""}
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    };
    handleRepeatPasswordChange = (event) => {
        this.setState({repeatPassword: event.target.value});
    };
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    };
    handleRegister = () => {
        if (this.state.password === this.state.repeatPassword) {
            this.props.register(this.state.email, this.state.password);
        }
        else {
            console.log("passwords don't match");
        }

    };

    render() {
        return (
            <div className="login-container ">
                <Header as={'h1'}>Register</Header>
                <Card raised>
                    <Input label={"email"} type={'email'} onChange={this.handleEmailChange}/>
                    <Input label={"password"} type={'password'} onChange={this.handlePasswordChange}/>
                    <Input label={"repeat password"} type={'password'} onChange={this.handleRepeatPasswordChange}/>
                    <Button onClick={this.handleRegister}>Register</Button>
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
        register: (email, password) => dispatch(Actions.registerUser(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);