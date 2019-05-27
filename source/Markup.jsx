import React from 'react';

function Markup (props){
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <title>react server side render</title>
        <base href="http://localhost:3000"/>
        <link rel="stylesheet" type="text/css" href="public/style.css" />
      </head>
      <body>
        <div id="render_target" dangerouslySetInnerHTML={{__html: props.content}}/>
        <script src="/public/app.js" />
      </body>
    </html>
  )
}

export default Markup;
