import {  useState, useEffect } from "react";
import db from "./firebase_setup/firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import car from './car.jpg';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";


const center = {
  lat: 6.9271,
  lng: 79.8612,
};


function App() {

  const db = getDatabase();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBXkBd039GDePugHeJzy5Ag0iEAmMagRng",
  });

  const [currentLocation,setCurrentLocation] = useState([]);

  const fetchdata = async () => {
    const starCountRef = ref(db, "location/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setCurrentLocation(data);
      console.log(data);
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return isLoaded ? (
    <>
      <GoogleMap
        center={center}
        zoom={8}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={currentLocation}>
        </Marker>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}
export default App;

