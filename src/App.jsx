import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MobileNav } from './components/MobileNav';
import { Modal } from './components/Modal';
import { Toast } from './components/Toast';

import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';

import {
  initialPetData,
  secondaryPets,
  dashboardMetrics,
  upcomingSchedule,
  medicalRecordsData,
  appointmentsData,
  pastAppointmentsData,
  vaccinationsData,
  activeMedicationsData,
  verifiedHostelsData,
  dailyCareData,
  groomingData,
  servicesDirectoryData,
  emergencyData,
  notificationsData
} from './data/mockData';

import { DashboardView } from './views/DashboardView';
import { PetProfileView } from './views/PetProfileView';
import { MedicalRecordsView } from './views/MedicalRecordsView';
import { AppointmentsView } from './views/AppointmentsView';
import { VaccinationsView } from './views/VaccinationsView';
import { HostelBookingView } from './views/HostelBookingView';
import { DailyCareView } from './views/DailyCareView';
import { GroomingView } from './views/GroomingView';
import { ServicesView } from './views/ServicesView';
import { EmergencyView } from './views/EmergencyView';
import { NotificationsView } from './views/NotificationsView';
import { LoginView } from './views/LoginView';

function AppContent() {
  const { t } = useLanguage();
  const { user, isAuthenticated } = useAuth();

  const [activeRoute, setActiveRoute] = useState('dashboard');
  const [activePet, setActivePet] = useState(initialPetData);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive App States
  const [records, setRecords] = useState(medicalRecordsData);
  const [appointments, setAppointments] = useState(appointmentsData);
  const [pastAppointments, setPastAppointments] = useState(pastAppointmentsData);
  const [schedule, setSchedule] = useState(upcomingSchedule);
  const [vaccinations, setVaccinations] = useState(vaccinationsData);
  const [medications, setMedications] = useState(activeMedicationsData);
  const [dailyCare, setDailyCare] = useState(dailyCareData);
  const [toasts, setToasts] = useState([
    {
      id: 'welcome-t',
      title: 'Welcome to Little Paws!',
      message: "Buddy's live collar signal is active and synchronized.",
      type: 'info'
    }
  ]);

  // Modal Control
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: null,
    data: null
  });

  const addToast = (title, message, type = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const openModal = (type, data = null) => {
    setModalConfig({ isOpen: true, type, data });
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, type: null, data: null });
  };

  // Handlers for interactive actions
  const handleBookAppointmentSubmit = (bookingData) => {
    const dateStr = bookingData.date || '2026-10-20';
    let displayDate = dateStr;
    let monthAbbr = 'OCT';
    let dayNum = '20';

    if (dateStr && dateStr.includes('-')) {
      const parts = dateStr.split('-');
      const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      displayDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      monthAbbr = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
      dayNum = parts[2].replace(/^0+/, '');
    }

    const newApt = {
      id: `apt-${Date.now()}`,
      date: dateStr,
      displayDate: displayDate,
      time: bookingData.time,
      doctor: bookingData.doctor,
      service: bookingData.service,
      clinic: 'Paws & Claws Animal Clinic',
      status: 'Upcoming',
      room: 'Exam Room 2'
    };
    setAppointments([newApt, ...appointments]);

    const newScheduleItem = {
      id: `sch-${Date.now()}`,
      month: monthAbbr,
      day: dayNum,
      time: bookingData.time,
      title: bookingData.service,
      subtitle: `${bookingData.doctor} • Paws & Claws Clinic`,
      type: 'vet',
      badge: 'Booked'
    };
    setSchedule([newScheduleItem, ...schedule]);

    addToast(
      'Appointment Confirmed! 🐾',
      `Booked with ${bookingData.doctor} for ${displayDate} at ${bookingData.time}. It is now pinned to your calendar!`
    );
  };

  const handleAddRecordSubmit = (recordData) => {
    const newRec = {
      id: `rec-${Date.now()}`,
      date: recordData.date,
      category: recordData.category,
      title: recordData.title,
      doctor: recordData.doctor,
      clinic: recordData.clinic,
      status: 'Completed',
      notes: recordData.notes
    };
    setRecords([newRec, ...records]);
    addToast(
      'Medical Record Added! 📋',
      `Clinical record for "${recordData.title}" was saved successfully.`
    );
  };

  const handleReserveHostelSubmit = (reservation) => {
    addToast(
      'Hostel Reservation Confirmed! 🏨',
      `Reserved at ${reservation.hostelName} from ${reservation.checkIn} to ${reservation.checkOut}.`
    );
  };

  const handleAddMedicineSubmit = () => {
    addToast(
      'Dose Recorded! 💊',
      'Apoquel 16mg marked as administered with breakfast.'
    );
  };

  const handleAddCareLog = () => {
    const newLog = {
      id: `care-${Date.now()}`,
      time: 'Just now',
      category: 'Health',
      title: 'Midday Vitality & Coat Check',
      loggedBy: `${user ? user.name : 'Sarah Jenkins'} (Parent)`,
      description: 'Checked skin around belly and paws. Coat looks clean, eyes bright and energetic.',
      stat: 'Optimal Condition • Vitals Stable'
    };
    setDailyCare({
      ...dailyCare,
      feed: [newLog, ...dailyCare.feed]
    });
    addToast('Care Event Logged! 🐾', 'Midday Vitality Check recorded to daily feed.');
  };

  return (
    <div className="app-container">
      {/* Sidebar (Left Column, ~260px) */}
      <Sidebar
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        appointmentCount={appointments.length}
      />

      {/* Main Area */}
      <div className="main-wrapper">
        {/* Top Header Bar */}
        <Header
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
          activePet={activePet}
          setActivePet={setActivePet}
          onOpenMobileMenu={() => setIsMobileOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Dynamic Route View */}
        <main className="content-area">
          {activeRoute === 'login' && (
            <LoginView
              onLoginSuccess={() => setActiveRoute('dashboard')}
              addToast={addToast}
            />
          )}

          {activeRoute === 'dashboard' && (
            <DashboardView
              pet={activePet}
              metrics={dashboardMetrics}
              schedule={schedule}
              onBookAppointment={() => openModal('book-appointment')}
              onAddMedicine={() => openModal('add-medicine')}
              onNavigate={setActiveRoute}
            />
          )}

          {activeRoute === 'profile' && (
            <PetProfileView
              pet={activePet}
              onOpenCertificate={() => openModal('certificate-preview')}
            />
          )}

          {activeRoute === 'records' && (
            <MedicalRecordsView
              records={records}
              onAddRecord={() => openModal('add-record')}
              onOpenCertificate={() => openModal('certificate-preview')}
            />
          )}

          {activeRoute === 'appointments' && (
            <AppointmentsView
              appointments={appointments}
              pastAppointments={pastAppointments}
              onBookAppointment={(date) =>
                openModal('book-appointment', { date: typeof date === 'string' ? date : undefined })
              }
            />
          )}

          {activeRoute === 'vaccinations' && (
            <VaccinationsView
              vaccinations={vaccinations}
              medications={medications}
              onOpenCertificate={() => openModal('certificate-preview')}
              onAddMedicine={() => openModal('add-medicine')}
            />
          )}

          {activeRoute === 'hostel' && (
            <HostelBookingView
              hostels={verifiedHostelsData}
              onReserveHostel={(hostel) => openModal('reserve-hostel', hostel)}
            />
          )}

          {activeRoute === 'daily-care' && (
            <DailyCareView
              dailyCare={dailyCare}
              onAddCareLog={handleAddCareLog}
            />
          )}

          {activeRoute === 'grooming' && (
            <GroomingView
              grooming={groomingData}
              onSelectPackage={(pkg) => {
                addToast(
                  'Package Selected! ✂️',
                  `Selected ${pkg.name} (${pkg.price}) for next grooming appointment.`
                );
              }}
              onBookGrooming={() => openModal('book-appointment')}
            />
          )}

          {activeRoute === 'services' && (
            <ServicesView
              services={servicesDirectoryData}
              onExploreService={(srv) => {
                addToast(
                  `Browsing ${srv.title}`,
                  `Showing top rated providers in Los Angeles area.`
                );
              }}
            />
          )}

          {activeRoute === 'emergency' && (
            <EmergencyView
              emergency={emergencyData}
              onTriggerSosCall={() => {
                addToast(
                  'Connecting to 24/7 ER Vet Hotline...',
                  'Dialing Metropolitan Trauma Dispatch at +1 (555) 911-PETS',
                  'danger'
                );
              }}
              onFindHospital={() => {
                addToast(
                  'Navigation Route Calculated 📍',
                  'Routing to Metropolitan Animal Trauma Center (1.8 miles, 4 mins).',
                  'info'
                );
              }}
            />
          )}

          {activeRoute === 'notifications' && (
            <NotificationsView
              notifications={notificationsData}
              onNavigate={setActiveRoute}
            />
          )}
        </main>
      </div>

      {/* Floating Bottom Pill Navigation for Mobile */}
      <MobileNav
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
      />

      {/* Universal Modal */}
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        type={modalConfig.type}
        data={modalConfig.data}
        onSubmit={(data) => {
          if (modalConfig.type === 'book-appointment') {
            handleBookAppointmentSubmit(data);
          } else if (modalConfig.type === 'add-record') {
            handleAddRecordSubmit(data);
          } else if (modalConfig.type === 'reserve-hostel') {
            handleReserveHostelSubmit(data);
          } else if (modalConfig.type === 'add-medicine') {
            handleAddMedicineSubmit();
          } else if (modalConfig.type === 'certificate-preview') {
            addToast('Certificate Downloaded 📄', 'Little Paws Official Vaccination PDF saved to device.');
          }
        }}
      />

      {/* Toast Feedback Alerts */}
      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
