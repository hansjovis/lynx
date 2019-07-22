import express      from 'express';
import cookieParser from 'cookie-parser';
import logger       from 'morgan';

/*
 * Import routers.
 */
import indexRouter from './routes/index';
import adminRouter from './routes/admin';

const app = express();

/*
 * Setup middleware and configuration options.
 */
app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( express.static( 'public' ) );

/*
 * Setup route handling.
 */
app.use( '/admin', adminRouter );
app.use( '/', indexRouter );

export default app;
