import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/CourseActions';


class CoursesPage extends Component {

    // Initialize states and bind methods
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {title: ""}
        };

        // Bind field functions to CoursesPage component
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    // Get value and setState when input field changes
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    // OnClick save
    onClickSave() {
        //alert(`saving ${this.state.course.title}`);
        // Allow 'connect' to inject a dispatch prop for redux
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index){
        return <div className="field_title" key={index}>{course.title}</div>;
    }
    render(){
        //debugger;
        return (
          <div>
              <h1>Courses</h1>
              {this.props.courses.map(this.courseRow)}
              <h2>Add Course</h2>
              <input
                type="text"
                onChange={this.onTitleChange}
                value={this.state.course.title}
              />
              <input
                type="submit"
                onClick={this.onClickSave}
                value="Save"
              />
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


export default connect(mapStateToProps, mapDispatchToProps())(CoursesPage);