import { createActions } from 'redux-actions';

export const {
    getRestaurants,
    selectRestaurant
} = createActions(
    'GET_RESTAURANTS',
    'SELECT_RESTAURANT'
);