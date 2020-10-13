import React, { lazy, Suspense } from 'react';

const MapBox = lazy(() => import('./pages/mapbox/MapBox'));

function App() {

    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <MapBox/>
        </Suspense>
    )
}

export default App;