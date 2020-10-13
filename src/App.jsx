import React, {useRef, useState, useEffect, lazy, Suspense} from 'react';

// import MapBox from "./pages/mapbox/MapBox";

// import MapGL, { Marker, Popup } from '@urbica/react-map-gl';

// import {MAPBOX_ACCESS_TOKEN} from "./constants";

// import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = lazy(() => import('./pages/mapbox/MapBox'));

function App() {

    // const [position, setPosition] = useState({
    //     longitude: 40,
    //     latitude: 44
    // });
    //
    // const _map = useRef(null);
    //
    // const style = {
    //     padding: '10px',
    //     borderRadius: '50%',
    //     color: '#fff',
    //     cursor: 'pointer',
    //     background: '#1978c8',
    //     width: 20,
    //     height: 20
    // };

    // useEffect(() => {
    //     const map = _map.current.getMap();
    //     map.once('load', () => {
    //         map.setPaintProperty('water', 'fill-color', '#db7093');
    //     });
    // }, []);
    //
    // const onMarkerClick = (event) => {
    //     console.log('You clicked on marker', event);
    //     event.stopPropagation();
    // };

    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <MapBox/>
        </Suspense>
        // <MapGL  style={{ width: '100%', height: '400px' }}
        //         mapStyle='mapbox://styles/mapbox/light-v9'
        //         accessToken={MAPBOX_ACCESS_TOKEN}
        //         latitude={40.177200}
        //         longitude={44.503490}
        //         zoom={0} ref={_map} >
        //     <div>
        //         <Marker
        //             longitude={position.latitude}
        //             latitude={position.longitude}
        //             onClick={onMarkerClick}
        //         >
        //             <div style={style}></div>
        //         </Marker>
        //
        //         <Popup longitude={position.longitude} latitude={position.latitude} closeButton={false} closeOnClick={false}>
        //             Hi there! 👋
        //         </Popup>>
        //     </div>
        // </MapGL>
    )
}

export default App;