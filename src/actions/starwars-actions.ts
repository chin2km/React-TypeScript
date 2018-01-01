import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

import {getEntities, fetchUrl} from '../resources/index'

export const clearSelectedItem =() => ({
    type: Actions.CLEAR_SELECTED_ENTITY
})

export function fetchByUrl(url) {
    return (dispatch) => {
        const request = fetchUrl(url);
  
        return request.then((data) => {
            return  dispatch({
            type: Actions.SET_SELECTED_ENTITY,
                item: data
            });
        })
        .catch((err) => dispatch(errorCreator(err)));
    };
}

export function fetchEntities(category, page) {
    return (dispatch) => {
        dispatch({
            type: Actions.FETCH_ENTITIES
        });
        const request = getEntities(category, page);
  
        return request.then((data) => {
            return  dispatch({
                type: Actions.SET_ENTITIES,
                items: data.results,
                count: data.count
            });
        })
        .catch((err) => dispatch(errorCreator(err)));
    };
}

export const errorCreator = (message: any) => ({
    type: Actions.FAILED_GETTING_ENTITIES,
    payload: {
        message
    }
})