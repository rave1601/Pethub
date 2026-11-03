import React, { useState } from 'react';
import {
  Footprints,
  Utensils,
  Droplets,
  Smile,
  Clock,
  User,
  MapPin,
  Compass,
  Plus
} from 'lucide-react';

export const DailyCareView = ({ dailyCare, onAddCareLog }) => {
  const [selectedFilter, setSelectedFilter] = useState('All Activity');

  const filteredFeed = dailyCare.feed.filter((item) => {
    if (selectedFilter === 'All Activity') return true;
    return item.category === selectedFilter;
  });

  return (
    <div>
      {/* 1. Top Tracker Widgets (4 Metric Cards) */}
      <div className="daily-tracker-grid">
        {/* Steps Today */}
        <div className="card metric-card">
          <div className="metric-icon-box" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
            <Footprints size={26} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Steps Today</span>
            <span className="metric-value">{dailyCare.stats.steps}</span>
            <span className="metric-sub" style={{ color: 'var(--primary)' }}>
              Goal: {dailyCare.stats.stepsTarget}
            </span>
          </div>
        </div>

        {/* Meals Logged */}
        <div className="card metric-card">
          <div className="metric-icon-box" style={{ backgroundColor: 'var(--card-peach)', color: 'var(--paw-brown)' }}>
            <Utensils size={26} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Meals Logged</span>
            <span className="metric-value">{dailyCare.stats.meals}</span>
            <span className="metric-sub" style={{ color: 'var(--paw-brown)' }}>
              {dailyCare.stats.mealsSub}
            </span>
          </div>
        </div>

        {/* Water Intake */}
        <div className="card metric-card">
          <div className="metric-icon-box" style={{ backgroundColor: '#E0F2FE', color: '#0284C7' }}>
            <Droplets size={26} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Water Intake</span>
            <span className="metric-value">{dailyCare.stats.water}</span>
            <span className="metric-sub" style={{ color: '#0284C7' }}>
              {dailyCare.stats.waterSub}
            </span>
          </div>
        </div>

        {/* Mood */}
        <div className="card metric-card">
          <div className="metric-icon-box" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
            <Smile size={26} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Mood Today</span>
            <span className="metric-value">{dailyCare.stats.mood}</span>
            <span className="metric-sub" style={{ color: 'var(--accent)' }}>
              {dailyCare.stats.moodSub}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Filter Pills & Sitter Feed Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '18px' }}>
        <div className="filter-pills-row" style={{ margin: 0, padding: 0 }}>
          {['All Activity', 'Meals', 'Walks', 'Playtime', 'Health'].map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <button className="btn btn-primary" onClick={onAddCareLog} id="add-care-log-btn">
          <Plus size={18} />
          Log Care Event
        </button>
      </div>

      {/* 3. Care Feed */}
      <div className="care-feed">
        {filteredFeed.map((item) => (
          <div key={item.id} className="care-post">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-xl)',
                backgroundColor:
                  item.category === 'Walks'
                    ? 'var(--primary-light)'
                    : item.category === 'Meals'
                    ? 'var(--card-peach)'
                    : 'var(--accent-light)',
                color:
                  item.category === 'Walks'
                    ? 'var(--primary)'
                    : item.category === 'Meals'
                    ? 'var(--paw-brown)'
                    : 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              {item.category === 'Walks' ? (
                <Footprints size={24} />
              ) : item.category === 'Meals' ? (
                <Utensils size={24} />
              ) : (
                <Smile size={24} />
              )}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    {item.time} • {item.category}
                  </span>
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
                    {item.title}
                  </h4>
                </div>
                <span className="badge badge-teal">{item.loggedBy}</span>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: 1.5 }}>
                {item.description}
              </p>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '10px', padding: '6px 12px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-md)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)' }}>
                {item.stat}
              </div>

              {/* Live route map preview for walks */}
              {item.category === 'Walks' && (
                <div className="care-route-preview">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                    <Compass size={20} />
                    GPS Leash Route Verified • Maplewood Park Loop (2.4 km)
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
