import express      from 'express';
import passport     from 'passport';
import cookieParser from 'cookie-parser';
import logger       from 'morgan';
import session      from 'express-session';
import flash        from 'express-flash';

import SESSION_CONFIG from './config/session.json';

/**
 * Setup authentication
 */
import './auth/setup';
import isLoggedIn from './auth/isLoggedIn';

/*
 * Import routers.
 */
import indexRouter from './routes/frontend/server-route';
import adminRouter from './routes/admin/server-route';
import loginRouter from './routes/login/server-route';
import apiRouter   from './routes/api/server-route';

const app = express();

/*
 * Setup middleware and configuration options.
 */
app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( flash() );
app.use( express.static( 'public' ) );

app.use( session( {
  secret: SESSION_CONFIG.SECRET,
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
