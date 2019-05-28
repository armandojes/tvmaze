import React, { useEffect } from 'react';
import Loading from '../../components/loading';
import Container from '../../components/container';
import { load_items } from './ducks';
import { connect } from 'react-redux';
import Item from './components/item'
import style from './style';

function List (props) {

  useEffect(() => {
    if (props.items.length === 0 && !props.loading){
      props.dispatch(load_items());
    }
  },[]);


  if(props.loading) return (<Loading />)

  if (props.items.length > 0) return (
    <Container>
      <div role="page" name="list" className={style.list_container}>
        {props.items.map((item) => <Item key={item.id} {...item} />)}
      </div>
    </Container>
  )

  return null;
}


function mapSatetToProps(state){
  return {
    loading: state.pages.list.loading,
    items: state.pages.list.items,
  }
}

export default connect(mapSatetToProps)(List);
