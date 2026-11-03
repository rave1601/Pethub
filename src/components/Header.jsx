import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Menu, Check, LogIn, LogOut, User, Sparkles } from 'lucide-react';
import { SarahAvatar, BuddyAvatar, LunaAvatar } from '../assets/illustrations';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { LanguageSelector } from './LanguageSelector';

export const routeTitles = {
  'dashboard': 'Dashboard Overview',
  'profile': 'Pet Profile & Bio',
  'records': 'Clinical & Medical Records',
  'appointments': 'Appointments & Schedule',
  'vaccinations': 'Vaccinations & Medications',
  'hostel': 'Pet Hostels & Boarding Resorts',
  'daily-care': 'Daily Care & Activity Tracking',
  'grooming': 'Grooming & Spa Services',
  'services': 'Services Directory & Marketplace',
  'emergency': 'Emergency Center & SOS Beacon',
  'notifications': 'Alerts & Notifications',
  'login': 'Pet Parent Sign In'
};

export const Header = ({
  activeRoute,
  setActiveRoute,
  activePet,
  setActivePet,
  onOpenMobileMenu,
  searchQuery,
  setSearchQuery,
  unreadCount = 2
}) => {
  const { t } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const [isPetMenuOpen, setIsPetMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsPetMenuOpen(false);
      }
    };
    if (isPetMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPetMenuOpen]);

  const handleSignOut = () => {
    logout();
    setIsPetMenuOpen(false);
    setActiveRoute('login');
  };

  const currentTitle = t(`titles.${activeRoute}`, routeTitles[activeRoute] || 'Little Paws Pet Care Hub');

  return (
    <header className="top-header">
      {/* Left: Mobile trigger & dynamic title */}
      <div className="header-left">
        <button
          className="mobile-menu-trigger"
          onClick={onOpenMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <Menu size={20} />
        </button>
        <h2 className="header-title" id="page-title">
          {currentTitle}
        </h2>
      </div>

      {/* Center: Global Search Bar */}
      <div className="header-center">
        <div className="search-bar-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder={t('header.searchPlaceholder', 'Search clinic, doctors, hostels, services...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="global-search-input"
          />
          <span className="search-kbd-chip">⌘K</span>
        </div>
      </div>

      {/* Right: Language Selector, Notification Bell & Profile Chip */}
      <div className="header-right">
        {/* Multi-Language Selector Dropdown */}
        <LanguageSelector compact={false} />

        {/* Notifications Button */}
        <button
          className="notification-bell-btn"
          onClick={() => setActiveRoute('notifications')}
          title={t('header.notifications', 'View Notifications')}
          id="header-notification-btn"
        >
          <Bell size={19} />
          {unreadCount > 0 && <span className="notification-dot" />}
        </button>

        {/* User Profile Chip or Sign In button */}
        {isAuthenticated && user ? (
          <div style={{ position: 'relative' }} ref={menuRef}>
            <div
              className="user-profile-chip"
              onClick={() => setIsPetMenuOpen(!isPetMenuOpen)}
              id="user-profile-chip"
              title={t('header.accountSettings', 'Account & Pets')}
            >
              <div className="user-avatar-wrapper">
                {user.avatar === 'sarah' ? (
                  <SarahAvatar size={34} />
                ) : (
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: '50%',
                      background: 'var(--primary-light)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem'
                    }}
                  >
                    {user.initials || 'LP'}
                  </div>
                )}
                <span className="user-status-dot" />
              </div>
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-subtext">
                  {activePet.name}{t('header.momOf', "'s Mom")} ▾
                </span>
              </div>
            </div>

            {/* Quick Profile & Pet Switcher Dropdown */}
            {isPetMenuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '50px',
                  right: '0',
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-xl)',
                  padding: '14px',
                  width: '260px',
                  zIndex: 140,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  animation: 'slideUp 0.18s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Account Info Card */}
                <div
                  style={{
                    padding: '8px 10px',
                    backgroundColor: 'var(--bg-warm)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {user.name}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {user.email}
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      marginTop: '4px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      background: 'var(--primary-light)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {user.role || t('header.petParentRole', 'Pet Parent')}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    padding: '2px 8px'
                  }}
                >
                  {t('header.activePets', 'Active Pets')}
                </div>

                {/* Buddy Option */}
                <button
                  type="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: activePet.id === 'buddy-01' ? 'var(--card-peach)' : 'transparent',
                    textAlign: 'left',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setActivePet({ id: 'buddy-01', name: 'Buddy' });
                    setIsPetMenuOpen(false);
                  }}
                >
                  <BuddyAvatar size={28} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>Buddy</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Golden Retriever</div>
                  </div>
                  {activePet.id === 'buddy-01' && <Check size={16} color="var(--primary)" />}
                </button>

                {/* Luna Option */}
                <button
                  type="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: activePet.id === 'luna-02' ? 'var(--card-peach)' : 'transparent',
                    textAlign: 'left',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setActivePet({ id: 'luna-02', name: 'Luna' });
                    setIsPetMenuOpen(false);
                  }}
                >
                  <LunaAvatar size={28} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>Luna</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Calico Cat</div>
                  </div>
                  {activePet.id === 'luna-02' && <Check size={16} color="var(--primary)" />}
                </button>

                <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '4px 0' }} />

                {/* Sign Out Action */}
                <button
                  type="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--accent)',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                  onClick={handleSignOut}
                  id="btn-header-signout"
                >
                  <LogOut size={16} />
                  <span>{t('header.signOut', 'Sign Out')}</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Sign In Button if Logged Out */
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={() => setActiveRoute('login')}
            id="btn-header-signin"
          >
            <LogIn size={15} />
            <span>{t('header.signIn', 'Sign In')}</span>
          </button>
        )}
      </div>
    </header>
  );
};
