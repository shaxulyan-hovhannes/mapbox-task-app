import React from 'react';

import Grid from '@material-ui/core/Grid';

import RestaurantsFilter from "./components/restaurants/components/restaurants-filter/RestaurantsFilter";
import RestaurantsList from "./components/restaurants/components/restaurants-list/RestaurantsList";
import Map from "./components/map/Map";

import { useMapBox } from "./useMapBox";

function MapBox() {
    const { restaurants =[], restaruantsData = [], selected, tableOptions, columns,
    selectRestaurantAction } = useMapBox();

    return (
        <Grid container>
            <Grid item xs={7} style={{
                border: '1px solid red'
            }}>
                <Map restaurants={restaurants} selected={selected} />
            </Grid>
            <Grid item xs={5} style={{
                border: '1px solid blue',
            }}>
                <RestaurantsFilter />
                <RestaurantsList restaurants={restaurants}
                                 restaruantsData={restaruantsData}
                                 tableOptions={tableOptions}
                                 columns={columns}
                                 selectRestaurantAction={selectRestaurantAction}
                />
            </Grid>
        </Grid>
    )
}

export default MapBox;