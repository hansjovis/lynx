import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Provider from 'react-redux';

import { StaticRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

/*
 * (Mock) data
 */
import data from "../data/jane_doe.json";
import createReduxStore from '../client_src/javascripts/createReduxStore';

import routes from './routes';

const router = express.Router();

/* GET home page. */
router.get( '/', function( req, res, next ) {
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
  res.render( 'index', { content, data: dataString } );
});

export default router;
