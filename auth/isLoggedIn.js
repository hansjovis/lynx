
/**
 * Middleware to check whether a user has logged in.
 * 
 * @param {Object}   req  The incoming HTTP request.
 * @param {Object}   res  The outgoing HTTP response.
 * @param {Function} next The callback to go to the next middleware.
 */
function isLoggedIn( req, res, next ) {
  if ( req.isAuthenticated() ) {
    return next();
  } else {
    res.status( 401 );
    res.redirect( '/login' );
  }
}

export default isLoggedIn;