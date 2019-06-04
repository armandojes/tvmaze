import React, { useEffect } from 'react';
import Loading from '../../components/loading';
import Container from '../../components/container';
import { load_items } from './ducks';
import { connect } from 'react-redux';
import Item from './components/item'
import style from './style';
import {useFetch} from 'react-fetch-ssr';


function List (props) {

  useFetch(async () => {
    if (props.items.length === 0 && !props.loading){
      await props.dispatch(load_items());
    }
  },[]);




  if ((props.items.length > 0) && !props.loading) return (
    <Container>
      <div role="page" name="list" className={style.list_container}>
        {props.items.map((item) => <Item key={item.id} {...item} />)}
      </div>
    </Container>
  )

  return <Loading />
}


function mapSatetToProps(state){
  return {
    loading: state.pages.list.loading,
    items: state.pages.list.items,
  }
}

export default connect(mapSatetToProps)(List);
