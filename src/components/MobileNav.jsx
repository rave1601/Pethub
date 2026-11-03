import React from 'react';
import { LayoutDashboard, PawPrint, Calendar, HeartPulse, AlertTriangle, LogIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

export const MobileNav = ({ activeRoute, setActiveRoute }) => {
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();

  const bottomItems = [
    { id: 'dashboard', label: t('nav.dashboard', 'Home'), icon: LayoutDashboard },
    { id: 'profile', label: t('nav.profile', 'Profile'), icon: PawPrint },
    { id: 'appointments', label: t('nav.appointments', 'Schedule'), icon: Calendar },
    { id: 'daily-care', label: t('nav.dailyCare', 'Care'), icon: HeartPulse },
    { id: 'emergency', label: 'SOS', icon: AlertTriangle, isSos: true },
  ];

  if (!isAuthenticated) {
    bottomItems[4] = { id: 'login', label: t('nav.login', 'Sign In'), icon: LogIn };
  }

  return (
    <nav className="mobile-bottom-bar">
      {bottomItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeRoute === item.id;

        return (
          <button
            key={item.id}
            type="button"
            className={`mobile-bottom-item ${isActive ? 'active' : ''}`}
            onClick={() => setActiveRoute(item.id)}
            style={{
              color: item.isSos
                ? 'var(--accent)'
                : isActive
                ? 'var(--primary)'
                : 'var(--text-muted)'
            }}
          >
            <Icon size={20} strokeWidth={item.isSos ? 2.6 : 2} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
