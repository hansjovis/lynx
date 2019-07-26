import express from 'express';
import passport from 'passport';

const router = express.Router();

/* POST login */
router.post( '/login', 
  passport.authenticate( 'login' ), 
  ( req, res ) => {
    res.redirect( '/admin' );
  }
);

/* POST signup */
router.post( '/signup', 
  passport.authenticate( 'signup' ), 
  ( req, res ) => {
    res.redirect( '/admin' );
  }
);

export default router;