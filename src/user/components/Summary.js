// @flow
import React, {PureComponent} from 'react';
import {Header, Table} from 'semantic-ui-react';

export default class Summary extends PureComponent <{
    bmi: number,
    dailyCal: number
}>{
    render () {
        return (
            <div className={'user-summary'}>
                <Header as={"h1"} className={"centered"}>Summary</Header>
                <Table>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                BMI:
                            </Table.Cell>
                            <Table.Cell>
                                {this.props.bmi.toFixed(2)}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Daily calories for goal:
                            </Table.Cell>
                            <Table.Cell>
                                {this.props.dailyCal.toFixed(0)}
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}