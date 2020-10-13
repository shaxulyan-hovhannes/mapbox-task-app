import React from 'react';
import PropTypes from 'prop-types';

import MUIDataTable from "mui-datatables";

function RestaurantsList(props) {
    const { restaurants, restaruantsData, tableOptions, columns } = props;
    // In real world used <<loading>> state while fetching, so <<restaurants>> prop is will unnecessary, it's just for this task, loading checking.

    return restaurants ? <MUIDataTable
        data={restaruantsData}
        columns={columns}
        options={tableOptions}
    /> : <h2>Loading...</h2>
}

RestaurantsList.propTypes = {
    restaurants: PropTypes.array,
    restaruantsData: PropTypes.array,
    tableOptions: PropTypes.object,
    columns: PropTypes.array,
};

export default RestaurantsList;