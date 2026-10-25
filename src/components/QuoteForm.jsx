import React, { useState, useEffect } from 'react';
import { 
  User, Phone, Mail, Calendar, MapPin, Navigation, 
  Truck, Clipboard, MessageSquare, CheckCircle, Crosshair, 
  Warehouse, Shield, Info, ArrowRight 
} from 'lucide-react';

export default function QuoteForm({ 
  prefilledService = 'Household Shifting', 
  prefilledMessage = '', 
  onOpenMapModal 
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    service: prefilledService,
    moveFrom: '',
    moveTo: '',
    storageDuration: '1-3 Months',
    message: prefilledMessage
  });

  const [errors, setErrors] = useState({});
  const [isDetectingGPS, setIsDetectingGPS] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);

  // Sync props changes
  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledMessage) {
      setFormData(prev => ({ ...prev, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  // Set today's date as default
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, date: today }));
  }, []);

  const isWarehousing = formData.service === 'Warehouse & Storage';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleAutoDetectGPS = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setIsDetectingGPS(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`, {
            headers: { 'Accept': 'application/json' }
          });
          const data = await res.json();
          const address = data.display_name || `Near GPS (${latitude.toFixed(4)}, ${longitude.toFixed(4)}), Bengaluru`;
          setFormData(prev => ({ ...prev, moveFrom: address }));
        } catch {
          setFormData(prev => ({ ...prev, moveFrom: `Current Coordinates (${latitude.toFixed(4)}, ${longitude.toFixed(4)}), Bengaluru` }));
        } finally {
          setIsDetectingGPS(false);
        }
      },
      (err) => {
        console.warn('GPS detection failed:', err);
        alert('Could not detect GPS coordinates. Please type your location or use the "Pick on Map" button.');
        setIsDetectingGPS(false);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.phone.trim() || formData.phone.trim().length < 9) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.date) errs.date = 'Please pick a moving date.';
    if (!formData.moveFrom.trim()) {
      errs.moveFrom = isWarehousing ? 'Please provide your pickup location for storage.' : 'Please provide pickup location.';
    }
    if (!isWarehousing && !formData.moveTo.trim()) {
      errs.moveTo = 'Please provide destination location.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build Clean, Unicode-Safe WhatsApp Message without broken characters or misaligned asterisks
    const lines = [
      '*NEW RELOCATION INQUIRY - KGF EXPRESS*',
      '────────────────────────',
      `*Full Name:* ${formData.name.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      `*Email:* ${formData.email.trim()}`,
      `*Service Required:* ${formData.service}`,
      isWarehousing 
        ? `*Pickup Location (For Storage):* ${formData.moveFrom.trim()}`
        : `*Moving From (Origin):* ${formData.moveFrom.trim()}`,
      ...(isWarehousing 
        ? [`*Storage Duration:* ${formData.storageDuration}`] 
        : [`*Moving To (Destination):* ${formData.moveTo.trim()}`]),
      `*Target Move Date:* ${formData.date}`,
      formData.message.trim() ? `*Inventory Details:* ${formData.message.trim()}` : '*Inventory:* Standard Relocation',
      '────────────────────────',
      '*Hub:* Doddathogur Rd, Electronic City, Bengaluru',
      '*Google Rating:* 4.8 Stars (Verified Mover)',
      'Please reply with transparent quotation and schedule!'
    ];

    const messageText = lines.join('\n');
    const waUrl = `https://wa.me/917338582679?text=${encodeURIComponent(messageText)}`;

    setSubmittedMessage({ text: messageText, url: waUrl });
    window.open(waUrl, '_blank');
  };

  return (
    <section className="quote-section" id="quote-section">
      <div className="container">
        <div className="quote-wrapper-card">
          <div className="quote-head-block">
            <span className="kicker-tag mono">BOOKING REQUEST</span>
            <h2>Tell us about your move.</h2>
            <p>
              Share a few details and our dispatch team will confirm your move on WhatsApp: <strong>+91 73385 82679</strong>.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid-layout">
              {/* Full Name */}
              <div className="form-field-group">
                <label className="form-field-label" htmlFor="name">
                  <span className="field-label-text"><User size={15} style={{ color: 'var(--accent)' }} /> Full Name <span className="req-star">*</span></span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="e.g. Adarsh" 
                  className="text-input-field" 
                  autoComplete="name"
                />
                <span className="field-error-msg">{errors.name}</span>
              </div>

              {/* Phone */}
              <div className="form-field-group">
                <label className="form-field-label" htmlFor="phone">
                  <span className="field-label-text"><Phone size={15} style={{ color: 'var(--accent)' }} /> WhatsApp Phone Number <span className="req-star">*</span></span>
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="e.g. 73385 82679" 
                  className="text-input-field" 
                  autoComplete="tel"
                />
                <span className="field-error-msg">{errors.phone}</span>
              </div>

              {/* Email */}
              <div className="form-field-group">
                <label className="form-field-label" htmlFor="email">
                  <span className="field-label-text"><Mail size={15} style={{ color: 'var(--accent)' }} /> Email Address <span className="req-star">*</span></span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="e.g. adarsh@example.com" 
                  className="text-input-field" 
                  autoComplete="email"
                />
                <span className="field-error-msg">{errors.email}</span>
              </div>

              {/* Moving Date */}
              <div className="form-field-group">
                <label className="form-field-label" htmlFor="date">
                  <span className="field-label-text"><Calendar size={15} style={{ color: 'var(--accent)' }} /> Preferred Date <span className="req-star">*</span></span>
                </label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  className="text-input-field" 
                  min={new Date().toISOString().split('T')[0]}
                />
                <span className="field-error-msg">{errors.date}</span>
              </div>

              {/* Service Selection */}
              <div className="form-field-group col-full">
                <label className="form-field-label" htmlFor="service">
                  <span className="field-label-text"><Truck size={15} style={{ color: 'var(--accent)' }} /> Relocation Service <span className="req-star">*</span></span>
                </label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange} 
                  className="text-input-field select-field"
                >
                  <option value="Household Shifting">Household Shifting (1BHK / 2BHK / 3BHK / Villa)</option>
                  <option value="Office Relocation">Office Relocation &amp; IT Equipment</option>
                  <option value="Car Transportation">Car Transportation (Enclosed Carrier)</option>
                  <option value="Bike Transportation">Bike Transportation (Wooden Crate)</option>
                  <option value="Warehouse & Storage">Warehouse &amp; Storage (Safe Storage Hub)</option>
                  <option value="Packing & Loading">Specialized Packing &amp; Loading Labor</option>
                </select>
              </div>

              {/* Warehousing Notice Banner (if Warehousing is chosen) */}
              {isWarehousing && (
                <div className="col-full warehouse-notice-card">
                  <Warehouse size={20} />
                  <div className="warehouse-notice-text">
                    <strong>Safe Warehouse &amp; Storage Selected</strong>
                    <p>
                      We pick up your inventory from your current address and store it safely at our CCTV-monitored Electronic City facility. You do not need to provide a destination moving address at this stage.
                    </p>
                  </div>
                </div>
              )}

              {/* Move From / Storage Pickup Location */}
              <div className="form-field-group col-full">
                <div className="form-field-label">
                  <span className="field-label-text">
                    <MapPin size={15} style={{ color: 'var(--accent)' }} /> 
                    {isWarehousing ? 'Pickup Location for Storage (Your Current Address)' : 'Move From (Pickup Address)'} 
                    <span className="req-star">*</span>
                  </span>
                  <div className="field-help-btn-group">
                    <button 
                      type="button" 
                      className="btn btn-outline btn-sm" 
                      onClick={handleAutoDetectGPS}
                      disabled={isDetectingGPS}
                    >
                      <Crosshair size={13} />
                      <span>{isDetectingGPS ? 'Detecting...' : 'Auto GPS'}</span>
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-outline btn-sm" 
                      onClick={() => onOpenMapModal && onOpenMapModal('from', (addr) => setFormData(p => ({ ...p, moveFrom: addr })))}
                    >
                      <MapPin size={13} />
                      <span>Pick on Map</span>
                    </button>
                  </div>
                </div>
                <input 
                  type="text" 
                  id="moveFrom" 
                  name="moveFrom" 
                  value={formData.moveFrom} 
                  onChange={handleChange} 
                  placeholder={isWarehousing ? "e.g. Sitaramapalya, Kaveri Nagara, Bengaluru" : "e.g. Doddathoguru, Electronic City Phase 1, Bengaluru"} 
                  className="text-input-field" 
                />
                <span className="field-error-msg">{errors.moveFrom}</span>
              </div>

              {/* Move To (Destination) - ONLY SHOWN IF NOT WAREHOUSING */}
              {!isWarehousing ? (
                <div className="form-field-group col-full">
                  <div className="form-field-label">
                    <span className="field-label-text">
                      <Navigation size={15} style={{ color: 'var(--accent)' }} /> Move To (Destination Address) <span className="req-star">*</span>
                    </span>
                    <button 
                      type="button" 
                      className="btn btn-outline btn-sm" 
                      onClick={() => onOpenMapModal && onOpenMapModal('to', (addr) => setFormData(p => ({ ...p, moveTo: addr })))}
                    >
                      <MapPin size={13} />
                      <span>Pick on Map</span>
                    </button>
                  </div>
                  <input 
                    type="text" 
                    id="moveTo" 
                    name="moveTo" 
                    value={formData.moveTo} 
                    onChange={handleChange} 
                    placeholder="e.g. HSR Layout Sector 2, Bengaluru (or Other City)" 
                    className="text-input-field" 
                  />
                  <span className="field-error-msg">{errors.moveTo}</span>
                </div>
              ) : (
                /* Storage Duration Selector for Warehousing */
                <div className="form-field-group col-full">
                  <label className="form-field-label" htmlFor="storageDuration">
                    <span className="field-label-text"><Calendar size={15} style={{ color: 'var(--accent)' }} /> Estimated Storage Duration</span>
                  </label>
                  <select 
                    id="storageDuration" 
                    name="storageDuration" 
                    value={formData.storageDuration} 
                    onChange={handleChange} 
                    className="text-input-field select-field"
                  >
                    <option value="1 Month">1 Month</option>
                    <option value="2-3 Months">2-3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="1 Year or More">1 Year or More</option>
                    <option value="Flexible / Indefinite">Flexible / Indefinite</option>
                  </select>
                </div>
              )}

              {/* Inventory Notes */}
              <div className="form-field-group col-full">
                <label className="form-field-label" htmlFor="message">
                  <span className="field-label-text"><Clipboard size={15} style={{ color: 'var(--accent)' }} /> Inventory Notes / Special Items</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={3} 
                  placeholder="e.g. 2 Beds, 1 Sofa, 55 inch TV, Lift available, 3rd floor..." 
                  className="text-input-field textarea-field"
                ></textarea>
              </div>
            </div>

            {/* WhatsApp Submit Button */}
            <button type="submit" className="btn btn-submit-wa">
              <MessageSquare size={22} />
              <div className="wa-btn-content">
              <strong>Send booking request on WhatsApp</strong>
                <span>Direct Dispatch Desk: +91 73385 82679</span>
              </div>
              <ArrowRight size={18} />
            </button>

            <div className="form-trust-badges">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Shield size={14} style={{ color: 'var(--accent)' }} /> 100% Zero-Damage Protection
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={14} style={{ color: 'var(--accent)' }} /> Fixed Upfront Price
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Info size={14} style={{ color: 'var(--accent)' }} /> No Advance Required
              </span>
            </div>
          </form>

          {/* Success Dialog Modal */}
          {submittedMessage && (
            <div className="modal-backdrop" onClick={() => setSubmittedMessage(null)}>
              <div className="modal-dialog-card" style={{ maxWidth: '520px' }} onClick={e => e.stopPropagation()}>
                <div className="modal-dialog-header">
              <h3>Booking request ready</h3>
                  <button type="button" className="modal-close-cross" onClick={() => setSubmittedMessage(null)}>&times;</button>
                </div>
                <div className="modal-dialog-body">
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-secondary)' }}>
                    Your relocation summary has been compiled in clean, readable WhatsApp formatting. Click below to continue in WhatsApp:
                  </p>
                  <pre style={{ 
                    background: 'var(--paper-soft)', 
                    border: '1px solid var(--line)', 
                    borderRadius: 'var(--radius-xs)', 
                    padding: '12px', 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8rem', 
                    whiteSpace: 'pre-wrap', 
                    maxHeight: '180px', 
                    overflowY: 'auto' 
                  }}>
                    {submittedMessage.text}
                  </pre>
                </div>
                <div className="modal-dialog-footer">
                  <button type="button" className="btn btn-outline" onClick={() => setSubmittedMessage(null)}>Close</button>
                  <a href={submittedMessage.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <MessageSquare size={16} />
                    <span>Open in WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
