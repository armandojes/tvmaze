import React from 'react';
import style from './style';
import Container from '../../components/container';

function View (props) {

  if (props.loading) return ('Loading...')

  return (
    <Container>
      <div role="page" name="list">
        list
      </div>
    </Container>
  )
}

export default View;
