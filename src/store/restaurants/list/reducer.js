import {restaurantsData} from "../../../fake-data/restaurants/restaurants";

import { getRestaurants, selectRestaurant } from "./actions";

const restaurantsList = {
    restaurants: null,
    selected: null,
};

const restaurantsActions = {
    [getRestaurants]: state => ({
        ...state,
        restaurantsList: {
            ...state.restaurantsList,
            restaurants: restaurantsData,
        }
    }),
    [selectRestaurant]: (state, {payload: selected}) => ({
        ...state,
        restaurantsList: {
            ...state.restaurantsList,
            selected: state.restaurantsList.selected === selected ? null : selected,
        }
    })
};

export { restaurantsList, restaurantsActions };