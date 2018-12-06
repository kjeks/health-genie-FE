import React, {PureComponent} from 'react';
import {Table} from 'semantic-ui-react';
import Nutrient from "./Nutrient";

export default class NutritionList extends PureComponent <{}> {
    render() {
        const nutrients = this.props.nutrients.map(nutrient => {
            const goal = nutrient.name === 'kcal' ? this.props.kcalGoal : nutrient.recommended;

            return <Nutrient
                name={nutrient.name}
                planned={this.props.nutrientsInMeal.get(nutrient.id)}
                recommended={nutrient.recommended}
                goal={goal}
                tableHeaders={this.props.tableHeaders}
                key={nutrient.id}
                difference={this.props.nutrientsInMeal.get(nutrient.id) - goal}
            />
        });
        const tableHeaders = this.props.tableHeaders.map((header) => {
            return <Table.Cell key={header}>
                {header}
            </Table.Cell>
        });
        return (
            <Table className="nutrition-list">
                <Table.Header>
                    <Table.Row>
                        {tableHeaders}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {nutrients.toList()}
                </Table.Body>
            </Table>

        )
    }
}