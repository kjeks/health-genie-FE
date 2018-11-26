// @flow
import React, {PureComponent} from 'react';
import ListFetchHoC from "../../common/HOC/ListFetchHoC";
import Summary from "../../common/components/Summary";
import OfficialMealList from "./OfficialMealList";
import AddSaveButtonWrapper from '../../common/HOC/AddSaveButtonWrapper';

class MealContainer extends PureComponent<{}> {
    render() {
        const ButtonWrapper = ListFetchHoC(AddSaveButtonWrapper);
        return (
            <div className={'meal-container'}>
                <ButtonWrapper type={'ACTIVITY'}>
                    <OfficialMealList type={'ACTIVITY'}/>
                </ButtonWrapper>
                <ButtonWrapper type={'MEAL'}>
                    <OfficialMealList type={'MEAL'}/>
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
