import React, {PureComponent} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import MealContainer from './meal/components/MealContainer';
import CreateMealContainer from './create_meal/components/Container';
import UserContainer from './user/components/Container';
import LoginContainer from './login/components/Container';
import RegisterContainer from './register/component/Container';
import AdminContainer from './admin/components/Container';
import IngedientContainer from './ingredient/components/Container';
import {createBrowserHistory} from "history";
import AuthenticationHOC from './common/HOC/autenticationHOC';
import BuildMealContainer from "./create_meal/components/BuildMealContainer";
import TypeHoC from "./common/HOC/TypeHoC";
import ListFetchHoC from "./common/HOC/ListFetchHoC";
import WeekContainer from './week_schedule/components/Container';

export const history = createBrowserHistory();

export default class MainRouter extends PureComponent {
    render () {
        const CreateMeal = AuthenticationHOC(CreateMealContainer);
        const Meal = AuthenticationHOC(MealContainer);
        const Login =  LoginContainer;
        const Register = RegisterContainer;
        const Admin = AuthenticationHOC(AdminContainer);
        const User = AuthenticationHOC(UserContainer);
        const Ingredient = AuthenticationHOC(IngedientContainer);
        const BuildMeal = AuthenticationHOC(TypeHoC(ListFetchHoC(BuildMealContainer), 'INGREDIENT'));
        const Week = AuthenticationHOC(WeekContainer);

        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/create" component={CreateMeal}/>
                    <Route exact path='/user' component={User}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/admin' component={Admin}/>
                    <Route exact path='/Ingredient' component={Ingredient}/>
                    <Route exact path='/build' component={BuildMeal}/>
                    <Route exact path='/week' component={Week}/>
                    <Route path="/" component={Meal}/>
                </Switch>
            </Router>
        )
    }
}