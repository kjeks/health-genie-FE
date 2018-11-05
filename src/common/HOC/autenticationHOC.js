import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Actions from "../../login/Actions";

export default function (AuthComponent) {
    function mapStateToProps (state) {
        return {
            isAuthenticated: state.getIn(['AuthenticationReducer', 'isAuthenticated'])
        };
    }
    function mapDispatchToProps (dispatch) {
        return {
            whoAmI: () => dispatch(Actions.whoAmI())
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(pureHOC(AuthComponent))
}
export function pureHOC (AuthComponent) {
    return class AutenticationHOC extends Component {
        constructor (props) {
            super(props);
            this.props.whoAmI();
        }
        render() {
            if(this.props.isAuthenticated === 0) {
                return null;
            }
            else if(this.props.isAuthenticated === 1) {
                return <AuthComponent/>
            }
            else if(this.props.isAuthenticated === 2) {
                return <Redirect to='/login'/>
            }
        }
    }
}