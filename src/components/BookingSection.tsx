import React, { useState, useEffect } from "react";
import { salonConfig } from "../data/salon";
import { salonServices } from "../data/services";
import { Phone, Calendar, Clock, Sparkles, Send, AlertCircle, CheckCircle2, Car, MapPin, Loader2, Instagram } from "lucide-react";

interface BookingSectionProps {
  selectedServiceId?: string;
  onBookingSubmitted: (bookingData: BookingFormState) => void;
}

export interface BookingFormState {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  notes: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServiceId,
  onBookingSubmitted,
}) => {
  // Current date in YYYY-MM-DD
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState<BookingFormState>({
    name: "",
    phone: "",
    email: "",
    serviceId: selectedServiceId || salonServices[0]?.id || "",
    serviceName: salonServices[0]?.name || "",
    date: todayStr,
    time: "11:30 AM",
    notes: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormState, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof BookingFormState, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync service if passed from parent
  useEffect(() => {
    if (selectedServiceId) {
      const match = salonServices.find((s) => s.id === selectedServiceId);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          serviceId: match.id,
          serviceName: match.name,
        }));
      }
    }
  }, [selectedServiceId]);

  const timeSlots = [
    "09:30 AM – Morning Appointment",
    "11:30 AM – Midday Appointment",
    "01:30 PM – Early Afternoon",
    "03:00 PM – Afternoon Session (Closes 4:30 PM)",
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof BookingFormState, string>> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name.";
    }

    const phoneClean = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim() || phoneClean.length < 7) {
      errs.phone = "Please provide a valid contact telephone number.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.date) {
      errs.date = "Please select an appointment date.";
    } else if (formData.date < todayStr) {
      errs.date = "Appointment date cannot be in the past.";
    }

    if (!formData.time) {
      errs.time = "Please select a preferred time slot.";
    }

    if (!formData.serviceId) {
      errs.serviceId = "Please select a salon service.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "serviceId") {
      const selected = salonServices.find((s) => s.id === value);
      setFormData((prev) => ({
        ...prev,
        serviceId: value,
        serviceName: selected ? selected.name : "Custom Hair Consultation",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof BookingFormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleBlur = (field: keyof BookingFormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(salonConfig.bookingEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.serviceName,
          date: formData.date,
          time: formData.time,
          notes: formData.notes || "None provided",
          _subject: `New Appointment Enquiry from ${formData.name} - Moreno's Hair&Beauty`,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        onBookingSubmitted(formData);
      } else {
        const errorData = await response.json().catch(() => null);
        const errMsg =
          errorData && errorData.error
            ? errorData.error
            : "We encountered an issue submitting your request. Please call 01270 255992 directly.";
        setSubmitError(errMsg);
      }
    } catch {
      setSubmitError(
        "Network connection error. Please call the salon directly on 01270 255992."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0e0e12] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Salon Verification & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase text-[#dec17c] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visit & Book</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#f5f2eb] tracking-tight leading-tight mb-6">
                Appointments & Consultations
              </h2>

              <p className="text-[#c9c4b7] text-sm sm:text-base font-light leading-relaxed mb-8">
                Ready to experience specialist curly cutting, seamless hair extensions, or styling for your hair texture? Submit your appointment enquiry directly to the salon desk via Formspree or call us on Nantwich Road.
              </p>

              {/* Verified Contact Box */}
              <div className="bg-[#121217] border border-[#242430] p-6 rounded-sm space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#dec17c] font-semibold">
                    Verified Salon Desk
                  </span>
                  <span className="text-[11px] text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-sm">
                    Open · Closes 4:30 PM
                  </span>
                </div>

                <div className="space-y-3 text-sm text-[#8e8a80]">
                  <div className="flex items-center justify-between py-1 border-b border-[#242430]/60">
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#dec17c]" />
                      <span>Direct Telephone:</span>
                    </span>
                    <a
                      href={`tel:${salonConfig.contact.phone}`}
                      className="text-[#f5f2eb] font-mono hover:text-[#dec17c] transition-colors"
                    >
                      {salonConfig.contact.displayPhone}
                    </a>
                  </div>

                  <div className="flex items-start justify-between py-1 border-b border-[#242430]/60">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#dec17c]" />
                      <span>Salon Address:</span>
                    </span>
                    <a
                      href={salonConfig.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f5f2eb] text-right text-xs hover:text-[#dec17c] transition-colors"
                    >
                      {salonConfig.contact.address.street}, {salonConfig.contact.address.city} <br />
                      {salonConfig.contact.address.postcode}
                    </a>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-[#242430]/60">
                    <span className="flex items-center gap-2">
                      <Car className="w-3.5 h-3.5 text-[#dec17c]" />
                      <span>Parking:</span>
                    </span>
                    <span className="text-[#f5f2eb] text-xs">Dedicated customer parking</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <span>Instagram Profile:</span>
                    <a
                      href="https://www.instagram.com/morenoshairbeauty"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Moreno's Hair Beauty on Instagram"
                      className="w-7 h-7 rounded-sm bg-[#14141a] hover:bg-[#c5a059] border border-[#242430] hover:border-[#c5a059] text-[#dec17c] hover:text-[#0b0b0e] flex items-center justify-center transition-all group"
                      title="Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#dec17c] group-hover:text-[#0b0b0e] transition-colors" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Connected Endpoint Disclosure */}
              <div className="p-4 bg-[#14141a] border border-[#c5a059]/30 rounded-sm text-xs text-[#8e8a80] leading-relaxed">
                <div className="flex items-center gap-1.5 text-[#dec17c] font-medium mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Direct Formspree Connection Active</span>
                </div>
                Booking inquiries submitted through this form are securely dispatched to the salon management via Formspree. You can also call <strong>01270 255992</strong> for immediate availability.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Enquiry Form Connected to Formspree */}
          <div className="lg:col-span-7">
            <div className="bg-[#121217] border border-[#242430] p-6 sm:p-10 rounded-sm shadow-xl">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-serif text-2xl text-[#f5f2eb] font-normal">
                  Booking Enquiry Form
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-[#dec17c] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                  <span>Connected to Formspree</span>
                </span>
              </div>
              <p className="text-xs text-[#8e8a80] mb-8 font-light">
                Fill in your preferences below to send an appointment request directly to Moreno’s Hair&Beauty.
              </p>

              {/* Success Banner if submitted */}
              {submitSuccess && (
                <div className="mb-6 p-4 bg-[#25D366]/10 border border-[#25D366]/40 rounded-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#f5f2eb] space-y-1">
                    <p className="font-semibold text-[#25D366]">Enquiry Sent Successfully!</p>
                    <p className="text-[#c9c4b7]">
                      Your details have been submitted via Formspree. The salon team will review your requested time slot and get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Banner if submission failed */}
              {submitError && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/40 rounded-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-[#f5f2eb] space-y-1">
                    <p className="font-semibold text-red-400">Submission Notice</p>
                    <p className="text-[#c9c4b7]">{submitError}</p>
                  </div>
                </div>
              )}

              <form
                action={salonConfig.bookingEndpoint}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#c9c4b7] font-medium mb-2">
                      Full Name <span className="text-[#dec17c]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur("name")}
                      placeholder="e.g. Sarah Jenkins"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#0b0b0e] border ${
                        errors.name && touched.name ? "border-red-500/80" : "border-[#242430]"
                      } focus:border-[#c5a059] text-[#f5f2eb] text-sm rounded-sm focus:outline-none transition-colors placeholder-[#8e8a80]/50 disabled:opacity-50`}
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#c9c4b7] font-medium mb-2">
                      Contact Phone <span className="text-[#dec17c]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={() => handleBlur("phone")}
                      placeholder="e.g. 07700 900000"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#0b0b0e] border ${
                        errors.phone && touched.phone ? "border-red-500/80" : "border-[#242430]"
                      } focus:border-[#c5a059] text-[#f5f2eb] text-sm rounded-sm focus:outline-none transition-colors placeholder-[#8e8a80]/50 disabled:opacity-50`}
                    />
                    {errors.phone && touched.phone && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address & Preferred Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#c9c4b7] font-medium mb-2">
                      Email Address <span className="text-[#dec17c]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      placeholder="sarah@example.co.uk"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-[#0b0b0e] border ${
                        errors.email && touched.email ? "border-red-500/80" : "border-[#242430]"
                      } focus:border-[#c5a059] text-[#f5f2eb] text-sm rounded-sm focus:outline-none transition-colors placeholder-[#8e8a80]/50 disabled:opacity-50`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="serviceId" className="block text-xs uppercase tracking-wider text-[#c9c4b7] font-medium mb-2">
                      Preferred Service <span className="text-[#dec17c]">*</span>
                    </label>
                    <select
                      id="serviceId"
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={handleChange}
                      onBlur={() => handleBlur("serviceId")}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-[#0b0b0e] border border-[#242430] focus:border-[#c5a059] text-[#f5f2eb] text-sm rounded-sm focus:outline-none transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {salonServices.map((service) => (
                        <option key={service.id} value={service.id} className="bg-[#121217] text-[#f5f2eb]">
                          {service.name} ({service.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time Selection (Past dates disabled via min={todayStr}) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-xs uppercase tracking-wider text-[#c9c4b7] font-medium mb-2">
                      Preferred Date <span className="text-[#dec17c]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        min={todayStr}
                        value={formData.date}
                        onChange={handleChange}
                        onBlur={() => handleBlur("date")}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-[#0b0b0e] border ${
                          errors.date && touched.date ? "border-red-500/80" : "border-[#242430]"
                        } focus:border-[#c5a059] text-[#f5f2eb] text-sm rounded-sm focus:outline-none transition-colors cursor-pointer disabled:opacity-50`}
                      />
                    </div>
                    {errors.date && touched.date && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.date}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-xs uppercase tracking-wider text-[#c9c4b7] font-medium mb-2">
                      Preferred Time Slot <span className="text-[#dec17c]">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      onBlur={() => handleBlur("time")}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-[#0b0b0e] border border-[#242430] focus:border-[#c5a059] text-[#f5f2eb] text-sm rounded-sm focus:outline-none transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-[#121217] text-[#f5f2eb]">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Notes & Hair History */}
                <div>
                  <label htmlFor="notes" className="block text-xs uppercase tracking-wider text-[#c9c4b7] font-medium mb-2">
                    Hair Texture & Details (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Tell us about your curl pattern (e.g. 3C/4A), extension goals, current color, or special requirements..."
                    className="w-full px-4 py-3 bg-[#0b0b0e] border border-[#242430] focus:border-[#c5a059] text-[#f5f2eb] text-sm rounded-sm focus:outline-none transition-colors placeholder-[#8e8a80]/50 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Primary Actions: Call Salon vs Submit to Formspree */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  {/* Direct Telephone Action */}
                  <a
                    href={`tel:${salonConfig.contact.phone}`}
                    className="flex-1 py-4 px-6 rounded-sm text-xs font-semibold tracking-widest uppercase bg-[#1a1a24] hover:bg-[#242432] text-[#f5f2eb] border border-[#242430] hover:border-[#c5a059] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#dec17c]" />
                    <span>Call 01270 255992</span>
                  </a>

                  {/* Submit to Formspree Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-6 rounded-sm text-xs font-semibold tracking-widest uppercase text-[#0b0b0e] bg-gradient-to-r from-[#dec17c] via-[#c5a059] to-[#aa853c] hover:brightness-110 active:brightness-95 transition-all flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(197,160,89,0.25)] cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#0b0b0e]" />
                        <span>Sending to Salon...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Booking Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
