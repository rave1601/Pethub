import React from 'react';
import {
  Syringe,
  Download,
  Clock,
  Pill,
  CheckCircle2,
  AlertCircle,
  Plus
} from 'lucide-react';

export const VaccinationsView = ({
  vaccinations,
  medications,
  onOpenCertificate,
  onAddMedicine
}) => {
  return (
    <div>
      {/* 1. Header & Download PDF action */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div className="card-header">
          <div>
            <h3 className="card-title">
              <Syringe size={22} color="var(--primary)" />
              Vaccination Ledger & Immunization Tracker
            </h3>
            <p className="card-subtitle">
              Verified clinical records and booster schedule for Buddy (Microchip ID: ID-29471928)
            </p>
          </div>

          <button
            className="btn btn-primary"
            onClick={onOpenCertificate}
            id="download-cert-btn"
          >
            <Download size={16} />
            Download Vaccination Certificate (PDF)
          </button>
        </div>

        {/* Table of Vaccinations */}
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Vaccine / Immunization</th>
                <th>Administered Date</th>
                <th>Next Due Date</th>
                <th>Batch Number</th>
                <th>Attending Veterinarian</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {vaccinations.map((vac) => (
                <tr key={vac.id}>
                  <td>
                    <div style={{ fontWeight: 800, color: 'var(--text-main)' }}>{vac.name}</div>
                  </td>
                  <td>{vac.administered}</td>
                  <td>
                    <strong>{vac.nextDue}</strong>
                  </td>
                  <td>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {vac.batch}
                    </span>
                  </td>
                  <td>{vac.doctor}</td>
                  <td>
                    <span
                      className={`badge ${
                        vac.statusType === 'coral' ? 'badge-coral' : 'badge-teal'
                      }`}
                    >
                      {vac.statusType === 'coral' ? (
                        <AlertCircle size={12} />
                      ) : (
                        <CheckCircle2 size={12} />
                      )}
                      {vac.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Active Medications Section */}
      <div className="card">
        <div className="card-header">
          <div>
            <h3 className="card-title">
              <Pill size={22} color="var(--accent)" />
              Active Daily & Monthly Medications
            </h3>
            <p className="card-subtitle">
              Dosage instructions, inventory counters, and next administration alerts
            </p>
          </div>

          <button className="btn btn-outline-accent btn-sm" onClick={onAddMedicine}>
            <Plus size={16} /> Log Medicine Dose
          </button>
        </div>

        <div className="meds-grid" style={{ marginTop: '10px' }}>
          {medications.map((med) => (
            <div key={med.id} className="med-card">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <Pill size={24} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {med.name}
                  </h4>
                  <span className="badge badge-coral">{med.status}</span>
                </div>

                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--paw-brown)', marginTop: '2px' }}>
                  {med.purpose}
                </div>

                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
                  <strong>Dosage:</strong> {med.dosage}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '10px',
                    padding: '8px 12px',
                    backgroundColor: '#ffffff',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #FFE4D3',
                    fontSize: '0.82rem',
                    color: 'var(--accent)',
                    fontWeight: 700
                  }}
                >
                  <Clock size={14} />
                  {med.countdown} • {med.remaining}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
