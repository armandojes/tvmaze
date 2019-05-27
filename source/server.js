import React from 'react';
import express from 'express';
import Markup from './Markup';
import { renderToStaticMarkup } from 'react-dom/server'

const app = express();

app.get('*', function (reques, response){
  const html = renderToStaticMarkup(<Markup />);
  response.send(html);
  response.edn();
})


app.listen(3000);
