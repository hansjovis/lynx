import passport from 'passport';

import './login';
import './signup';

import User from '../models/User';

/**
 * Serializes a user to the session store.
 */
passport.serializeUser( ( user, next ) => next( null, user._id ) );

/**
 * Deserializes the user from the session store.
 */
passport.deserializeUser( ( id, next ) => {
  User.findById( id, ( error, response ) => {
    if ( error ) {
      next( error, null );
    } else {
      let user = response;
      // Delete the password from the response, since we do not want to send it to the client.
      delete user.password;
      next( null, user );
    }
  } )
} );