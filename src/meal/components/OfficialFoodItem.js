import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Header, Grid, Input} from 'semantic-ui-react';
import MealMacros from "./MealMacros";
import MealMacrosSpecifics from "./MealMacrosSpecifics";
import {FoodSelector} from "../Selector";
import Actions from "../Actions";
import cx from 'classnames';

class OfficialFoodItem extends PureComponent {
    handleGramChange = (event, target) => {
        this.props.onGramsChange(this.props.item.get('_id'), target.value)
    };
    handleFavoriteClick = () => {
        this.props.onMealFavoriteToggle(this.props.item.get('_id'));
    };
    render() {
        const food = this.props.item;

        return (
            <Grid columns={2} celled>
                <Grid.Row>
                    <Grid.Column width={16} textAlign={'center'}>
                        <Header as={'h3'}>
                            {food.get('name')}
                            <i className={cx('fas fa-star', {selected: this.props.isFavorite})} onClick={this.handleFavoriteClick}/>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Header as={'h4'} textAlign={'center'}>
                            pr 100g
                        </Header>
                        {food.get('macros') && <MealMacros
                            macros={food.get('macros')}/>
                        }
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Input label='select grams' type='number'
                               value={this.props.food && this.props.food.get('quantity')}
                               onChange={this.handleGramChange}/>
                        {this.props.food && food.get('macros') && <MealMacrosSpecifics
                            macros={food.get('macros')}
                            grams={this.props.food.get('quantity')}
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
        food: FoodSelector(state, ownProps)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGramsChange: (mealId, newValue) => dispatch(Actions.onGramsChange(mealId, newValue)),
        onMealFavoriteToggle: (mealId) => dispatch(Actions.onMealFavoriteToggle(mealId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficialFoodItem);