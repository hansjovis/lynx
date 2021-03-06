import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

/*
 * (Mock) data
 */
import data from "../../data/jane_doe.json";
import createReduxStore from '../../client_src/script/frontend/createReduxStore';

import routes from './client-routes';

const router = express.Router();

// The scripts to load for this route.
const scripts = [ "js/frontend-bundle.js" ];

// Stylesheets to load.
const styles = [ ];

/* GET home page. */
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

  // Render the HTML-page using the rendered application and the stringified linked data.
  res.render( 'index', { content, data: dataString, scripts, styles } );
} );

export default router;
