import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import MapGL, { Marker, Popup } from '@urbica/react-map-gl';

import {MAPBOX_ACCESS_TOKEN} from "../../../../constants";

import 'mapbox-gl/dist/mapbox-gl.css';

function Map(props) {
    const { restaurants, selected } = props;

    const _map = useRef(null);

    const style = {
        padding: '10px',
        borderRadius: '50%',
        color: '#fff',
        cursor: 'pointer',
        background: '#1978c8',
        width: 20,
        height: 20
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

    return <MapGL  style={{ width: '100%', height: '700px' }}
                   mapStyle='mapbox://styles/mapbox/light-v9'
                   accessToken={MAPBOX_ACCESS_TOKEN}
                   latitude={40.177200}
                   longitude={44.503490}
                   zoom={2}
                   doubleClickZoom
                   ref={_map}
                   dragPan
                   dragRotate
                   boxZoom
                   antialias
                   collectResourceTiming
                   crossSourceCollisions
                   failIfMajorPerformanceCaveat
                   hash
                   keyboard
                   localIdeographFontFamily
    >
        {
            (restaurants || []).map((restaurant, index) => (
                <div key={index}>
                    <Marker
                        longitude={restaurant.coordinates[0]}
                        latitude={restaurant.coordinates[1]}
                        onClick={onMarkerClick}
                    >
                        <div style={style}></div>
                    </Marker>

                    {
                        selected === restaurant.id &&  <Popup longitude={restaurant.coordinates[0]}
                                                              latitude={restaurant.coordinates[1]}
                                                              closeButton={false}
                                                              closeOnClick={false}>
                            <div>
                                <h3>{restaurant.title}</h3>
                                <p>{restaurant.description}</p>
                            </div>
                        </Popup>
                    }
                </div>
            ))
        }
    </MapGL>

}

Map.propTypes = {
    restaurants: PropTypes.array,
    selected: PropTypes.number
};

export default Map;