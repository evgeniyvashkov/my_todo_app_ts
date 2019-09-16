import React from 'react';
import ReactDOM from 'react-dom';

import Posts from './ReduxTutuorial/components/Posts';
import PostForm from './ReduxTutuorial/components/PostForm';
// import { App } from './components/App';

import 'normalize.css';
import './style.scss';

// ReactDOM.render(<App />, document.getElementById('root'));
const App = () => (
    <>
        <PostForm />
        <Posts />
    </>
)


ReactDOM.render(<App />, document.getElementById('root'));