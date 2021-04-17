import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import './utils/css-deps/all.min.css'
import Home from './views/home';
import homeData from './models/home'
import Music from './views/components/Music'

const barebone = (
  <div id='container'>
    <Music />
    <div id='main-pane'></div>
  </div>
)

const initApp = () => {
  ReactDOM.render(
    barebone,
    document.getElementById('root')
  )

  const props = homeData;
  ReactDOM.render(
    <Home {...props} />,
    document.getElementById('main-pane')
  )
}

window.addEventListener('load', initApp)
