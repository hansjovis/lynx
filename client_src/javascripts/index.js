
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './components/App';

import createReduxStore from './createReduxStore';

/*
 * Retrieve the data from the head when the page has been loaded.
 */
window.addEventListener( 'load', event => {
  // Retrieve the data from the script element in the head.
  const dataElement = document.getElementById('data');
  const data = JSON.parse( dataElement.innerText );

  const store = createReduxStore( data );

  // Inject the data into the page.
  const app = (
    <Provider store={ store }>
      <App/>
    </Provider>
  );
    
  
  // Bring some life into the page using React.
  ReactDOM.hydrate(app, document.getElementById('app'));
} );

