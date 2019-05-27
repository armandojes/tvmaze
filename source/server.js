import React from 'react';
import express from 'express';
import { StaticRouter } from 'react-router';
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import Markup from './Markup';
import App from './app/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './app/reducer.js';


const app = express();

//statics server
app.use('/public', express.static('./public'));


app.get('*', function (request, response){

  //create store
  const store = createStore(
    reducer,
    applyMiddleware(ReduxThunk)
  );

  const context = {};
  const content=renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={request.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const html = renderToStaticMarkup(<Markup content={content} />);
  response.send(html);
  response.end();
})


app.listen(3000);
