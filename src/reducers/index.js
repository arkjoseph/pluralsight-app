import {combineReducers} from 'redux';
import courses from './CourseReducer';

const rootReducer = combineReducers({
   // Shorthand Property Name
   courses
});

export default rootReducer;