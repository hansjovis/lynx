import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Provider from 'react-redux';

/*
 * Components
 */
import App from '../client_src/javascripts/components/App';

/*
 * (Mock) data
 */
import data from "../data/jane_doe.json";
import createReduxStore from '../client_src/javascripts/createReduxStore';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const store = createReduxStore( data );

  console.time( 'rendering' );
  const content = renderToString( <App store={ store }/> );
  console.timeEnd( 'rendering' );

  const dataString = JSON.stringify( data, null, 2 );

  res.render('index', { content, data: dataString });
});

export default router;
