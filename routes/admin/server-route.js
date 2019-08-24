import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const router = express.Router();

const data = {
  name: 'hansjovis'
};

import createReduxStore from '../../client_src/script/admin/redux/createReduxStore';

import routes from './client-routes';

// The scripts to load for this route.
const scripts = [ "js/admin-bundle.js" ];

/* GET admin pages. */
router.get( '/*', function( req, res ) {
  // Create the redux store, which houses the application state.
  const store = createReduxStore( data );

  const context = {};

  // The application in JSX.
  const app = (
    <Router context={context} location={req.path} query={req.query}>
      {renderRoutes( routes, { store } )}
    </Router>
  );
  
  // Render the application as a string.
  const content = renderToString( app );
  
  // Transform the linked data into a string as well.
  const dataString = JSON.stringify( data, null, 2 );

  console.log( "content: ", content );

  // Render the HTML-page using the rendered application and the stringified linked data.
  res.render( 'index', { content, scripts, data: dataString } );
} );

export default router;
