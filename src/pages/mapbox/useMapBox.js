import { useCallback, useMemo, useEffect } from 'react';

import {useDispatch, useSelector} from "react-redux";

import { getRestaurants, selectRestaurant } from "../../store/restaurants/list/actions";

import {selectRestaurantsList} from "../../store/restaurants/selectors";

import { OPTIONS, COLUMNS } from "./components/restaurants/components/restaurants-list/constants";
import {restaurantsData} from "../../fake-data/restaurants/restaurants";


export function useMapBox() {
    const dispatch = useDispatch();

    const restaurantsList = useSelector(selectRestaurantsList);

    const {restaurants, selected} = useMemo(() => restaurantsList, [restaurantsList]);

    const restaruantsData = (restaurants || []).map(item => [item.id, item?.title, item?.description, item?.rating, item.coordinates.join(',')]);

    const getRestaurantsAction = useCallback(() => dispatch(getRestaurants()), [dispatch]);
    const selectRestaurantAction = useCallback(data => {
        dispatch(selectRestaurant(parseInt(data[0])))
    }, [dispatch]);

    const tableOptions = useMemo(() => ({
        ...OPTIONS,
        onRowClick: selectRestaurantAction,

    }), [selectRestaurantAction]);

    useEffect(() => {
        setTimeout(() => {getRestaurantsAction()}, 1000);
        // Just data fetching simulation
    }, [getRestaurantsAction]);

    return {
        restaurants,
        restaruantsData,
        selected,
        tableOptions,
        columns: COLUMNS,
        selectRestaurantAction
    }
}