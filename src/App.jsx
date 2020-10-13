import React, {useRef, useState, useEffect} from 'react';

import MapGL, { Marker } from '@urbica/react-map-gl';

import {MAPBOX_ACCESS_TOKEN} from "./constants";

import 'mapbox-gl/dist/mapbox-gl.css';

function App() {

    const [position, setPosition] = useState({
        longitude: 40,
        latitude: 44
    });

    const _map = useRef(null);

    const style = {
        padding: '10px',
        color: '#fff',
        cursor: 'pointer',
        background: '#1978c8',
        borderRadius: '6px'
    };

    useEffect(() => {
        const map = _map.current.getMap();
        map.once('load', () => {
            map.setPaintProperty('water', 'fill-color', '#db7093');
        });
    }, []);

    const onMarkerClick = (event) => {
        console.log('You clicked on marker', event);
        event.stopPropagation();
    };

    return (
        <MapGL  style={{ width: '100%', height: '700px' }}
                mapStyle='mapbox://styles/mapbox/light-v9'
                accessToken={MAPBOX_ACCESS_TOKEN}
                latitude={40.177200}
                longitude={44.503490}
                zoom={7} ref={_map} >
            <Marker
                longitude={position.latitude}
                latitude={position.longitude}
                onClick={onMarkerClick}
            >
                <div style={style}>Click me! ✨</div>
            </Marker>
            <Marker
                longitude={position.latitude + 1}
                latitude={position.longitude + 1}
                onClick={onMarkerClick}
            >
                <div style={style}>Click me! ✨</div>
            </Marker>

            <Marker
                longitude={position.latitude - 1}
                latitude={position.longitude - 1}
                onClick={onMarkerClick}
            >
                <div style={style}>Click me! ✨</div>
            </Marker>
        </MapGL>
    )
}

export default App;