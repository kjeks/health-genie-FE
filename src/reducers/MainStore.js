import {combineReducers} from 'redux-immutable';
import ListReducer from '../common/list/reducer/ListReducer';
import SummaryReducer from "../Summary/Reducer";
import UserReducer from '../user/Reducer';
import AuthenticationReducer from '../common/AutenticationReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';
import ChangeRemoveHoR from "../common/list/reducer/ChangeRemoveHoR";
import FinalHoR from "../common/list/reducer/FinalHoR";
import SelectItemHoR from '../common/list/reducer/SelectItemHoR';
import WeekReducer from '../week_schedule/Reducer'
import SummaryDayReducer from '../week_schedule/SummaryReducer';

export default combineReducers({
    MEAL: (ListReducer)('MEAL')([ChangeRemoveHoR, SelectItemHoR, FinalHoR]),
    ACTIVITY: (ListReducer)('ACTIVITY')([ChangeRemoveHoR, SelectItemHoR, FinalHoR]),
    INGREDIENT: ListReducer('INGREDIENT')([ChangeRemoveHoR, SelectItemHoR, FinalHoR]),
    WEEK: (ListReducer)('WEEK')([SelectItemHoR, FinalHoR]),
    DAYS: WeekReducer,
    SummaryDayReducer: SummaryDayReducer,
    SummaryReducer: SummaryReducer,
    UserReducer: UserReducer,
    AuthenticationReducer: AuthenticationReducer,
    toastr: toastrReducer
})