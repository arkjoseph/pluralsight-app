import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
    return (
      <div>
          <table className="table striped">
              <thead>
                <td>&nbsp;</td>
                <td>Title</td>
                <td>Author</td>
                <td>Category</td>
                <td>Length</td>
              </thead>
              <tbody>
              {courses.map(course =>
                  <CourseListRow key={course.id} course={course} />
              )}
              </tbody>
          </table>
      </div>
    );
}

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;