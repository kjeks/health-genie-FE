import React, {PureComponent} from 'react';
import {List, Label} from 'semantic-ui-react';

export default class MealMacrosSpesifics extends PureComponent {
    render() {
        console.log(this.props);
        const macros = this.props.macros.map((value, name) => {
            const calculatedValue = (value* this.props.grams/100).toFixed(2);

            return <List.Item key={name}>
                <Label>
                    {name}
                    <Label.Detail>
                        {calculatedValue}
                    </Label.Detail>
                </Label>
            </List.Item>

        });

        return (
            <List>
                {macros.toList()}
            </List>
        )
    }
}