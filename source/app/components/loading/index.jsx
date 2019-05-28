import React from 'react';
import style from './style';
import Container from '../container'

function Loading () {
  return (
    <Container>
      <div className={style.loading}>
        <img className={style.picture} src="/public/img/preloader.gif" />
      </div>
    </Container>
  )
}

export default Loading;
