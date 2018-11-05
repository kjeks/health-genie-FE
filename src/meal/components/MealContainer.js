// @flow
import React, {PureComponent} from 'react';
import ButtonedList from '../../common/ButtonedList';
import ListFetchHoC from "../../common/HOC/ListFetchHoC";
import Summary from "../../common/components/Summary";

class MealContainer extends PureComponent<{}> {
    render() {
        const FetchingButtonedList = ListFetchHoC(ButtonedList);
        return (
            <div className={'meal-container'}>
                <FetchingButtonedList
                    type={'ACTIVITY'}
                />
                <FetchingButtonedList
                    type={'MEAL'}
                />
                <Summary
                    type={'MEAL'}
                    tableHeaders={['name', 'planned', 'goal', 'difference', 'recommended']}
                />
            </div>
        )
    }
}

export default MealContainer;
