"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
L.Marker.prototype.options.icon = DefaultIcon;

interface Location {
  latitude: number;
  longitude: number;
  title: string;
  description?: string;
}

interface MapProps {
  locations: Location[];
}

export default function Map({ locations }: MapProps) {
  if (!locations || locations.length === 0) return null;

  const center = [locations[0].latitude, locations[0].longitude] as [number, number];

  return (
    <MapContainer
      center={center}
      zoom={locations.length === 1 ? 15 : 5}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={false}
      className="rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((loc, idx) => (
        <Marker key={idx} position={[loc.latitude, loc.longitude]}>
          <Popup>
            <strong>{loc.title}</strong>
            <br />
            {loc.description && <span>{loc.description}</span>}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
