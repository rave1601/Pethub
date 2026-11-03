import React, { useState } from 'react';
import {
  Home,
  Star,
  MapPin,
  Calendar,
  CheckCircle2,
  Video,
  ShieldCheck,
  Search
} from 'lucide-react';

export const HostelBookingView = ({ hostels, onReserveHostel }) => {
  const [instantForm, setInstantForm] = useState({
    checkIn: '2026-10-24',
    checkOut: '2026-10-27',
    roomType: 'Luxury Studio Suite'
  });

  return (
    <div>
      {/* 1. Instant Booking Module */}
      <div className="card card-peach" style={{ marginBottom: '28px', border: '1.5px solid #FFDDC7' }}>
        <h3 className="card-title" style={{ color: 'var(--paw-brown)', marginBottom: '8px' }}>
          <Home size={22} color="var(--primary)" />
          Instant Boarding & Hostel Search
        </h3>
        <p className="card-subtitle" style={{ color: 'var(--paw-brown-muted)', marginBottom: '20px' }}>
          Certified cage-free resorts, 24/7 webcam streaming, and 5-star care during your travels.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onReserveHostel({
              name: 'Bark & Brush Resort',
              price: '45',
              ...instantForm
            });
          }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'flex-end' }}
        >
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Check-In Date</label>
            <input
              type="date"
              className="form-input"
              value={instantForm.checkIn}
              onChange={(e) => setInstantForm({ ...instantForm, checkIn: e.target.value })}
              required
            />
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Check-Out Date</label>
            <input
              type="date"
              className="form-input"
              value={instantForm.checkOut}
              onChange={(e) => setInstantForm({ ...instantForm, checkOut: e.target.value })}
              required
            />
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Room Type</label>
            <select
              className="form-select"
              value={instantForm.roomType}
              onChange={(e) => setInstantForm({ ...instantForm, roomType: e.target.value })}
            >
              <option value="Luxury Studio Suite">Luxury Studio Suite</option>
              <option value="Deluxe Garden Cabana">Deluxe Garden Cabana</option>
              <option value="Cozy Snuggle Suite">Cozy Snuggle Suite</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" style={{ height: '48px' }} id="instant-check-availability-btn">
            <Search size={18} /> Check Availability
          </button>
        </form>
      </div>

      {/* 2. Verified Hostels Grid */}
      <h3 className="card-title" style={{ marginBottom: '16px' }}>
        Verified Pet Hostels & Boarding Resorts
      </h3>

      <div className="hostels-grid">
        {hostels.map((hostel) => (
          <div key={hostel.id} className="card hostel-card">
            {/* Visual Box */}
            <div
              className="hostel-img-box"
              style={{
                background:
                  hostel.tag === 'Top Rated'
                    ? 'linear-gradient(135deg, #2A8B88 0%, #185E5B 100%)'
                    : hostel.tag === 'Luxury'
                    ? 'linear-gradient(135deg, #6D5545 0%, #4D3B30 100%)'
                    : 'linear-gradient(135deg, #E06D53 0%, #B8472F 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                padding: '24px',
                textAlign: 'center'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Home size={38} />
                <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                  {hostel.name}
                </span>
                <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                  {hostel.location}
                </span>
              </div>

              <div className="hostel-price-badge">
                {hostel.price} <span style={{ fontSize: '0.72rem', fontWeight: 500 }}>{hostel.unit}</span>
              </div>
            </div>

            {/* Details */}
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Star size={16} fill="#F59E0B" color="#F59E0B" />
                    <strong>{hostel.rating}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      ({hostel.reviews} reviews)
                    </span>
                  </div>
                  <span className="badge badge-teal">
                    <ShieldCheck size={12} /> {hostel.tag}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                  <MapPin size={14} color="var(--primary)" />
                  {hostel.distance} • {hostel.location}
                </div>

                {/* Amenities */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                  {hostel.amenities.map((amenity, i) => (
                    <span key={i} className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => onReserveHostel(hostel)}
                id={`reserve-${hostel.id}-btn`}
              >
                Reserve Stay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
