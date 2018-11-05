import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import 'react-datepicker/dist/react-datepicker.css';
import './Main.scss';
import {Map} from 'immutable';
import Menu from './menu/Container';
import {Provider} from 'react-redux'
import MainStore from './reducers/MainStore';
import MainRouter from './MainRouter';
import ActionLogger from "./middleware/ActionLogger";
import ReduxToastr from 'react-redux-toastr';


class App extends Component {
    render() {
        const initialState = Map();
        const store = createStore((MainStore), initialState, applyMiddleware(thunk, ActionLogger));

        return (
            <Provider store={store}>
                <div className="App">
                    <Menu/>
                    <ReduxToastr/>
                    <div className={"content"}>
                        <MainRouter/>
                    </div>
                </div>
            </Provider>
        );
    }
}
export default App;
