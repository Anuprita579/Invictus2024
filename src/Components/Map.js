import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import worldMap from '../geomap.json';

const MyMap = () => {
  return (
    <ComposableMap>
      <Geographies geography={worldMap}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography key={geo.rsmKey} geography={geo} className='fill-purple-700'/>
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MyMap;