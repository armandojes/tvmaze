import React from 'react';
import style from './style';

function Container ({children}){
  return (
    <div role="container" className={style.container}>
      {children}
    </div>
  )
}

export default Container
