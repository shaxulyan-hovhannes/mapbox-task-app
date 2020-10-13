import React, { useState, useCallback } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { useRestaurantsFilter } from "./useRestaurantsFilter";

function RestaurantsFilter() {
    const [ filters, setFilters ] = useState({
        title: '',
        min: '',
        max: ''
    });

    useRestaurantsFilter(filters);

  const handleChange = useCallback(field => event => setFilters({
      ...filters,
      [field]: event.target.value,
  }), [filters]);

    return <Grid container>
        <Grid item xs={4}>
            <TextField label="Title search" type="search" onChange={handleChange('title')} />
        </Grid>
        <Grid item xs={4}>
            <TextField label="Min rate search" type="search" onChange={handleChange('min')} />
        </Grid>
        <Grid item xs={4}>
            <TextField label="Max rate search" type="search" onChange={handleChange('max')} />
        </Grid>
    </Grid>
}

export default RestaurantsFilter;