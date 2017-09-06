import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/CourseActions';
import CourseList from './CourseList';

class CoursesPage extends Component {

    // Initialize states and bind functions
    constructor(props, context) {
        super(props, context);
    }

    courseRow(course, index){
        return <div className="field_title" key={index}>{course.title}</div>;
    }

    render(){
        //debugger;
        const {courses} = this.props;

        return (
          <div>
              <h1>Courses</h1>
              <CourseList courses={courses} />
          </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// DEFINE CONNECT FUNCTIONS
// Return properties from the root reducers
function mapStateToProps(state, ownProps) {
    //debugger;
    return {
        // Root reducer 'courses'
        courses: state.courses
    }
}

// Return the courses wrapped and dispatched for re-use
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
        //createCourse: course => dispatch(courseActions.createCourse(course))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);