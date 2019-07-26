import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/User';

// Create a passport middleware to handle user registration.
passport.use( 'signup', new LocalStrategy( {
  usernameField : 'username',
  passwordField : 'password'
}, ( username, password, next ) => {
  // Save the information provided by the user to the the database.
  User.create( { username, password } )
    .then( user => next( null, user ) )
    .catch( error => next( error ) );
} ) );
