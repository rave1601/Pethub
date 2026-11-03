import React, { useState } from 'react';
import {
  Stethoscope,
  Scissors,
  Home,
  Award,
  Footprints,
  HeartHandshake,
  Car,
  ShoppingBag,
  Search,
  MapPin,
  ChevronRight,
  Filter
} from 'lucide-react';

const iconMap = {
  Stethoscope,
  Scissors,
  Home,
  Award,
  Footprints,
  HeartHandshake,
  Car,
  ShoppingBag
};

export const ServicesView = ({ services, onExploreService }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Los Angeles, CA');
  const [sortBy, setSortBy] = useState('Distance');

  const filteredServices = services.filter((srv) =>
    srv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    srv.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* 1. Search & Filter Bar */}
      <div className="card" style={{ marginBottom: '24px', padding: '18px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '16px', alignItems: 'center' }}>
          {/* Keyword Search */}
          <div className="search-bar-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search veterinary, salons, walkers, food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Location Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={18} color="var(--primary)" />
            <select
              className="form-select"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="Los Angeles, CA">Los Angeles, CA</option>
              <option value="West Hollywood, CA">West Hollywood, CA</option>
              <option value="Beverly Hills, CA">Beverly Hills, CA</option>
              <option value="Pasadena, CA">Pasadena, CA</option>
            </select>
          </div>

          {/* Sort Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Filter size={18} color="var(--paw-brown)" />
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Distance">Sort: Nearest Distance</option>
              <option value="Rating">Sort: Highest Rating</option>
              <option value="Popularity">Sort: Most Popular</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Service Category Grid (8 Categories) */}
      <div className="services-catalog-grid">
        {filteredServices.map((srv) => {
          const Icon = iconMap[srv.icon] || Stethoscope;

          return (
            <div key={srv.id} className="service-catalog-card">
              <div className="service-icon-wrapper">
                <Icon size={28} />
              </div>

              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
                {srv.title}
              </h4>

              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>
                {srv.providers}
              </span>

              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px', flex: 1 }}>
                {srv.description}
              </p>

              <button
                className="btn btn-outline-primary btn-sm"
                style={{ width: '100%' }}
                onClick={() => onExploreService(srv)}
                id={`explore-${srv.id}-btn`}
              >
                Explore <ChevronRight size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
