import React, { useState } from 'react';
import {
  AlertTriangle,
  PhoneCall,
  Navigation,
  MapPin,
  ShieldAlert,
  Clock,
  Heart,
  QrCode,
  Radio,
  Share2
} from 'lucide-react';

export const EmergencyView = ({
  emergency,
  onTriggerSosCall,
  onFindHospital
}) => {
  const [sosActive, setSosActive] = useState(true);

  return (
    <div>
      {/* 1. Top Red Alert Banner */}
      <div className="emergency-pulsing-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(255, 255, 255, 0.5)'
            }}
          >
            <Radio size={28} color="#ffffff" className="gps-pulse-dot" />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge" style={{ backgroundColor: '#ffffff', color: 'var(--accent)', fontWeight: 800 }}>
                CRITICAL SOS
              </span>
              <span style={{ fontSize: '0.82rem', letterSpacing: '0.05em', opacity: 0.9 }}>
                SIGNAL BROADCAST ACTIVE
              </span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginTop: '2px', color: '#ffffff' }}>
              {emergency.status}
            </h3>
            <p style={{ fontSize: '0.86rem', opacity: 0.95 }}>
              Live Coordinates: {emergency.location} ({emergency.accuracy})
            </p>
          </div>
        </div>

        <button
          className="btn"
          style={{ backgroundColor: '#ffffff', color: 'var(--accent)', fontWeight: 800 }}
          onClick={() => setSosActive(!sosActive)}
        >
          {sosActive ? 'Beacon Transmitting ✓' : 'Transmit SOS Beacon'}
        </button>
      </div>

      {/* 2. Quick Action Grid (2 Action Cards) */}
      <div className="emergency-actions-grid">
        {/* Call Emergency Vet */}
        <div
          className="emergency-action-btn-card"
          style={{
            backgroundColor: 'var(--accent-light)',
            border: '2px solid var(--accent)',
            color: 'var(--accent-dark)'
          }}
          onClick={onTriggerSosCall}
          id="emergency-call-vet-btn"
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 8px 20px rgba(224, 109, 83, 0.4)'
            }}
          >
            <PhoneCall size={28} />
          </div>

          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
              1-Click Instant Hotline
            </span>
            <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
              Call Emergency Vet
            </h4>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Direct line to On-Call Trauma Dispatcher (+1 555-911-PETS)
            </div>
          </div>
        </div>

        {/* Find Nearest Hospital */}
        <div
          className="emergency-action-btn-card"
          style={{
            backgroundColor: 'var(--primary-light)',
            border: '2px solid var(--primary)',
            color: 'var(--primary-dark)'
          }}
          onClick={onFindHospital}
          id="emergency-find-hospital-btn"
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 8px 20px rgba(42, 139, 136, 0.4)'
            }}
          >
            <Navigation size={28} />
          </div>

          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>
              Fastest Turn-by-Turn Route
            </span>
            <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
              Find Nearest ER Hospital
            </h4>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Metropolitan 24/7 Animal Hospital • 1.8 mi (4 mins away)
            </div>
          </div>
        </div>
      </div>

      {/* 3. Primary Emergency Contacts & Critical Medical ID Card */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '24px' }}>
        {/* Direct Call List */}
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: '16px' }}>
            <PhoneCall size={20} color="var(--primary)" />
            Primary 24/7 Emergency Contacts
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Primary Vet */}
            <div style={{ padding: '16px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-teal" style={{ marginBottom: '4px' }}>Primary Doctor</span>
                <div style={{ fontWeight: 800, fontSize: '0.98rem' }}>{emergency.primaryVet.name}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {emergency.primaryVet.clinic} • {emergency.primaryVet.address}
                </div>
              </div>
              <a href={`tel:${emergency.primaryVet.phone}`} className="btn btn-outline-primary btn-sm">
                <PhoneCall size={14} /> Call {emergency.primaryVet.phone}
              </a>
            </div>

            {/* ER Hospitals */}
            {emergency.erHospitals.map((hosp, idx) => (
              <div key={idx} style={{ padding: '16px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span className="badge badge-coral" style={{ marginBottom: '4px' }}>24/7 Trauma Ready</span>
                  <div style={{ fontWeight: 800, fontSize: '0.98rem' }}>{hosp.name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {hosp.distance} • ETA: {hosp.eta}
                  </div>
                </div>
                <a href={`tel:${hosp.phone}`} className="btn btn-accent btn-sm">
                  <PhoneCall size={14} /> Call Now
                </a>
              </div>
            ))}

            {/* Poison Control */}
            <div style={{ padding: '14px 16px', background: '#F8FAFC', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{emergency.poisonControl.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{emergency.poisonControl.hours}</div>
              </div>
              <a href={`tel:${emergency.poisonControl.phone}`} className="btn btn-secondary btn-sm">
                <PhoneCall size={14} /> {emergency.poisonControl.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Critical Medical ID Card */}
        <div className="card" style={{ border: '2px solid #EFE8DE', background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF9F5 100%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 className="card-title">
              <ShieldAlert size={20} color="var(--accent)" />
              Critical Medical Emergency ID
            </h3>
            <QrCode size={26} color="var(--paw-brown)" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ padding: '12px 14px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <span className="info-label">Patient Identity</span>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
                {emergency.medicalId.petName} ({emergency.medicalId.breed})
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Microchip: {emergency.medicalId.microchip} • Weight: {emergency.medicalId.weight}
              </div>
            </div>

            <div style={{ padding: '12px 14px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <span className="info-label">Canine Blood Group</span>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent)', marginTop: '2px' }}>
                {emergency.medicalId.bloodGroup}
              </div>
            </div>

            <div style={{ padding: '12px 14px', background: 'var(--accent-light)', borderRadius: 'var(--radius-md)', border: '1px solid #FFD3C9' }}>
              <span className="info-label" style={{ color: 'var(--accent)' }}>Severe Allergic Contraindications</span>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--accent-dark)', marginTop: '2px' }}>
                {emergency.medicalId.severeAllergies}
              </div>
            </div>

            <div style={{ padding: '12px 14px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <span className="info-label">Active Prescriptions</span>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', marginTop: '2px' }}>
                {emergency.medicalId.activeMeds}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
