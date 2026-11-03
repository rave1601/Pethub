import React from 'react';
import { X, Award, ShieldCheck, Download, Calendar, CheckCircle2 } from 'lucide-react';

export const Modal = ({ isOpen, onClose, type, data, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {/* 1. Book Appointment Modal */}
        {type === 'book-appointment' && (
          <div>
            <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
              Book Veterinary Consultation
            </h3>
            <p className="card-subtitle" style={{ marginBottom: '20px' }}>
              Schedule a clinic visit or routine checkup with Little Paws certified practitioners.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                onSubmit({
                  doctor: formData.get('doctor'),
                  service: formData.get('service'),
                  date: formData.get('date'),
                  time: formData.get('time'),
                  notes: formData.get('notes'),
                });
                onClose();
              }}
            >
              <div className="form-group">
                <label className="form-label">Veterinary Specialist / Clinic</label>
                <select name="doctor" className="form-select" defaultValue="Dr. Emily Rose, DVM">
                  <option value="Dr. Emily Rose, DVM">Dr. Emily Rose, DVM (Paws & Claws Clinic)</option>
                  <option value="Dr. Michael Chen, BVSc">Dr. Michael Chen, BVSc (City Pet Hospital)</option>
                  <option value="Dr. Lisa Wang, Dental DVM">Dr. Lisa Wang, Dental DVM (Oral Care Center)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Consultation Reason / Service</label>
                <select name="service" className="form-select" defaultValue="Comprehensive Wellness Exam">
                  <option value="Comprehensive Wellness Exam">Comprehensive Wellness Exam</option>
                  <option value="Vaccination Booster Dose">Vaccination Booster Dose</option>
                  <option value="Skin Allergy Follow-Up">Skin Allergy Follow-Up</option>
                  <option value="Dental Cleaning & Scale">Dental Cleaning & Scale</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input type="date" name="date" className="form-input" defaultValue={data?.date || "2026-10-20"} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Time Slot</label>
                  <select name="time" className="form-select" defaultValue="10:00 AM">
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Notes for Doctor (Symptoms or Diet)</label>
                <textarea
                  name="notes"
                  className="form-textarea"
                  rows="2"
                  placeholder="e.g. Mild ear itching noticed yesterday..."
                  defaultValue="Routine bi-annual wellness exam and review of seasonal diet."
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" id="confirm-booking-btn">
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 2. Add Medical Record Modal */}
        {type === 'add-record' && (
          <div>
            <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
              Add Medical Record
            </h3>
            <p className="card-subtitle" style={{ marginBottom: '20px' }}>
              Log clinical exam findings, vaccination history, or surgical notes for Buddy.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                onSubmit({
                  category: formData.get('category'),
                  title: formData.get('title'),
                  doctor: formData.get('doctor'),
                  clinic: formData.get('clinic'),
                  notes: formData.get('notes'),
                  date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                });
                onClose();
              }}
            >
              <div className="form-group">
                <label className="form-label">Category</label>
                <select name="category" className="form-select" defaultValue="Routine Checkup">
                  <option value="Routine Checkup">Routine Checkup</option>
                  <option value="Vaccination">Vaccination</option>
                  <option value="Surgery & Lab">Surgery & Lab</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Record Title / Procedure</label>
                <input
                  type="text"
                  name="title"
                  className="form-input"
                  placeholder="e.g. Ear Canal Cytology & Cleansing"
                  defaultValue="Follow-up Wellness Inspection"
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Attending Veterinarian</label>
                  <input
                    type="text"
                    name="doctor"
                    className="form-input"
                    defaultValue="Dr. Emily Rose, DVM"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Clinic / Hospital</label>
                  <input
                    type="text"
                    name="clinic"
                    className="form-input"
                    defaultValue="Paws & Claws Animal Clinic"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Clinical Observations & Rx Notes</label>
                <textarea
                  name="notes"
                  className="form-textarea"
                  rows="3"
                  defaultValue="Ear canals clean, tympanic membranes intact. No secondary yeast flare. Maintained on current hypoallergenic diet."
                  required
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" id="save-record-btn">
                  Save Record
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 3. Official Vaccination Certificate (PDF Simulation) */}
        {type === 'certificate-preview' && (
          <div>
            <div
              style={{
                backgroundColor: '#FAF6F0',
                border: '2px solid #2A8B88',
                borderRadius: '16px',
                padding: '24px',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid #EFE8DE', paddingBottom: '14px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src="/logo.png" alt="Little Paws" style={{ width: '48px', height: '48px' }} />
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', fontSize: '1.2rem', margin: 0 }}>
                      LITTLE PAWS PET CARE HUB
                    </h4>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--paw-brown)', letterSpacing: '0.1em' }}>
                      OFFICIAL IMMUNIZATION CERTIFICATE
                    </span>
                  </div>
                </div>
                <ShieldCheck size={36} color="#2A8B88" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85rem', marginBottom: '18px' }}>
                <div><strong>Patient Name:</strong> Buddy</div>
                <div><strong>Species/Breed:</strong> Canine • Golden Retriever</div>
                <div><strong>Microchip ID:</strong> ID-29471928</div>
                <div><strong>Registered Owner:</strong> Sarah Jenkins</div>
                <div><strong>Primary Clinic:</strong> Paws & Claws DVM Clinic</div>
                <div><strong>License ID:</strong> CA-VET-883921</div>
              </div>

              <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '12px', border: '1px solid #EFE8DE', marginBottom: '16px' }}>
                <table style={{ width: '100%', fontSize: '0.8rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ color: 'var(--text-muted)', borderBottom: '1px solid #eee' }}>
                      <th style={{ padding: '4px' }}>Vaccine</th>
                      <th style={{ padding: '4px' }}>Date Given</th>
                      <th style={{ padding: '4px' }}>Valid Until</th>
                      <th style={{ padding: '4px' }}>Batch</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '6px 4px', fontWeight: 700 }}>Rabies 1-Year</td>
                      <td style={{ padding: '6px 4px' }}>Aug 12, 2026</td>
                      <td style={{ padding: '6px 4px' }}>Oct 18, 2026</td>
                      <td style={{ padding: '6px 4px' }}>RB-9921</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px 4px', fontWeight: 700 }}>DHPP Core</td>
                      <td style={{ padding: '6px 4px' }}>Jul 10, 2026</td>
                      <td style={{ padding: '6px 4px' }}>Jul 10, 2027</td>
                      <td style={{ padding: '6px 4px' }}>DH-4412</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '6px 4px', fontWeight: 700 }}>Bordetella</td>
                      <td style={{ padding: '6px 4px' }}>Jul 04, 2026</td>
                      <td style={{ padding: '6px 4px' }}>Jan 04, 2027</td>
                      <td style={{ padding: '6px 4px' }}>BB-1029</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <div>Verified Digital Seal • Little Paws Health Net</div>
                <div style={{ fontStyle: 'italic' }}>Dr. Emily Rose, DVM (Signed)</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '20px' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  if (onSubmit) onSubmit();
                  onClose();
                }}
              >
                <Download size={16} /> Download Official PDF
              </button>
            </div>
          </div>
        )}

        {/* 4. Reserve Hostel Modal */}
        {type === 'reserve-hostel' && (
          <div>
            <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
              Reserve Pet Hostel Suite
            </h3>
            <p className="card-subtitle" style={{ marginBottom: '20px' }}>
              Booking at: <strong>{data?.name || 'Bark & Brush Resort'}</strong> (${data?.price || '$45'}/night)
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                onSubmit({
                  hostelName: data?.name || 'Bark & Brush Resort',
                  checkIn: formData.get('checkIn'),
                  checkOut: formData.get('checkOut'),
                  roomType: formData.get('roomType'),
                  specialCare: formData.get('specialCare'),
                });
                onClose();
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Check-In Date</label>
                  <input type="date" name="checkIn" className="form-input" defaultValue="2026-10-24" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Check-Out Date</label>
                  <input type="date" name="checkOut" className="form-input" defaultValue="2026-10-27" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Room Type</label>
                <select name="roomType" className="form-select" defaultValue="Luxury Studio Suite">
                  <option value="Luxury Studio Suite">Luxury Studio Suite (Cage-Free + HD Webcam)</option>
                  <option value="Deluxe Garden Cabana">Deluxe Garden Cabana (Private Lawn Access)</option>
                  <option value="Cozy Snuggle Suite">Cozy Snuggle Suite (Indoor Climate Controlled)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Dietary & Behavioral Instructions</label>
                <textarea
                  name="specialCare"
                  className="form-textarea"
                  rows="2"
                  defaultValue="Buddy requires gluten-free food (provided). Loves afternoon ball play!"
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" id="confirm-hostel-btn">
                  Confirm Reservation ($135 Total)
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 5. Add Medicine Log */}
        {type === 'add-medicine' && (
          <div>
            <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
              Record Medicine Administration
            </h3>
            <p className="card-subtitle" style={{ marginBottom: '20px' }}>
              Log dose details for Buddy's daily allergy and preventive medications.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit({
                  medicine: 'Apoquel 16mg',
                  time: 'Just now',
                  notes: 'Dose administered with breakfast meal.'
                });
                onClose();
              }}
            >
              <div className="form-group">
                <label className="form-label">Medication Name</label>
                <input type="text" className="form-input" defaultValue="Apoquel 16mg (Allergy Control)" readOnly />
              </div>

              <div className="form-group">
                <label className="form-label">Dosage Given</label>
                <input type="text" className="form-input" defaultValue="1 Tablet with Food" readOnly />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <CheckCircle2 size={16} /> Mark as Given
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
