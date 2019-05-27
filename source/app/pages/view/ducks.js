import initial_state from '../../initial_state';
import { combineReducers } from 'redux';

// a c t i  o n s
export function set_data (data) {
  return {
    action: 'pages_view_set_data',
    payload: data,
  }
}

// a c t i  o n s
export function set_loading (state) {
  return {
    action: 'pages_view_set_loading',
    payload: state,
  }
}

// r e d u c e r s
function data (state = initial_state.pages.view.data , action ={}) {
  if (action.type === 'pages_view_set_data'){
    return action.payload;
  }
  return state;
}

function loading (state = initial_state.pages.view.loading , action ={}) {
  if (action.type === 'pages_view_set_loading'){
    return action.payload
  }
  return state;
}

export default combineReducers({data, loading});
