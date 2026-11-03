import React, { useState } from 'react';
import {
  PawPrint,
  Shield,
  FileText,
  Image as ImageIcon,
  Heart,
  QrCode,
  Sparkles,
  Download,
  AlertCircle,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { BuddyAvatar } from '../assets/illustrations';

export const PetProfileView = ({ pet, onOpenCertificate }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div>
      {/* 1. Hero Banner Card */}
      <div className="profile-hero-banner">
        <BuddyAvatar size={110} className="profile-hero-avatar" />

        <div className="profile-hero-details">
          <div className="profile-pet-name">
            {pet.name}
            <span className="badge badge-teal" style={{ fontSize: '0.82rem' }}>
              <Sparkles size={13} /> Purebred
            </span>
          </div>

          <p className="profile-pet-breed">
            {pet.breed} • {pet.gender}
          </p>

          <div className="profile-attribute-pills">
            <span className="attribute-pill">
              <QrCode size={14} color="var(--primary)" />
              Microchip: <strong>{pet.microchipId}</strong>
            </span>
            <span className="attribute-pill">
              Age: <strong>{pet.age}</strong>
            </span>
            <span className="attribute-pill">
              Weight: <strong>{pet.weight}</strong>
            </span>
            <span className="attribute-pill">
              Neutered: <strong>{pet.neutered}</strong>
            </span>
            <span className="attribute-pill" style={{ backgroundColor: 'var(--status-success-bg)', color: 'var(--status-success)', borderColor: '#C4EAD4' }}>
              <CheckCircle2 size={14} /> Vaccinated & Insured
            </span>
          </div>
        </div>

        <button
          className="btn btn-outline-primary"
          style={{ alignSelf: 'flex-start' }}
          onClick={onOpenCertificate}
        >
          <FileText size={16} /> Digital Passport
        </button>
      </div>

      {/* 2. Tab Navigation */}
      <div className="tab-nav-row">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'health', label: 'Health Details' },
          { id: 'documents', label: 'Documents & ID' },
          { id: 'gallery', label: 'Photo Gallery' }
        ].map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3. Tab Contents */}
      {activeTab === 'overview' && (
        <div className="profile-content-grid">
          {/* Basic Info Card */}
          <div className="card">
            <h3 className="card-title" style={{ marginBottom: '18px' }}>
              <PawPrint size={20} color="var(--primary)" />
              Basic Identification & Ownership
            </h3>

            <div className="info-list-grid">
              <div className="info-item">
                <span className="info-label">Date of Birth</span>
                <span className="info-value">{pet.dob}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Color & Coat</span>
                <span className="info-value">{pet.color}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Registered Owner</span>
                <span className="info-value">{pet.ownerName}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Primary Residence</span>
                <span className="info-value">West Hollywood, CA</span>
              </div>
              <div className="info-item">
                <span className="info-label">Emergency Contact</span>
                <span className="info-value">+1 (555) 782-9901</span>
              </div>
              <div className="info-item">
                <span className="info-label">Insurance Provider</span>
                <span className="info-value" style={{ color: 'var(--primary)' }}>Trupanion Pet Life (#TP-9921)</span>
              </div>
            </div>
          </div>

          {/* Personality & Diet Card */}
          <div className="card">
            <h3 className="card-title" style={{ marginBottom: '18px' }}>
              <Heart size={20} color="var(--accent)" />
              Personality, Habits & Dietary Needs
            </h3>

            <div className="info-list-grid">
              <div className="info-item">
                <span className="info-label">Energy Level</span>
                <span className="info-value" style={{ color: 'var(--primary)' }}>{pet.energyLevel}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Favorite Toy</span>
                <span className="info-value">{pet.favoriteToy}</span>
              </div>
              <div className="info-item" style={{ gridColumn: 'span 2' }}>
                <span className="info-label">Severe Allergies</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <span className="badge badge-coral">
                    <AlertCircle size={14} /> {pet.allergies}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Strict grain-free nutrition only
                  </span>
                </div>
              </div>
              <div className="info-item" style={{ gridColumn: 'span 2' }}>
                <span className="info-label">Favorite Routine</span>
                <span className="info-value" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                  Morning neighborhood strolls, afternoon backyard ball retrieve, gentle evening ear massages.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'health' && (
        <div className="profile-content-grid">
          <div className="card">
            <h3 className="card-title">Vitals & Biological Profile</h3>
            <div className="info-list-grid" style={{ marginTop: '16px' }}>
              <div className="info-item">
                <span className="info-label">Canine Blood Group</span>
                <span className="info-value">{pet.bloodGroup}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Resting Heart Rate</span>
                <span className="info-value">78 bpm (Normal)</span>
              </div>
              <div className="info-item">
                <span className="info-label">Body Condition Score</span>
                <span className="info-value">5 / 9 (Ideal)</span>
              </div>
              <div className="info-item">
                <span className="info-label">Dental Condition</span>
                <span className="info-value">Grade 1 (Minimal Tartar)</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Active Care Regime</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
              <div style={{ padding: '12px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-md)' }}>
                <strong>Prescription Diet:</strong> Acana Wild Atlantic Grain-Free + Bone Broth
              </div>
              <div style={{ padding: '12px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-md)' }}>
                <strong>Allergy Management:</strong> Apoquel 16mg tablet once daily with food
              </div>
              <div style={{ padding: '12px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-md)' }}>
                <strong>Joint Support:</strong> Glucosamine & Chondroitin chewable daily
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'documents' && (
        <div className="card">
          <h3 className="card-title">Official Medical & Identity Documents</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-lg)' }}>
              <div>
                <strong>Official Immunization Passport (PDF)</strong>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Signed by Dr. Emily Rose, DVM • Verified Seal</div>
              </div>
              <button className="btn btn-outline-primary btn-sm" onClick={onOpenCertificate}>
                <Download size={14} /> View Certificate
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px', background: 'var(--bg-warm)', borderRadius: 'var(--radius-lg)' }}>
              <div>
                <strong>Microchip Registration Deed (AKC Reunite)</strong>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tag: ID-29471928 • National Database Active</div>
              </div>
              <span className="badge badge-teal">Registered</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'gallery' && (
        <div className="card">
          <h3 className="card-title">Buddy's Moments & Photos</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '16px' }}>
            <div style={{ height: '180px', borderRadius: '16px', backgroundColor: 'var(--card-peach)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BuddyAvatar size={100} />
            </div>
            <div style={{ height: '180px', borderRadius: '16px', backgroundColor: '#EBF7F6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
              <ImageIcon size={32} color="var(--primary)" />
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--primary)' }}>Maplewood Park Walk</span>
            </div>
            <div style={{ height: '180px', borderRadius: '16px', backgroundColor: '#FFF2EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
              <ImageIcon size={32} color="var(--accent)" />
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--accent)' }}>Post-Spa Bath Day</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
