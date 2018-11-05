// @flow
import React, {PureComponent} from 'react';
import CreateItemContainer from '../../common/create_item/Container';

class CreateIngredientContainer extends PureComponent <{}> {
    render() {
        return (
            <CreateItemContainer
                title={"create ingredient"}
                type={'INGREDIENT'}
            />
        )
    }
}

export default (CreateIngredientContainer);