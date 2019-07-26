import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/User';

// Create a passport middleware to handle User login
passport.use( 'login', new LocalStrategy( {
  usernameField : 'username',
  passwordField : 'password'
}, ( username, password, next ) => {

  let loggedInUser = {};

  // Find the user associated with the username provided by the user
  User.findOne( { username } ).then(
    function( user ) {
      if( !user ) {
        console.error( 'User could not be found' );
        // If the user isn't found in the database, return a message
        return next( null, false, { message : 'User not found' } );
      }

      loggedInUser = user;

      // Validate password and make sure it matches with the corresponding hash stored in the database
      // If the passwords match, it returns a value of true.
      return user.isValidPassword( password );
    }
  ).then(
    function( passwordIsValid ) {
      if ( !passwordIsValid ) {
        return next( null, false, { message : 'Wrong Password' } );
      }
      return next( null, loggedInUser, { message: 'Logged in successfully' } );
    }
  ).catch( next )
} ) );