import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Header, Grid, Input} from 'semantic-ui-react';
import MealMacros from "./MealMacros";
import MealMacrosSpesifics from "./MealMacrosSpesifics";
import {MealSelector} from "../Selector";
import Actions from "../Actions";

class OfficialMealItem extends PureComponent {
    handleGramChange = (event, target) => {
        this.props.onGramsChanged(this.props.item.get('_id'), target.value)
    };

    render() {
        const meal = this.props.item;

        return (
            <Grid columns={2} celled>
                <Grid.Row>
                    <Grid.Column width={16} textAlign={'center'}>
                        <Header as={'h3'}>{meal.get('name')}</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Header as={'h4'} textAlign={'center'}>
                            pr 100g
                        </Header>
                        {meal.get('macros') && <MealMacros
                            macros={meal.get('macros')}/>
                        }
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Input label='select grams' type='number' value={this.props.meal && this.props.meal.get('grams')}
                               onChange={this.handleGramChange}/>
                        {this.props.meal && meal.get('macros') && <MealMacrosSpesifics
                            macros={meal.get('macros')}
                            grams={this.props.meal.get('grams')}
                        />
                        }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        meal: MealSelector(state, ownProps)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGramsChanged: (mealId, newValue) => dispatch(Actions.onGramsChanged(mealId, newValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficialMealItem);