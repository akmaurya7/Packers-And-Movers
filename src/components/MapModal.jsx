import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapPin, Search, Check } from 'lucide-react';

const DEFAULT_COORDS = [12.8452, 77.6602]; // Electronic City, Bengaluru
const DEFAULT_ADDRESS = 'Doddathogur Rd, near Circle, Electronic City, Doddathoguru, Bengaluru, Karnataka 560100';

export default function MapModal({ isOpen, onClose, target, onConfirm }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAddress, setSelectedAddress] = useState(DEFAULT_ADDRESS);
  const [isLoadingAddr, setIsLoadingAddr] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Initialize Leaflet
    const timer = setTimeout(() => {
      if (!mapContainerRef.current) return;

      if (!mapInstanceRef.current) {
        const map = L.map(mapContainerRef.current, {
          zoomControl: true,
          attributionControl: true
        }).setView(DEFAULT_COORDS, 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        const customIcon = L.divIcon({
          className: 'custom-pin',
          html: '<div style="background-color: #E8590C; width: 22px; height: 22px; border-radius: 50%; border: 3px solid #ffffff; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
          iconSize: [22, 22],
          iconAnchor: [11, 11]
        });

        const marker = L.marker(DEFAULT_COORDS, {
          draggable: true,
          icon: customIcon
        }).addTo(map);

        marker.on('dragend', () => {
          const pos = marker.getLatLng();
          reverseGeocode(pos.lat, pos.lng);
        });

        map.on('click', (e) => {
          marker.setLatLng(e.latlng);
          reverseGeocode(e.latlng.lat, e.latlng.lng);
        });

        mapInstanceRef.current = map;
        markerRef.current = marker;
      } else {
        mapInstanceRef.current.invalidateSize();
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const reverseGeocode = async (lat, lon) => {
    setIsLoadingAddr(true);
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`, {
        headers: { 'Accept': 'application/json' }
      });
      const data = await res.json();
      setSelectedAddress(data.display_name || `Coordinates (${lat.toFixed(4)}, ${lon.toFixed(4)}), Bengaluru`);
    } catch {
      setSelectedAddress(`Coordinates (${lat.toFixed(4)}, ${lon.toFixed(4)}), Bengaluru`);
    } finally {
      setIsLoadingAddr(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || !mapInstanceRef.current) return;

    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery + ' Bengaluru India')}&limit=1`, {
        headers: { 'Accept': 'application/json' }
      });
      const results = await res.json();
      if (results && results.length > 0) {
        const item = results[0];
        const lat = parseFloat(item.lat);
        const lon = parseFloat(item.lon);
        mapInstanceRef.current.setView([lat, lon], 15);
        if (markerRef.current) {
          markerRef.current.setLatLng([lat, lon]);
        }
        setSelectedAddress(item.display_name);
      } else {
        alert('Area not found. Please try searching another landmark or locality.');
      }
    } catch (err) {
      console.error('Search error:', err);
    }
  };

  const handleConfirm = () => {
    if (onConfirm && selectedAddress) {
      onConfirm(selectedAddress);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-dialog-header">
          <div>
            <h3>{target === 'from' ? 'Select Pickup Location on Map' : 'Select Destination on Map'}</h3>
            <p>Click anywhere or drag the pin to set the exact address</p>
          </div>
          <button type="button" className="modal-close-cross" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-dialog-body">
          <form onSubmit={handleSearch} className="modal-search-row">
            <input 
              type="text" 
              placeholder="Search locality in Bengaluru (e.g. HSR Layout, Electronic City, Whitefield)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-input-field"
              style={{ padding: '8px 12px', fontSize: '0.88rem' }}
            />
            <button type="submit" className="btn btn-secondary btn-sm">
              <Search size={14} />
              <span>Search</span>
            </button>
          </form>

          <div ref={mapContainerRef} className="leaflet-canvas-container"></div>

          <div className="modal-picked-box">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <MapPin size={16} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--ink-muted)', textTransform: 'uppercase' }}>
                  {isLoadingAddr ? 'Locating address...' : 'Selected Location:'}
                </span>
                <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)' }}>
                  {selectedAddress}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-dialog-footer">
          <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>Cancel</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={handleConfirm}>
            <Check size={14} />
            <span>Use This Address</span>
          </button>
        </div>
      </div>
    </div>
  );
}
