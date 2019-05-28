import React, { useEffect } from 'react';
import Loading from '../../components/loading';
import { load_items } from './ducks';
import { connect } from 'react-redux';

function List (props) {

  useEffect(() => {
    if (props.items.length === 0 && !props.loading){
      props.dispatch(load_items());
    }
  },[]);


  return (<Loading />)

  return (
    <div role="page" name="list">
      lista de peliculas
    </div>
  )
}


function mapSatetToProps(state){
  return {
    loading: state.pages.list.loading,
    items: state.pages.list.items,
  }
}

export default connect(mapSatetToProps)(List);
