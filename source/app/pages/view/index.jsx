import React, { useEffect } from 'react';
import Container from '../../components/container';
import Loading from '../../components/loading';
import { connect } from 'react-redux';
import { load_data, set_initialState } from './ducks';
import style from './style';
import { useFetch } from 'react-fetch-ssr';

function View (props) {

  useFetch(async () => {
    if (!props.data)
    await props.dispatch(load_data(props.match.params.id));
  },[])

  useEffect(() => {
    return () => {props.dispatch(set_initialState())}
  },[]);

  if (props.data && !props.loading) return (
    <Container>
      <div role="page" name="view">
        <div className={style.primary}>
          <img className={style.picture} src={props.data.image.original} />
          <div className={style.data}>
            <div className={style.header}>{props.data.name}</div>
            <div className={style.desc} dangerouslySetInnerHTML={{__html: props.data.summary}} />
          </div>
        </div>
      </div>
    </Container>
  )

  return <Loading />
}

function mapStateToProps(state){
  return {
    loading: state.pages.view.loading,
    data: state.pages.view.data,
  }
}

export default connect(mapStateToProps)(View);
