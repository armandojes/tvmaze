import React from 'react';
import style from './style';
import Container from '../container';

function Header (){
  return (
    <header className={style.header}>
      <Container>
        <div className={style.body}>
          <img className={style.logo} src="/public/img/logo.png" />
          React SSR
        </div>
      </Container>
    </header>
  )
}

export default Header;
