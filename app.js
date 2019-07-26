import express      from 'express';
import passport     from 'passport';
import cookieParser from 'cookie-parser';
import logger       from 'morgan';
import session      from 'express-session';

/**
 * Setup authentication
 */
import './auth/setup';

/*
 * Import routers.
 */
import indexRouter from './routes/index';
import adminRouter from './routes/admin';
import loginRouter from './routes/login';
import apiRouter   from './routes/api';

import isLoggedIn from './auth/isLoggedIn';

const app = express();

/*
 * Setup middleware and configuration options.
 */
app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( express.static( 'public' ) );

app.use( session( {
  secret: 'SECRET_STRING',
  resave: true,
  saveUninitialized: true } ) );
app.use( passport.initialize() );
app.use( passport.session() );

/*
 * Setup route handling.
 */
app.use( '/login', loginRouter );
app.use( '/api', apiRouter );
app.use( '/admin', isLoggedIn, adminRouter );
app.use( '/', indexRouter );

export default app;
