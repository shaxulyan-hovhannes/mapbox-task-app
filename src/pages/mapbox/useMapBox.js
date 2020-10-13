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

    const restaruantsData = (restaurants || []).map(item => [item?.title, item?.description, item?.rating, 'coords', item?.id]);

    const getRestaurantsAction = useCallback(() => dispatch(getRestaurants()), [dispatch]);
    const selectRestaurantAction = useCallback((_, row) => {
        dispatch(selectRestaurant(restaurantsData[row.rowIndex].id));
    }, [dispatch]);

    const tableOptions = useMemo(() => ({
        ...OPTIONS,
        onCellClick: selectRestaurantAction,

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