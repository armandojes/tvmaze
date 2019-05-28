import React, { useEffect } from 'react';
import Container from '../../components/container';
import { connect } from 'react-redux';
import { load_data, set_initialState } from './ducks';
import style from './style';

function View (props) {

  useEffect(() => {
    if (!props.data)
    props.dispatch(load_data(props.match.params.id));
    return () => {props.dispatch(set_initialState())}
  },[])


  if (props.loading) return ('Loading...')

  if (props.data) return (
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

  return null
}

function mapStateToProps(state){
  return {
    loading: state.pages.view.loading,
    data: state.pages.view.data,
  }
}

export default connect(mapStateToProps)(View);
