import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
    return (
      <div>
          <table className="table striped">
              <thead>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
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