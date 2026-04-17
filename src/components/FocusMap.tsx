"use client";

import { memo, useEffect, useMemo, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

type FocusMapProps = {
  lat: number;
  lng: number;
  zoom?: number;
};

const TARGET_ZOOM = 14.5;
const ADDRESS = "Yunus Emre, 1328/2. Sk. No: 23, 34260 Sultangazi/Istanbul";

function MapZoomController({ lat, lng, zoom }: { lat: number; lng: number; zoom: number }) {
  const map = useMap();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      map.flyTo([lat, lng], TARGET_ZOOM, {
        duration: 1.7,
        easeLinearity: 0.22,
      });
    }, 460);

    return () => {
      clearTimeout(timer);
      map.stop();
    };
  }, [lat, lng, map, zoom]);

  return null;
}

export const FocusMap = memo(function FocusMap({ lat, lng, zoom = 13 }: FocusMapProps) {
  const [ready, setReady] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);
  const position = useMemo<[number, number]>(() => [lat, lng], [lat, lng]);

  const markerIcon = useMemo(
    () =>
      L.divIcon({
        className: "focus-pin-wrapper",
        html: `
          <div class="focus-pin ${pulseActive ? "pulse-active" : ""}">
            <span class="pin-glow"></span>
            <span class="pin-core"></span>
            <span class="pin-pulse"></span>
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      }),
    [pulseActive]
  );

  useEffect(() => {
    const appearTimer = window.setTimeout(() => setReady(true), 120);
    const pulseTimer = window.setTimeout(() => setPulseActive(true), 300);

    return () => {
      clearTimeout(appearTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <section className="focus-map-section">
      <div className="container-layout">
        <div className="focus-map-shell">
          <div className={`focus-map-container ${ready ? "ready" : ""}`}>
            <MapContainer
              center={position}
              zoom={zoom}
              zoomControl={false}
              scrollWheelZoom={false}
              dragging
              doubleClickZoom={false}
              keyboard={false}
              attributionControl={false}
            >
              <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
              <Marker position={position} icon={markerIcon} />
              <MapZoomController lat={lat} lng={lng} zoom={zoom} />
            </MapContainer>
          </div>

          <div className="focus-map-card">
            <p>{ADDRESS}</p>
            <a
              href={`https://www.google.com/maps?q=${lat},${lng}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Open location in maps"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
