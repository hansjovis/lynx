import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

/*
 * Components
 */
import App from '../client_src/javascripts/App';

/*
 * (Mock) data
 */
import data from "../data/jane_doe.json";

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const content = renderToString( <App { ...data }/> );

  const dataString = JSON.stringify( data, null, 2 );

  res.render('index', { content, data: dataString });
});

export default router;
