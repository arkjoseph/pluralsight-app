import * as types from '../actions/actionTypes';
import initialState from './InitialState';

// Reducer - Take the current state and action and return a new state.
// 'state' is immutable. Not able to modify original state.
export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            // Return a brand new state array and honer immutable state with spread operator ...state
            return action.courses;

        // Create Course
        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({},action.course)
            ];

        // Update Course
        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({},action.course)
            ];
        //state.push(action.course);
        //return state;
        default:
            return state;
    }
}