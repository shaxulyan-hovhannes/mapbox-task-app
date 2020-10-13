import { handleActions } from 'redux-actions';

import {restaurantsList, restaurantsActions} from "./list/reducer";
import {restaurantsFilterActions} from "./filter/reducer";

const initialState = {
  restaurantsList
};

export default handleActions(
  {
      ...restaurantsActions,
      ...restaurantsFilterActions,
  },
  initialState
);
