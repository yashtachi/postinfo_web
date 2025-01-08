import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface TrackingMapProps {
  location: {
    lat: number;
    lng: number;
  };
}

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

export function TrackingMap({ location }: TrackingMapProps) {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={location}
        zoom={12}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}