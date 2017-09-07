import * as types from '../actions/actionTypes';
import initialState from './InitialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    debugger;
    if (action.type == types.BEGIN_AJAX_CALL) {
        // increment state by 1
        return state + 1;
    } else if (actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }
    return state;
}

