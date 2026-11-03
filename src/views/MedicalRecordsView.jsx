import React, { useState } from 'react';
import {
  FileText,
  Plus,
  Stethoscope,
  Syringe,
  Microscope,
  CheckCircle2,
  Calendar,
  Download
} from 'lucide-react';

export const MedicalRecordsView = ({ records, onAddRecord, onOpenCertificate }) => {
  const [selectedFilter, setSelectedFilter] = useState('All Records');

  const filteredRecords = records.filter((rec) => {
    if (selectedFilter === 'All Records') return true;
    return rec.category === selectedFilter;
  });

  return (
    <div>
      {/* 1. Summary Stat Cards */}
      <div className="stats-triplet">
        <div className="card metric-card">
          <div className="metric-icon-box" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>
            <FileText size={26} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Total Clinic Visits</span>
            <span className="metric-value">24 Visits</span>
            <span className="metric-sub" style={{ color: 'var(--primary)' }}>Complete Lifetime Log</span>
          </div>
        </div>

        <div className="card metric-card">
          <div className="metric-icon-box" style={{ backgroundColor: 'var(--bg-warm)', color: 'var(--paw-brown)' }}>
            <Calendar size={26} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Last Routine Checkup</span>
            <span className="metric-value">Sept 12, 2026</span>
            <span className="metric-sub" style={{ color: 'var(--text-muted)' }}>Dr. Emily Rose, DVM</span>
          </div>
        </div>

        <div className="card metric-card">
          <div className="metric-icon-box" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
            <Stethoscope size={26} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Next Checkup Scheduled</span>
            <span className="metric-value" style={{ color: 'var(--accent)' }}>Oct 15, 2026</span>
            <span className="metric-sub" style={{ color: 'var(--accent)' }}>Confirmed in 3 Days</span>
          </div>
        </div>
      </div>

      {/* 2. Filter Pills and Action Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '18px' }}>
        <div className="filter-pills-row" style={{ margin: 0, padding: 0 }}>
          {['All Records', 'Routine Checkup', 'Vaccination', 'Surgery & Lab'].map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-outline-primary" onClick={onOpenCertificate}>
            <Download size={16} /> Export Records
          </button>
          <button className="btn btn-primary" onClick={onAddRecord} id="add-record-btn">
            <Plus size={18} />
            + Add New Record
          </button>
        </div>
      </div>

      {/* 3. Timeline Feed */}
      <div className="timeline-feed">
        {filteredRecords.map((rec) => {
          const isCheckup = rec.category === 'Routine Checkup';
          const isVaccine = rec.category === 'Vaccination';

          return (
            <div key={rec.id} className="timeline-entry">
              <div
                className="timeline-icon-box"
                style={{
                  backgroundColor: isCheckup
                    ? 'var(--primary-light)'
                    : isVaccine
                    ? 'var(--card-peach)'
                    : '#E8E5F7',
                  color: isCheckup
                    ? 'var(--primary)'
                    : isVaccine
                    ? 'var(--accent)'
                    : '#6C5CE7'
                }}
              >
                {isCheckup ? (
                  <Stethoscope size={22} />
                ) : isVaccine ? (
                  <Syringe size={22} />
                ) : (
                  <Microscope size={22} />
                )}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                      {rec.date} • {rec.category}
                    </span>
                    <h4 className="timeline-title">{rec.title}</h4>
                  </div>
                  <span className="badge badge-teal">
                    <CheckCircle2 size={13} /> {rec.status}
                  </span>
                </div>

                <div className="timeline-doctor">
                  {rec.doctor} — <span style={{ color: 'var(--text-secondary)' }}>{rec.clinic}</span>
                </div>

                <div className="timeline-notes">
                  {rec.notes}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
