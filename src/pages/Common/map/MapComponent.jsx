import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Card, CardBody, CardTitle } from "reactstrap";

const containerStyle = {
  width: "100%",
  height: "600px",
};

// Default map center (Odisha region)
const center = {
  lat: 20.9517,
  lng: 85.0985,
};

// Example marker data
const markers = [
  { id: 1, lat: 21.5, lng: 83.9, color: "blue", title: "Sambalpur" },
  { id: 2, lat: 20.3, lng: 85.8, color: "orange", title: "Bhubaneswar" },
  { id: 3, lat: 19.07, lng: 82.03, color: "orange", title: "Jagdalpur" },
  { id: 4, lat: 21.95, lng: 86.72, color: "orange", title: "Balasore" },
];

const MapComponent = () => {
  return (
    <Card className="m-3 shadow">
      <CardBody>
        <CardTitle tag="h5">Google Map Example (React + Reactstrap)</CardTitle>

        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={6}
          >
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng }}
                title={marker.title}
                icon={{
                  url: `http://maps.google.com/mapfiles/ms/icons/${marker.color}-dot.png`,
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </CardBody>
    </Card>
  );
};

export default MapComponent;
