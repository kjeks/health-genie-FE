import React, {PureComponent} from 'react';
import {List, Label} from 'semantic-ui-react';

export default class ActivitySpecifics extends PureComponent {
    render() {
        return (
            <List>
                <List.Item>
                    <Label>
                        <Label.Detail>
                            {`kcal burned: ${this.props.kcalBurned}`}
                        </Label.Detail>
                    </Label>
                </List.Item>
            </List>
        )
    }
}