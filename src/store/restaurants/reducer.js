import { handleActions } from 'redux-actions';

import {restaurantsList, restaurantsActions} from "./list/reducer";

const initialState = {
  restaurantsList
};

export default handleActions(
  {
    ...restaurantsActions
  },
  initialState
);
