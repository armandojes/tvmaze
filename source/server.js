import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router';
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import Markup from './Markup';
import App from './app/app';

const app = express();

//statics server
app.use('/public', express.static('./public'));


app.get('*', function (request, response){
  const context = {};
  const content=renderToString(
    <StaticRouter context={context} location={request.url}>
      <App />
    </StaticRouter>
  );

  const html = renderToStaticMarkup(<Markup content={content} />);
  response.send(html);
  response.end();
})


app.listen(3000);
