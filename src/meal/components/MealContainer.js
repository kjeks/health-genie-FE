// @flow
import React, {PureComponent} from 'react';
import ListFetchHoC from "../../common/HOC/ListFetchHoC";
import Summary from "../../common/components/Summary";
import SelectionList from "./SelectionList";
import OfficialMealItem from './OfficialMealItem';
import ActivityItem from './ActivityItem';
import MealSelectionItem from './MealSelectionItem';
import ActivitySelectionItem from './ActivitySelectionItem';
import AddSaveButtonWrapper from '../../common/HOC/AddSaveButtonWrapper';

class MealContainer extends PureComponent<{}> {
    render() {
        const ButtonWrapper = ListFetchHoC(AddSaveButtonWrapper);
        return (
            <div className={'meal-container'}>
                <ButtonWrapper type={'ACTIVITY'}>
                    <SelectionList type={'ACTIVITY'}
                                   itemComponentType={ActivityItem}
                                   selectionItemType={ActivitySelectionItem}
                    />
                </ButtonWrapper>
                <ButtonWrapper type={'MEAL'}>
                    <SelectionList type={'MEAL'}
                                   itemComponentType={OfficialMealItem}
                                   selectionItemType={MealSelectionItem}
                    />
                </ButtonWrapper>
                <Summary
                    type={'MEAL'}
                    tableHeaders={['name', 'planned', 'goal', 'difference', 'recommended']}
                />
            </div>
        )
    }
}

export default MealContainer;
