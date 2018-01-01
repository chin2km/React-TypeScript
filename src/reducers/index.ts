import { combineReducers, Reducer } from 'redux';
import actors from './entities';

export interface RootState {
  actors: object[];
}

export default combineReducers<RootState>({
  actors
});
