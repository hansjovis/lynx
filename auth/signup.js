import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/User';

const options = {
  usernameField : 'username',
  passwordField : 'password'
};

/**
 * Middleware for creating a user in the database.
 * 
 * @param {String} username The name of the new user
 * @param {String} password The password.
 * @param {Function} next Callback to go to the next middleware.
 */
function createUser( username, password, next ) {
  User.create( { username, password } )
    .then( user => next( null, user ) )
    .catch( error => next( error ) );
}

// Create a passport middleware to handle user registration.
passport.use( 'signup', new LocalStrategy( options, createUser ) );
