import React, { useState } from 'react';
import {
  Scissors,
  Sparkles,
  Calendar,
  Check,
  AlertCircle,
  Clock,
  Heart,
  CheckCircle2
} from 'lucide-react';

export const GroomingView = ({ grooming, onSelectPackage, onBookGrooming }) => {
  const [selectedPkgId, setSelectedPkgId] = useState('pkg-2');

  return (
    <div>
      {/* 1. Upcoming Grooming Session Card */}
      <div className="card card-peach" style={{ marginBottom: '24px', border: '1.5px solid #FFDDC7' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-coral">Confirmed Session</span>
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--paw-brown)' }}>
                {grooming.upcomingSession.scheduledTime}
              </span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '4px' }}>
              Luxury Spa Bath & Deshedding
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              Assigned Specialist: <strong>{grooming.upcomingSession.specialist}</strong> ({grooming.upcomingSession.role}) • {grooming.upcomingSession.studio}
            </p>
          </div>

          <button className="btn btn-primary" onClick={onBookGrooming} id="reschedule-grooming-btn">
            <Calendar size={16} /> Reschedule Session
          </button>
        </div>

        {/* Tag Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
          {grooming.upcomingSession.badges.map((badge, idx) => (
            <span key={idx} className="badge badge-teal" style={{ fontSize: '0.82rem' }}>
              <Sparkles size={13} /> {badge}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Preferences Card & Grooming Specialists Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }}>
        {/* Preferences Card */}
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: '16px' }}>
            <Heart size={20} color="var(--accent)" />
            Buddy's Grooming Preferences & Skin Health
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '12px 16px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-md)' }}>
              <span className="info-label">Skin Sensitivity</span>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent)', marginTop: '2px' }}>
                <AlertCircle size={14} style={{ display: 'inline', marginRight: '6px' }} />
                {grooming.preferences.sensitivity}
              </div>
            </div>

            <div style={{ padding: '12px 16px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-md)' }}>
              <span className="info-label">Preferred Shampoo</span>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', marginTop: '2px' }}>
                {grooming.preferences.shampoo}
              </div>
            </div>

            <div style={{ padding: '12px 16px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-md)' }}>
              <span className="info-label">Dryer Setting</span>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '2px' }}>
                {grooming.preferences.dryerSetting}
              </div>
            </div>

            <div style={{ padding: '12px 16px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-md)' }}>
              <span className="info-label">Behavior Notes</span>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                {grooming.preferences.behaviorNotes}
              </div>
            </div>
          </div>
        </div>

        {/* Before & After Interactive Showcase */}
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: '8px' }}>
            Before & After Transformation Gallery
          </h3>
          <p className="card-subtitle" style={{ marginBottom: '16px' }}>
            Results from Jessica Miller's previous styling appointments
          </p>

          <div className="before-after-container">
            <div
              className="before-after-box"
              style={{
                backgroundColor: 'var(--card-peach)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '8px',
                border: '1px solid #FFE4D3'
              }}
            >
              <Scissors size={32} color="var(--paw-brown)" />
              <div style={{ fontWeight: 800, color: 'var(--paw-brown)' }}>Fluffy & Overgrown</div>
              <span className="before-after-label">BEFORE SESSION</span>
            </div>

            <div
              className="before-after-box"
              style={{
                backgroundColor: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '8px',
                border: '1px solid #C5E9E7'
              }}
            >
              <Sparkles size={32} color="var(--primary)" />
              <div style={{ fontWeight: 800, color: 'var(--primary)' }}>Silky & Deshedded</div>
              <span className="before-after-label" style={{ backgroundColor: 'var(--primary)' }}>
                AFTER SPA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Specialist Packages */}
      <h3 className="card-title" style={{ marginBottom: '18px' }}>
        Specialist Grooming Packages
      </h3>

      <div className="grooming-packages-grid">
        {grooming.packages.map((pkg) => {
          const isSelected = selectedPkgId === pkg.id;

          return (
            <div
              key={pkg.id}
              className={`package-card ${isSelected ? 'highlighted' : ''}`}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {pkg.name}
                  </h4>
                  {pkg.highlighted && <span className="badge badge-coral">Most Popular</span>}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
                    {pkg.price}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ session ({pkg.time})</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem' }}>
                      <Check size={16} color="var(--primary)" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', marginTop: '24px' }}
                onClick={() => {
                  setSelectedPkgId(pkg.id);
                  onSelectPackage(pkg);
                }}
                id={`select-pkg-${pkg.id}`}
              >
                {isSelected ? 'Package Selected ✓' : 'Select Package'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
