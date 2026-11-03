import React from 'react';
import {
  LayoutDashboard,
  PawPrint,
  FileText,
  Calendar,
  Syringe,
  Home,
  HeartPulse,
  Scissors,
  Grid,
  AlertTriangle,
  LogIn,
  LogOut,
  UserCheck
} from 'lucide-react';
import { LeafDivider, SarahAvatar } from '../assets/illustrations';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

export const navItems = [
  { id: 'dashboard', translationKey: 'nav.dashboard', defaultLabel: 'Dashboard', icon: LayoutDashboard },
  { id: 'profile', translationKey: 'nav.profile', defaultLabel: 'Pet Profile', icon: PawPrint },
  { id: 'records', translationKey: 'nav.records', defaultLabel: 'Medical Records', icon: FileText },
  { id: 'appointments', translationKey: 'nav.appointments', defaultLabel: 'Appointments', icon: Calendar, badge: '3', badgeType: 'teal' },
  { id: 'vaccinations', translationKey: 'nav.vaccinations', defaultLabel: 'Vaccinations', icon: Syringe, badge: '3d', badgeType: 'accent' },
  { id: 'hostel', translationKey: 'nav.hostel', defaultLabel: 'Hostel Booking', icon: Home },
  { id: 'daily-care', translationKey: 'nav.dailyCare', defaultLabel: 'Daily Care', icon: HeartPulse },
  { id: 'grooming', translationKey: 'nav.grooming', defaultLabel: 'Grooming', icon: Scissors },
  { id: 'services', translationKey: 'nav.services', defaultLabel: 'Services', icon: Grid },
  { id: 'emergency', translationKey: 'nav.emergency', defaultLabel: 'Emergency', icon: AlertTriangle, isEmergency: true, badge: 'SOS' },
];

export const Sidebar = ({ activeRoute, setActiveRoute, isMobileOpen, setIsMobileOpen, appointmentCount = 3 }) => {
  const { t } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <>
      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-overlay ${isMobileOpen ? 'open' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      />

      <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
        {/* Brand Header */}
        <div className="sidebar-brand-wrapper">
          <img
            src="/logo.png"
            alt="Little Paws Logo"
            className="sidebar-logo brand-logo-round"
            style={{ borderRadius: '50%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <h1 className="sidebar-brand-title">Little Paws</h1>
          <p className="sidebar-brand-subtext">PET CARE HUB • ESTD 2026</p>
        </div>

        {/* Leaf Icon Divider */}
        <LeafDivider />

        {/* Navigation Menu Items */}
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeRoute === item.id;
            const label = t(item.translationKey, item.defaultLabel);

            if (item.isEmergency) {
              return (
                <button
                  key={item.id}
                  className={`nav-item nav-item-emergency ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveRoute(item.id);
                    setIsMobileOpen(false);
                  }}
                  id={`nav-${item.id}`}
                >
                  <span className="nav-icon">
                    <Icon size={18} strokeWidth={2.4} />
                  </span>
                  <span className="nav-label">{label}</span>
                  <span className="nav-badge nav-badge-sos">{item.badge}</span>
                </button>
              );
            }

            return (
              <button
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveRoute(item.id);
                  setIsMobileOpen(false);
                }}
                id={`nav-${item.id}`}
              >
                <span className="nav-icon">
                  <Icon size={18} strokeWidth={2.2} />
                </span>
                <span className="nav-label">{label}</span>

                {item.id === 'appointments' ? (
                  <span className="nav-badge nav-badge-teal">{appointmentCount}</span>
                ) : item.badge ? (
                  <span
                    className={`nav-badge ${
                      item.badgeType === 'accent' ? 'nav-badge-accent' : 'nav-badge-teal'
                    }`}
                  >
                    {item.badge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer User / Auth Widget */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          {isAuthenticated && user ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 10px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-warm)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ flexShrink: 0 }}>
                {user.avatar === 'sarah' ? (
                  <SarahAvatar size={32} />
                ) : (
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.78rem'
                    }}
                  >
                    {user.initials || 'LP'}
                  </div>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {user.name}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 600 }}>
                  {user.petName}’s Parent
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  logout();
                  setActiveRoute('login');
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '4px'
                }}
                title={t('nav.logout', 'Sign Out')}
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              className={`nav-item ${activeRoute === 'login' ? 'active' : ''}`}
              onClick={() => {
                setActiveRoute('login');
                setIsMobileOpen(false);
              }}
              id="sidebar-nav-login"
            >
              <span className="nav-icon">
                <LogIn size={18} />
              </span>
              <span className="nav-label">{t('nav.login', 'Sign In')}</span>
            </button>
          )}
        </div>
      </aside>
    </>
  );
};
