import express from 'express';

const router = express.Router();

// The scripts and styles to load for this route.
const scripts = [];
const styles = [ 'css/login/main.css' ];

/* GET login page. */
router.get( '/', function( req, res ) {
  const errors = req.flash( 'error' );
  res.render( 'login', { scripts, styles, errors } );
} );

export default router;
