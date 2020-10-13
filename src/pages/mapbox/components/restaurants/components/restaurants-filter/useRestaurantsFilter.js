import { useCallback, useEffect } from 'react';
import {useDispatch} from "react-redux";

import {filterRestaurants} from "../../../../../../store/restaurants/filter/actions";

export function useRestaurantsFilter(filters) {
    const dispatch = useDispatch();
    
    const filterRestaurantsAction = useCallback(() => dispatch(filterRestaurants(filters)), [dispatch, filters]);

    useEffect(() => {
        filterRestaurantsAction(filters);
    }, [filterRestaurantsAction, filters]);
}