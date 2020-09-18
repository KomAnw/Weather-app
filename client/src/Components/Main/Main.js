import React from 'react';

import './Main.css'

export default function Main() {
  
  return (
    <div className="main">
        <img className="cloud" src={require('../../images/cloud.svg')} alt="Weathe icon" />
        <h1 className="main__title">Weather application</h1>
      </div>
  );
}