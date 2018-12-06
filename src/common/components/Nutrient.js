// @flow
import React, {PureComponent} from 'react';
import {Table} from 'semantic-ui-react';

export default class Nutrient extends PureComponent<{
    name: string,
    recommended?: number,
    planned: number,
    goal?: number,
    difference: number,
    tableHeaders: [string]
}> {
    render() {
        const cells = this.props.tableHeaders.map(header=> {
            return <Table.Cell key={header}>
                {typeof this.props[header] === "number" ? this.props[header].toFixed(2) : this.props[header]}
            </Table.Cell>
        });
        return (
            <Table.Row className="nutrition">
                {cells}
            </Table.Row>
        )
    }
}