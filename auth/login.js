import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/User';

const options = {
  usernameField : 'username',
  passwordField : 'password'
}

/**
 * Checks if the supplied credentials are correct.
 * 
 * @param {String} username The username to check.
 * @param {String} password The password to check.
 * @param {Function} next The callback function to go to the next middleware. 
 */
function validCredentials( username, password, next ) {
  User.findOne( { username } ).then(
    function( user ) {
      if( !user ) {
        // If the user isn't found in the database, return a message
        return next( null, false, { message : 'User not found' } );
      } else {
        // Validate password.
        user.isValidPassword( password )
          .then(
            valid => valid 
              ? next( null, user, { message: 'Logged in successfully' } )
              : next( null, false, { message : 'Wrong Password' } )
          )
      }
    }
  )
}

// Create a passport middleware to handle User login
passport.use( 'login', new LocalStrategy( options, validCredentials ) );