import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState = {
  items: [],
  selectedItem: undefined,
  count: 0
};

export default handleActions({
  [Actions.FETCH_ENTITIES]: (state, action: any) => {
    return {...initialState};
  },
  [Actions.SET_ENTITIES]: (state, action: any) => {
    return {
      ...state, items: action.items, count: action.count
    };
  },
  [Actions.SET_SELECTED_ENTITY]: (state, action: any) => {
    return {
      ...state, selectedItem: action.item
    };
  },
  [Actions.CLEAR_SELECTED_ENTITY]: (state, action: any) => {
    return {
      ...state, selectedItem: undefined
    };
  },
}, initialState);
