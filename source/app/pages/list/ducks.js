import initial_state from '../../initial_state';
import api from '../../api';
import { combineReducers } from 'redux';


// a s y n c   a c t i o n s
export const load_items = () => async (dispatch) => {
  dispatch(set_loading(true));
  const response = await api.get_list();
  dispatch(set_items(response))
  dispatch(set_loading(false));
}



// a c t i  o n s
export function set_items (items) {
  return {
    type: 'pages_list_set_items',
    payload: items,
  }
}

export function set_loading (state) {
  return {
    type: 'pages_list_set_loading',
    payload: state,
  }
}


// r e d u c e r s
function items (state = initial_state.pages.list.items , action ={}) {
  if (action.type === 'pages_list_set_items'){
    return state.concat(action.payload);
  }
  return state;
}

function loading (state = initial_state.pages.list.loading , action ={}) {
  if (action.type === 'pages_list_set_loading'){
    return action.payload
  }
  return state;
}

export default combineReducers({items, loading});
