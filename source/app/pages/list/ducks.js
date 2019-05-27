import initial_state from '../../initial_state';
import { combineReducers } from 'redux';

// a c t i  o n s
export function set_items (items) {
  return {
    action: 'pages_list_set_items',
    payload: items,
  }
}
// a c t i  o n s
export function set_loading (state) {
  return {
    action: 'pages_list_set_loading',
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
