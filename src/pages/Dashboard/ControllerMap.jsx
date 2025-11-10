import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapContainerStyle = {
  width: '100%',
  height: '385px',
  borderRadius: '8px',
};

const center = { lat: 20.9517, lng: 85.0985 };

const controllerData = [
  {
    id: 1,
    name: 'Controller 1',
    district: 'Khurda',
    status: 'ON',
    position: { lat: 20.2706, lng: 85.8334 },
  },
  {
    id: 2,
    name: 'Controller 2',
    district: 'Baleshwar',
    status: 'OFF',
    position: { lat: 21.4942, lng: 86.9431 },
  },
  {
    id: 3,
    name: 'Controller 3',
    district: 'Sambalpur',
    status: 'ON',
    position: { lat: 21.4669, lng: 83.9812 },
  },
];

const ControllerMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyD5JOxR3Cms1MhE_P7h7y0z1JPv_focgHE',
  });

  const [selectedController, setSelectedController] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      map.data.loadGeoJson(
        'https://raw.githubusercontent.com/geohacker/india/master/state/odisha.geojson',
      );
      map.data.setStyle({
        fillColor: '#ff0404ff',
        fillOpacity: 1,
        strokeColor: '#f37703ff',
        strokeWeight: 2,
      });
    }
  }, [map]);

  if (!isLoaded) {
    return <p>Loading Map...</p>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={7}
      onLoad={(mapInstance) => setMap(mapInstance)}
    >
      {controllerData.map((controller) => (
        <Marker
          key={controller.id}
          position={controller.position}
          onClick={() => setSelectedController(controller)}
          icon={{
            url:
              controller.status === 'ON'
                ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          }}
        />
      ))}

      {selectedController && (
        <InfoWindow
          position={selectedController.position}
          onCloseClick={() => setSelectedController(null)}
        >
          <div style={{ minWidth: '250px' }}>
            <p className="mb-2">
              <span className='label'>Controller Name:</span> <span className='value'> {selectedController.name} </span> 
            </p>
            <p className="mb-2">
              <span className='label'>District:</span> <span className='value'>{selectedController.district}</span>
            </p>
            <p className="mb-3">
              <span className='label'>Controller Status:</span>{' '}
              <span
                style={{
                  color: selectedController.status === 'ON' ? 'green' : 'red',
                  fontWeight: 'bold',
                }}
              >
                {selectedController.status}
              </span>
            </p>
            <hr />
            <div className='d-flex justify-content-end navigate-btn'>
                <button
                type="button"
                onClick={() => {
                    if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                        const origin = `${position.coords.latitude},${position.coords.longitude}`;
                        const destination = `${selectedController.position.lat},${selectedController.position.lng}`;
                        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
                        window.open(mapsUrl, '_blank'); // open in new tab
                        },
                        (error) => {
                        console.error('Error getting location:', error);
                        // fallback: open just destination
                        const destination = `${selectedController.position.lat},${selectedController.position.lng}`;
                        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
                        window.open(mapsUrl, '_blank');
                        },
                    );
                    } else {
                    // fallback if geolocation not supported
                    const destination = `${selectedController.position.lat},${selectedController.position.lng}`;
                    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
                    window.open(mapsUrl, '_blank');
                    }
                }}
                >
                Navigate
                </button>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default ControllerMap;
