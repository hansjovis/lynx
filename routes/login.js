import express from 'express';

const router = express.Router();

// The scripts to load for this route.
const scripts = [];

/* GET login page. */
router.get( '/', function( req, res ) {
  const errors = req.flash( 'error' );
  res.render( 'login', { scripts, errors } );
} );

export default router;
