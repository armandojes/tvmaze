import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';

function Item (props){

  return (
    <Link id={`article_${props.id}`} className={style.wrapper} to={`/view/${props.id}`}>
      <div className={style.body}>
        <img src={props.show.image ? props.show.image.medium : ''} className={style.picture}/>
        <div className={style.name}>
          {props.name}
        </div>
      </div>
    </Link>
  )
}


export default Item;
