import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const router = express.Router();

// The scripts to load for this route.
const scripts = [];

/* GET admin pages. */
router.get( '/*', function( req, res ) {
  // The application in JSX.
  const app = (
    <h1>Admin</h1>
  );
  
  // Render the application as a string.
  const content = renderToString( app );

  // Render the HTML-page using the rendered application and the stringified linked data.
  res.render( 'index', { content, scripts } );
} );

export default router;
