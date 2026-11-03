import React, { useState } from 'react';
import {
  Bell,
  Clock,
  CheckCircle2,
  Syringe,
  Scissors,
  BatteryCharging,
  FileText,
  Footprints,
  Pill,
  ChevronRight
} from 'lucide-react';

export const NotificationsView = ({ notifications, onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState('All Alerts');

  const filteredNotifications = notifications.filter((item) => {
    if (selectedFilter === 'All Alerts') return true;
    return item.category === selectedFilter;
  });

  const todayList = filteredNotifications.filter((i) => i.group === 'Today');
  const yesterdayList = filteredNotifications.filter((i) => i.group === 'Yesterday');

  const getActionRoute = (action) => {
    if (action.includes('Vaccination')) return 'vaccinations';
    if (action.includes('Booking') || action.includes('Grooming')) return 'grooming';
    if (action.includes('Report') || action.includes('Medical')) return 'records';
    if (action.includes('Daily Care') || action.includes('Walk')) return 'daily-care';
    if (action.includes('Meds')) return 'vaccinations';
    return 'dashboard';
  };

  return (
    <div>
      {/* 1. Category Filters */}
      <div className="filter-pills-row">
        {['All Alerts', 'Health', 'Appointments', 'Reminders', 'Updates'].map((filter) => (
          <button
            key={filter}
            className={`filter-pill ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 2. Notification List Grouped by Time */}
      <div className="notifications-list">
        {todayList.length > 0 && (
          <div>
            <h4 className="notification-group-title">TODAY</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {todayList.map((item) => (
                <div
                  key={item.id}
                  className={`notification-row ${item.unread ? 'unread' : ''}`}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: item.unread ? 'var(--primary-light)' : 'var(--bg-warm)',
                      color: item.unread ? 'var(--primary)' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Bell size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--text-main)' }}>
                        {item.title}
                        {item.unread && (
                          <span className="badge badge-coral" style={{ marginLeft: '8px', fontSize: '0.72rem' }}>
                            New
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {item.time}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      {item.message}
                    </p>
                  </div>

                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onNavigate(getActionRoute(item.action))}
                  >
                    {item.action} <ChevronRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {yesterdayList.length > 0 && (
          <div style={{ marginTop: '14px' }}>
            <h4 className="notification-group-title">YESTERDAY</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {yesterdayList.map((item) => (
                <div
                  key={item.id}
                  className={`notification-row ${item.unread ? 'unread' : ''}`}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-warm)',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={20} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {item.title}
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {item.time}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      {item.message}
                    </p>
                  </div>

                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onNavigate(getActionRoute(item.action))}
                  >
                    {item.action} <ChevronRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
