import React from 'react';
import {
  Calendar,
  Syringe,
  Scissors,
  Activity,
  Plus,
  Clock,
  ChevronRight,
  Radio,
  TrendingUp,
  MapPin,
  Heart
} from 'lucide-react';
import { BuddyAvatar } from '../assets/illustrations';

export const DashboardView = ({
  pet,
  metrics,
  schedule,
  onBookAppointment,
  onAddMedicine,
  onNavigate
}) => {
  return (
    <div className="dashboard-grid">
      {/* 1. Top Welcome Card */}
      <div className="card welcome-hero-card">
        <div className="welcome-hero-left">
          <div className="hero-avatar-wrapper">
            <BuddyAvatar size={80} />
            <span className="hero-online-dot" title="Collar Online & Syncing" />
          </div>
          <div>
            <h2 className="welcome-greeting">Good Morning, Sarah! ❤️</h2>
            <p className="welcome-subtext">
              Buddy is active, healthy, and happy today. Everything is on schedule.
            </p>
          </div>
        </div>

        <div className="welcome-hero-actions">
          <button
            className="btn btn-primary"
            onClick={onBookAppointment}
            id="dash-book-appointment-btn"
          >
            <Calendar size={18} />
            Book Appointment
          </button>
          <button
            className="btn btn-outline-accent"
            onClick={onAddMedicine}
            id="dash-add-medicine-btn"
          >
            <Plus size={18} />
            Add Medicine Log
          </button>
        </div>
      </div>

      {/* 2. Quick Status Grid (4 Metric Cards) */}
      <div className="metrics-grid">
        {/* Next Vet Visit */}
        <div className="card metric-card" onClick={() => onNavigate('appointments')} style={{ cursor: 'pointer' }}>
          <div className="metric-icon-box" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
            <Calendar size={26} />
          </div>
          <div className="metric-info">
            <span className="metric-label">{metrics.nextVetVisit.label}</span>
            <span className="metric-value">{metrics.nextVetVisit.value}</span>
            <span className="metric-sub" style={{ color: 'var(--primary)' }}>
              {metrics.nextVetVisit.sub}
            </span>
          </div>
        </div>

        {/* Vaccination Due */}
        <div className="card metric-card" onClick={() => onNavigate('vaccinations')} style={{ cursor: 'pointer' }}>
          <div className="metric-icon-box" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
            <Syringe size={26} />
          </div>
          <div className="metric-info">
            <span className="metric-label">{metrics.vaccinationDue.label}</span>
            <span className="metric-value">{metrics.vaccinationDue.value}</span>
            <span className="metric-sub" style={{ color: 'var(--accent)' }}>
              {metrics.vaccinationDue.sub}
            </span>
          </div>
        </div>

        {/* Grooming Scheduled */}
        <div className="card metric-card" onClick={() => onNavigate('grooming')} style={{ cursor: 'pointer' }}>
          <div className="metric-icon-box" style={{ backgroundColor: 'var(--card-peach)', color: 'var(--paw-brown)' }}>
            <Scissors size={26} />
          </div>
          <div className="metric-info">
            <span className="metric-label">{metrics.groomingScheduled.label}</span>
            <span className="metric-value">{metrics.groomingScheduled.value}</span>
            <span className="metric-sub" style={{ color: 'var(--paw-brown)' }}>
              {metrics.groomingScheduled.sub}
            </span>
          </div>
        </div>

        {/* Buddy's Health Score Circular Indicator */}
        <div className="card metric-card" onClick={() => onNavigate('profile')} style={{ cursor: 'pointer' }}>
          <div className="circular-gauge-container">
            <svg className="circular-gauge-svg" viewBox="0 0 36 36">
              <path
                className="gauge-bg-circle"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="gauge-val-circle"
                strokeDasharray="92, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="gauge-text">92</span>
          </div>
          <div className="metric-info">
            <span className="metric-label">Health Score</span>
            <span className="metric-value" style={{ color: 'var(--primary)' }}>Excellent</span>
            <span className="metric-sub" style={{ color: 'var(--text-muted)' }}>Top 5% of Breed</span>
          </div>
        </div>
      </div>

      {/* 3. Buddy's Health Summary & Upcoming Schedule Widget */}
      <div className="dashboard-split">
        {/* Buddy's Health Summary */}
        <div className="card health-summary-box">
          <div className="card-header">
            <div>
              <h3 className="card-title">
                <Activity size={20} color="var(--primary)" />
                Buddy's Health & Wellness Summary
              </h3>
              <p className="card-subtitle">Real-time biometrics and vital indicators</p>
            </div>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => onNavigate('profile')}
            >
              Full Profile <ChevronRight size={14} />
            </button>
          </div>

          {/* Live Tracker Status */}
          <div
            style={{
              padding: '16px 20px',
              backgroundColor: 'var(--card-peach)',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid #FFE4D3'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)'
                }}
              >
                <Radio size={22} className="gps-pulse-dot" />
              </div>
              <div>
                <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  Collar Connection Active • GPS Live
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Battery 94% • In Safe Zone (Front Garden)
                </div>
              </div>
            </div>
            <span className="badge badge-teal">Live Synced</span>
          </div>

          {/* Weight Trend Visual Indicator */}
          <div className="weight-trend-container">
            <div>
              <span className="info-label">Weight Trend</span>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
                32 kg <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--status-success)' }}>(Stable)</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Target range: 30 - 34 kg
              </div>
            </div>

            <div className="weight-bars">
              {pet.weightHistory.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div
                    className={`weight-bar ${item.active ? 'active' : ''}`}
                    style={{ height: `${(item.weight / 35) * 44}px` }}
                    title={`${item.month}: ${item.weight}kg`}
                  />
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Care Chips */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '12px 16px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-lg)' }}>
              <span className="info-label">Allergies & Diet</span>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent)', marginTop: '2px' }}>
                Wheat Gluten (Strict Diet)
              </div>
            </div>
            <div style={{ padding: '12px 16px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-lg)' }}>
              <span className="info-label">Daily Medication</span>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary)', marginTop: '2px' }}>
                Apoquel 16mg (Given)
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Schedule Widget */}
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="card-title">
                <Clock size={20} color="var(--primary)" />
                Upcoming Schedule
              </h3>
              <p className="card-subtitle">Next appointments and health tasks</p>
            </div>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => onNavigate('appointments')}
            >
              View All
            </button>
          </div>

          <div className="schedule-list">
            {schedule.map((item) => (
              <div key={item.id} className="schedule-item">
                <div className="schedule-date-badge">
                  <span className="schedule-date-month">{item.month}</span>
                  <span className="schedule-date-day">{item.day}</span>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      {item.title}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    {item.subtitle} • {item.time}
                  </div>
                </div>

                <span
                  className={`badge ${
                    item.badge === 'Tomorrow' ? 'badge-coral' : 'badge-teal'
                  }`}
                >
                  {item.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Schedule Footer CTA */}
          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Need to reschedule or add a session?
            </span>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={onBookAppointment}
            >
              + Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
