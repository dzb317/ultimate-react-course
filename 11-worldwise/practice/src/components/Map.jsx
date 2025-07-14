import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import styles from "./Map.module.css";
import { useCities } from "../context/CitiesContext";
import Button from "./Button";
import { useGeolocation } from "../hooks/useGeolocation";
function Map() {
    const navigate = useNavigate();
    const { cities } = useCities();
    const [position, setPosition] = useState([51.505, -0.09]);
    const [searchParams] = useSearchParams();
    const { position: geolocationPosition, isLoadingPosition, getPosition } = useGeolocation();

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    useEffect(() => {
        if (lat && lng) {
            setPosition([lat, lng]);
        }
    }, [lat, lng]);

    useEffect(() => {
        if (geolocationPosition) {
            setPosition([geolocationPosition.lat, geolocationPosition.lng]);
        }
    }, [geolocationPosition]);
    return (
        <div className={styles.mapContainer}>
            <Button type="position" onClick={getPosition}>
                {isLoadingPosition ? "Loading..." : "Use your position"}
            </Button>
            <MapContainer center={position} zoom={6} scrollWheelZoom={true} className={styles.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map((city) => (
                    <Marker position={city.position} key={city.id}>
                        <Popup>
                            <span>{city.emoji}</span>
                            <span>{city.cityName}</span>
                        </Popup>
                    </Marker>
                ))}

                <ChangeCenter position={position} />
            </MapContainer>
        </div>
    );
}

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}

export default Map;
