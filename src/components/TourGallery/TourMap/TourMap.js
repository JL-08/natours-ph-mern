import React, { useEffect, useRef, useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import markerIcon from '../../../assets/images/map-marker.png';

const TourMap = ({ locations }) => {
  return (
    <figure className='tour-map'>
      <div id='mapbox'>
        <Map
          initialViewState={{
            longitude: locations[0].coordinates[0],
            latitude: locations[0].coordinates[1],
            zoom: 10,
          }}
          mapStyle='mapbox://styles/mapbox/streets-v11'
        >
          <NavigationControl />
          {locations.map((loc) => (
            <Marker
              longitude={loc.coordinates[0]}
              latitude={loc.coordinates[1]}
              anchor='bottom'
            >
              <img src={markerIcon} width={30} height={40} />
            </Marker>
          ))}
        </Map>
      </div>
    </figure>
  );
};

export default TourMap;
