// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListActions from "../../common/list/ListActions";
import Actions from "../Actions";
import {Button} from 'semantic-ui-react';

class AdminContainer extends Component <{}> {
    constructor(props) {
        super(props);
        this.props.fetchList('MEAL');
        this.props.fetchList('ACTIVITY');
    }


    render() {
        // const activities = this.props.activities.map((activity) => {
        //     return <AdminListItem
        //         name={activity.name}
        //         kcal={activity.kcal}
        //         id={activity._id}
        //         key={activity._id}
        //         onUpdate={this.props.onUpdate}
        //         onDelete={this.props.onDelete}
        //         type={"activity"}
        //     />
        // });
        // const meals = this.props.meals.map((meal) => {
        //     return <AdminListItem
        //         name={meal.name}
        //         kcal={meal.kcal}
        //         id={meal._id}
        //         key={meal._id}
        //         onUpdate={this.props.onUpdate}
        //         onDelete={this.props.onDelete}
        //         type={"meal"}
        //     />
        // });

        return (
            <div className='admin-container'>
                <Button onClick={this.props.onRemoveBrokenIngredients}>
                    Remove dead ingredients
                </Button>
                <Button onClick={this.props.onRemoveBrokenMeals}>
                    Remove dead meals
                </Button>
                {/*<div>*/}
                    {/*<Header as='h1' className={"centered"}>Activities</Header>*/}
                    {/*{activities.toList()}*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<Header as='h1' className={"centered"}>Meals</Header>*/}
                    {/*<AdminList*/}
                        {/*list={this.props.userMadeMeals}*/}

                    {/*/>*/}
                    {/*{meals.toList()}*/}
                    {/*/!*{selfMadeMeals.toList()}*!/*/}
                    {/*/!*{favoriteMeals.toList()}*!/*/}

                {/*</div>*/}

            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        activities: state.get('ACTIVITY').itemList,
        meals: state.get('MEAL').itemList,
        // favoriteList: favoriteListSelector(state, ownProps),
        // userMadeList: userMadeListSelector(state, ownProps),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchList: (listName) => dispatch(ListActions.fetchList(listName)),
        onUpdate: (id, name, type, kcal) => dispatch(Actions.onUpdate(id, name, type, kcal)),
        onDelete: (id, type) => dispatch(Actions.onDelete(id, type)),
        onRemoveBrokenIngredients: () => dispatch(Actions.onRemoveBrokenIngredients()),
        onRemoveBrokenMeals: ()=> dispatch(Actions.onRemoveBrokenMeals())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);