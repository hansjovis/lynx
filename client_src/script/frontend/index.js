
// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';

// React Router
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '../../../routes/frontend/client-routes';

import createReduxStore from './createReduxStore';

/*
 * Retrieve the data from the head when the page has been loaded.
 */
window.addEventListener( 'load', () => {
  // Retrieve the data from the script element in the head.
  const dataElement = document.getElementById( 'data' );
  const data = JSON.parse( dataElement.innerText );

  const store = createReduxStore( data );

  // Inject the data into the page.
  const app = (
    <Provider store={ store }>
      <Router>
        {renderRoutes( routes )}
      </Router>
    </Provider>
  );
    
  
  // Bring some life into the page using React.
  ReactDOM.hydrate( app, document.getElementById( 'app' ) );
} );

