/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { BookingSection, BookingFormState } from "./components/BookingSection";
import { Footer } from "./components/Footer";
import { LightboxModal } from "./components/LightboxModal";
import { BookingConfirmationModal } from "./components/BookingConfirmationModal";
import { galleryItems } from "./data/gallery";

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [activeLook, setActiveLook] = useState<(typeof galleryItems)[0] | null>(null);
  const [submittedBooking, setSubmittedBooking] = useState<BookingFormState | null>(null);

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    const bookingElem = document.getElementById("contact");
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectLook = (look: (typeof galleryItems)[0]) => {
    setActiveLook(look);
  };

  const handleInquireLook = (serviceRef?: string) => {
    setActiveLook(null);
    scrollToBooking(serviceRef);
  };

  const handleBookingSubmitted = (bookingData: BookingFormState) => {
    setSubmittedBooking(bookingData);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#f5f2eb] flex flex-col font-sans selection:bg-[#c5a059]/30 selection:text-[#f5f2eb]">
      {/* Fixed Luxury Navigation */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => scrollToBooking()} />

        {/* 2. Services Catalog */}
        <Services onSelectService={(serviceId) => scrollToBooking(serviceId)} />

        {/* 3. Lookbook & Gallery */}
        <Gallery onSelectLook={handleSelectLook} />

        {/* 4. Atelier Philosophy & About */}
        <About />

        {/* 5. Booking Enquiry & WhatsApp Concierge */}
        <BookingSection
          selectedServiceId={selectedServiceId}
          onBookingSubmitted={handleBookingSubmitted}
        />
      </main>

      {/* Atelier Footer */}
      <Footer onOpenBooking={() => scrollToBooking()} />

      {/* Gallery Lightbox Modal */}
      <LightboxModal
        look={activeLook}
        onClose={() => setActiveLook(null)}
        onInquireLook={handleInquireLook}
      />

      {/* Booking Enquiry Confirmation & WhatsApp Forwarding Modal */}
      <BookingConfirmationModal
        booking={submittedBooking}
        onClose={() => setSubmittedBooking(null)}
      />
    </div>
  );
}
