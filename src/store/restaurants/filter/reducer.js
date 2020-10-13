import { filterRestaurants } from "./actions";

import {restaurantsData} from "../../../fake-data/restaurants/restaurants";

const restaurantsFilterActions = {
    [filterRestaurants]: (state, {payload: filters}) => {

        const {title:titleFilter, min:minFilter, max:maxFilter} = filters ?? {};

        let filteredRestaurants;

        const isMin = (rate, min) => (!min || ((!!min) && (rate >= min)));

        const isMax = (rate, max) => (!max || ((!!max) && (rate <= max)));

        if (!titleFilter && !minFilter && !maxFilter) {
            filteredRestaurants = restaurantsData;
        }
        else {
            filteredRestaurants = restaurantsData.filter(item => (!titleFilter
                || item.title.toLowerCase().includes(titleFilter.toLowerCase()))
                && (isMin(item.rating, minFilter)) && (isMax(item.rating, maxFilter)))
        }

        return ({
            ...state,
            restaurantsList: {
                ...state.restaurantsList,
                restaurants: filteredRestaurants,
            }
        })
    },
};

export { restaurantsFilterActions };