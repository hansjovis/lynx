// For defining the user database model.
const mongoose = require( 'mongoose' );
// For encrypting the password.
const bcrypt = require( 'bcrypt' );

const Schema = mongoose.Schema;

/**
 * Database schema for the User model.
 */
const schema = new Schema( {
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
} );

schema.pre( 'save', function( next ) {
  // Hash the password with a salt round of 10.
  bcrypt.hash( this.password, 10 ).then(
    hashedPassword => {
      // Replace the unhashed password with the hashed one.
      this.password = hashedPassword;
      // Move on the the next middleware.
      next();
    }
  )
} );

/**
 * Checks if the given password matches the hashed one stored in the database.
 */
schema.methods.isValidPassword = function( password ) {
  // Hash the given password and compare it with the one stored in the DB.
  return bcrypt.compare( password, this.password );
}

// Create a model from the schema definition.
const User = mongoose.model( 'user', schema );

module.exports = User;