const COLUMNS = [{
    name: 'id',
    options: {
        display: false,
    }
}, 'Title', 'Description', 'Rating', 'Coordinates'];

const OPTIONS = {
    search: false,
    download: false,
    viewColumns: false,
    print: false,
    filter: false,
    draggableColumns: {
        enabled: true,
        transitionTime: 500
    },
    selectableRows: 'none',
};

export {
    COLUMNS,
    OPTIONS
}