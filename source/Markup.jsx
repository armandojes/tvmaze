import React from 'react';

function Markup (props){
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <title>react server side render</title>
        <base href={BASE}/>
        <link rel="stylesheet" type="text/css" href="public/style.css" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </head>
      <body>
        <div id="render_target" dangerouslySetInnerHTML={{__html: props.content}}></div>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{__html: `window.__PRELOADED_STATE__=${JSON.stringify(props.state)}`}}></script>
        <script src="/public/app.js" />
      </body>
    </html>
  )
}

export default Markup;
