import React, {PureComponent} from 'react';
import {Label, List} from 'semantic-ui-react';

export default class MealMacros extends PureComponent {
    render() {
        const macros = this.props.macros.map((value, name) => {
            return <List.Item key={name}>
                <Label>
                    {name}
                    <Label.Detail>
                        {value}
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