import * as types from '../actions/actionTypes';

// Reducer - Take the current state and action and return a new state.
// 'state' is immutable. Not able to modify original state.
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:

            // Return a brand new state array and honer immutable state with spread operator ...state
            //debugger;
            return [...state,
                // Create a deep copy of passed in courses
                Object.assign({}, action.course)
            ];

        //state.push(action.course);
        //return state;

        default:
            return state;
    }
}