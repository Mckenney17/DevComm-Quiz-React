import React from 'react';
import ReactDOM from 'react-dom';

import './utils/css-deps/all.min.css'
import './utils/css-deps/devicon.min.css'

import './index.scss';

import App from './views/components/App';

const initApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

window.addEventListener('load', initApp)
