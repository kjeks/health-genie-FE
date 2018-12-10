// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, Header, Button, Grid} from 'semantic-ui-react';
import {List} from 'immutable';
import SelectionList from '../../meal/components/SelectionList';
import ListActions from "../../common/list/ListActions";
import Actions from "../Actions";
import Summary from "../../common/components/Summary";
import OfficialFoodItem from "../../meal/components/OfficialFoodItem";
import FoodSelectionItem from "../../meal/components/FoodSelectionItem";

class BuildMealContainer extends Component <{
    addItem: (string) => void,
    createMeal: (List<Number>, string) => void,
    type: string
}, {
    name: string
}> {
    constructor(props) {
        super(props);
        this.state = {name: ""}
    }

    handleAddItem = () => {
        this.props.addItem(this.props.type);
    };
    handleCreateMeal = () => {
        this.props.createMeal(this.props.ingredientIds, this.state.name)
    };
    handleNameChange = (event, data) => {
        this.setState({name: data.value})
    };

    render() {
        return (
            <Grid columns={'two'} celled>
                <Grid.Column >
                    <Header as={"h1"} className={"centered"}>{`meal`}</Header>
                    <Input label={'name'} fluid value={this.state.name} onChange={this.handleNameChange}/>
                    <Header as={"h3"}>{`list of ingredients`}</Header>
                    <SelectionList
                        type={'INGREDIENT'}
                        itemComponentType={OfficialFoodItem}
                        selectionItemType={FoodSelectionItem}
                    />
                    <Button onClick={this.handleAddItem}>add ingredient</Button>
                    <Button onClick={this.handleCreateMeal}>create meal</Button>
                </Grid.Column>
                <Grid.Column>
                    <Summary
                        tableHeaders={['name', 'planned']}
                        type={this.props.type}
                    />
                </Grid.Column>
            </Grid>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ingredientIds: state.getIn([ownProps.type, 'selectedItemIds'])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: (type) => dispatch(ListActions.addItem(type)),
        createMeal: (selectedItemIds, mealName) => dispatch(Actions.createMeal(selectedItemIds, mealName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildMealContainer);