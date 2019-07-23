// For defining the user database model.
const mongoose = require( 'mongoose' );
// For encrypting the password.
const bcrypt = require( 'bcrypt' );

const Schema = mongoose.Schema;

/**
 * Database schema for the User model.
 */
const schema = new Schema( {
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
} );

schema.pre( 'save', async next  => {
  // Hash the password with a salt round of 10.
  const hashedPassword = await bcrypt.hash( this.password, 10 );
  // Replace the unhashed password with the hashed one.
  this.password = hashedPassword;
  // Move on the the next middleware.
  next();
} );

/**
 * Checks if the given password matches the hashed one stored in the database.
 */
schema.methods.isValidPassword = async password => {
  const user = this;
  // Hash the given password and compare it with the one stored in the DB.
  const isTheSame = await bcrypt.compare( password, user.password );
  return isTheSame;
}

// Create a model from the schema definition.
const User = mongoose.model( 'user', schema );

module.exports = User;