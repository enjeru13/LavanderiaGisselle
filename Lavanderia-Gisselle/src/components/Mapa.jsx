import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Mapa = () => {
  const center = {
    lat: 7.77987813949585,
    lng: -72.2218017578125,
  };

  return (
    <div className="h-64 w-full rounded-lg overflow-hidden">
      <LoadScript googleMapsApiKey="AIzaSyBHYtZ8BGjUHrLQrjs3tslM2jn94YPgimg">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={center}
          zoom={14}
        >
          <Marker position={center} title="Mi ubicación" />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Mapa;
