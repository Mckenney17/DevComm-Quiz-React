import React from 'react';
import ReactDOM from 'react-dom';
import DesktopAppVersion from './components/DesktopAppVersion';
import MobileAppVersion from './components/MobileAppVersion';

import './index.scss';
import './styles/devicon.min.css'

// DesktopAppVersion // MobileAppVersion
const deviceIsMobile = () => navigator.appVersion.includes('Mobile' || 'mobile') 

ReactDOM.render(
  deviceIsMobile() ? <MobileAppVersion /> : <DesktopAppVersion /> ,
  document.getElementById('root')
)
