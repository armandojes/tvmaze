import initial_state from '../../initial_state';
import api from '../../api';
import { combineReducers } from 'redux';

// a s y n c   a c t i o n s
export const load_data = (id) => async (dispatch) => {
  dispatch(set_loading(true));
  const response = await api.get_single(id);
  dispatch(set_data(response));
  dispatch(set_loading(false));
}


// a c t i  o n s
export function set_initialState(){
  return {
    type: 'pages_view_set_initial_state',
  }
}

export function set_data (data) {
  return {
    type: 'pages_view_set_data',
    payload: data,
  }
}

export function set_loading (state) {
  return {
    type: 'pages_view_set_loading',
    payload: state,
  }
}

// r e d u c e r s
function data (state = initial_state.pages.view.data , action ={}) {
  if (action.type === 'pages_view_set_data'){
    return action.payload;
  } else if (action.type === 'pages_view_set_initial_state'){
    return initial_state.pages.view.data;
  }
  return state;
}

function loading (state = initial_state.pages.view.loading , action ={}) {
  if (action.type === 'pages_view_set_loading'){
    return action.payload
  } else if (action.type === 'pages_view_set_initial_state'){
    return initial_state.pages.view.loading;
  }
  return state;
}

export default combineReducers({data, loading});
