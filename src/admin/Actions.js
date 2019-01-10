import ActionTypes from "./ActionTypes";
import {makeRequest} from "../common/requestUtil";
import {toastr} from 'react-redux-toastr';

export default {
    onUpdate: function (id, name, type, kcal) {
        return dispatch => {
            dispatch({type: ActionTypes.ADMIN_REQUEST_UPDATE_VALUE});
            makeRequest({url: `admin/${id}`, method: 'POST', body:{name: name, kcal: kcal, type: type}}, ).then(data => {
                dispatch({type: ActionTypes.ADMIN_UPDATE_SUCCESSFUL});
                toastr.success('successfully updated');
            })
        }
    },
    onDelete: function (id, type) {
        return dispatch => {
            dispatch({type: ActionTypes.ADMIN_REQUEST_DELETE});
            makeRequest({url: `admin/${id}/${type}`, method: 'POST'}).then(data => {
                dispatch({type: ActionTypes.ADMIN_DELETE_SUCCESSFUL});
                toastr.success('successfully deleted', "will be removed on reload");

            })
        }
    },
    onRemoveBrokenIngredients: function () {
        return dispatch => {
            dispatch({type: ActionTypes.ADMIN_REQUEST_DEAD_INGREDIENTS});
            makeRequest({url: 'admin/ingredients/clean'})

        }
    },
    onRemoveBrokenMeals: function () {
        return dispatch => {
            dispatch({type: ActionTypes.ADMIN_REQUEST_DEAD_MEALS});
            makeRequest({url: 'admin/meals/clean'})

        }
    }
}