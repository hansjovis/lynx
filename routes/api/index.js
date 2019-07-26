import express from 'express';
import passport from 'passport';

const router = express.Router();

const loginOptions = {
  successRedirect: '/admin',
  failureRedirect: '/login',
  failureFlash: true,
}

/* POST login */
router.post( '/login', 
  passport.authenticate( 'login', loginOptions )
);

/* POST signup */
router.post( '/signup', 
  passport.authenticate( 'signup' ), 
  ( req, res ) => {
    res.redirect( '/admin' );
  }
);

export default router;