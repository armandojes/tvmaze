import React from 'react';

function Markup (props){
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <title>react server side render</title>
      </head>
      <body>
        <div id="render_target" dangerouslySetInnerHTML={{__html: props.content}}/>
      </body>
    </html>
  )
}

export default Markup;
