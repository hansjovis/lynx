import express from 'express';

const router = express.Router();

// The scripts to load for this route.
const scripts = [];

/* GET login page. */
router.get( '/', function( req, res ) {
  // Render the HTML-page using the rendered application and the stringified linked data.
  res.render( 'login', { scripts } );
} );

export default router;
