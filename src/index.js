import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/ConfigureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
// API Actions Import
import {loadCourses} from './actions/CourseActions';
import {loadAuthors} from './actions/AuthorActions';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <Router
            history={browserHistory}
            routes={routes}
        />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
