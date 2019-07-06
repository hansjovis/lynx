
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

/*
 * Retrieve the data from the head when the page has been loaded.
 */
window.addEventListener( 'load', event => {
  // Retrieve the data from the script element in the head.
  const dataElement = document.getElementById('data');
  const data = JSON.parse( dataElement.innerText );

  // Inject the data into the page.
  const app = <App {...data} />
  
  // Bring some life into the page using React.
  ReactDOM.hydrate(app, document.getElementById('app'));
} );

