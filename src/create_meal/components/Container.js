// @flow
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import CreateItemContainer from '../../common/create_item/Container';
import {Card} from 'semantic-ui-react';

class CreateMealContainer extends PureComponent <{}> {
    render() {
        return (
            <Card centered className={'create-meal-container'}>
                <CreateItemContainer
                    title={"create meal"}
                    type={'MEAL'}
                />
                <Link to={"/build"}>create advanced meal</Link>
            </Card>
        )
    }
}

export default (CreateMealContainer);