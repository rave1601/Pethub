import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Plus,
  Clock,
  User,
  MapPin,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

// Helper to parse dates into { year, month, day }
const parseAppointmentDay = (dateStr) => {
  if (!dateStr) return null;
  if (typeof dateStr === 'string' && dateStr.includes('-')) {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return {
        year: parseInt(parts[0], 10),
        month: parseInt(parts[1], 10),
        day: parseInt(parts[2], 10)
      };
    }
  }
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    };
  }
  return null;
};

export const AppointmentsView = ({
  appointments,
  pastAppointments,
  onBookAppointment,
  activeSelectedDay = 15
}) => {
  const [selectedDay, setSelectedDay] = useState(activeSelectedDay);

  // Auto-switch to newly booked day if appointments change
  useEffect(() => {
    if (appointments && appointments.length > 0) {
      const latest = appointments[0];
      const parsed = parseAppointmentDay(latest.date);
      if (parsed && parsed.year === 2026 && parsed.month === 10) {
        setSelectedDay(parsed.day);
      }
    }
  }, [appointments]);

  const daysInMonth = 31;
  const startDayOffset = 4; // October 2026 starts on Thursday

  // Dynamically calculate which days in October 2026 have appointments
  const appointmentDaysSet = new Set();
  appointments.forEach((apt) => {
    const parsed = parseAppointmentDay(apt.date);
    if (parsed && parsed.year === 2026 && parsed.month === 10) {
      appointmentDaysSet.add(parsed.day);
    }
  });

  const appointmentDates = Array.from(appointmentDaysSet);

  // Get appointments for the currently selected day
  const appointmentsOnSelectedDay = appointments.filter((apt) => {
    const parsed = parseAppointmentDay(apt.date);
    return parsed && parsed.year === 2026 && parsed.month === 10 && parsed.day === selectedDay;
  });

  return (
    <div className="appointments-split">
      {/* 1. Left: Calendar Section */}
      <div className="card calendar-card">
        <div className="calendar-month-header">
          <div>
            <h3 className="card-title">October 2026</h3>
            <span className="card-subtitle">
              {appointments.length} Scheduled Pet Appointments This Month
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-secondary btn-icon" title="Previous Month">
              <ChevronLeft size={18} />
            </button>
            <button className="btn btn-secondary btn-icon" title="Next Month">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Days of Week Header */}
        <div className="calendar-grid" style={{ marginBottom: '8px' }}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <div key={d} className="calendar-day-header">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar Cells */}
        <div className="calendar-grid">
          {/* Empty cells before month start */}
          {Array.from({ length: startDayOffset }).map((_, i) => (
            <div key={`empty-${i}`} style={{ opacity: 0.2 }} />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const hasEvent = appointmentDaysSet.has(dayNum);
            const isSelected = selectedDay === dayNum;

            return (
              <div
                key={dayNum}
                className={`calendar-cell ${hasEvent ? 'has-event' : ''} ${
                  isSelected ? 'selected' : ''
                }`}
                onClick={() => setSelectedDay(dayNum)}
                id={`calendar-day-${dayNum}`}
              >
                <span>{dayNum}</span>
                {hasEvent && <span className="calendar-dot" />}
              </div>
            );
          })}
        </div>

        {/* Selected Date Details Card */}
        <div style={{ marginTop: '24px', padding: '18px', backgroundColor: 'var(--bg-warm)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CalendarCheck size={16} color="var(--primary)" />
              Events for October {selectedDay}, 2026
            </span>
            {appointmentDaysSet.has(selectedDay) && (
              <span className="badge badge-teal">
                {appointmentsOnSelectedDay.length} Appointment{appointmentsOnSelectedDay.length > 1 ? 's' : ''}
              </span>
            )}
          </div>

          {appointmentsOnSelectedDay.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {appointmentsOnSelectedDay.map((apt) => (
                <div
                  key={apt.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    backgroundColor: '#ffffff',
                    padding: '14px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--primary-light)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '0.96rem' }}>
                      {apt.service}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      {apt.time} • {apt.doctor} • {apt.room || 'Clinic Suite 2'}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600, marginTop: '4px' }}>
                      {apt.clinic} • <span style={{ color: 'var(--status-success)' }}>{apt.status || 'Confirmed'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                No appointments scheduled on Oct {selectedDay}.
              </span>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => onBookAppointment(`2026-10-${selectedDay < 10 ? '0' + selectedDay : selectedDay}`)}
              >
                + Book for Oct {selectedDay}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 2. Right: Direct Consultation & Past Visits Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Direct Consultation Card */}
        <div className="card card-peach" style={{ border: '1.5px solid #FFDDC7' }}>
          <h3 className="card-title" style={{ color: 'var(--paw-brown)' }}>
            <CalendarIcon size={20} color="var(--accent)" />
            Direct Consultation
          </h3>
          <p className="card-subtitle" style={{ color: 'var(--paw-brown-muted)', marginBottom: '18px' }}>
            Book quick online vet consultations, routine exams, or home grooming visits with one click.
          </p>
          <button
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => onBookAppointment()}
            id="book-new-appointment-btn"
          >
            <Plus size={18} />
            + Book New Appointment
          </button>
        </div>

        {/* Past Visits Timeline */}
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: '16px' }}>
            Past Visits History
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {pastAppointments.map((past) => (
              <div
                key={past.id}
                style={{
                  padding: '14px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--bg-warm)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {past.service}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {past.doctor} • {past.date}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--status-success)', fontWeight: 600, marginTop: '2px' }}>
                    <CheckCircle2 size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {past.outcome}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {past.cost}
                  </span>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Paid</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
