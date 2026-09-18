import React from 'react';
import { contactData } from '../../data/contactData';
import NavbarHero from '../../components/layout/NavbarHero';
import { ContactHero } from '../../components/contact/ContactHero';
import { ContactInfoForm } from '../../components/contact/ContactInfoForm';
import { WhyContact } from '../../components/contact/WhyContact';
import { ContactLocation } from '../../components/contact/ContactLocation';
import { ContactCTA } from '../../components/contact/ContactCTA';
import CompactFooter from '../../components/layout/CompactFooter';

interface ContactPageProps {
  onNavigateHome?: () => void;
  onNavigatePrograms?: () => void;
  onNavigate?: (route: string) => void;
}

export default function ContactPage({
  onNavigateHome,
  onNavigatePrograms,
  onNavigate,
}: ContactPageProps) {
  const handleApplyClick = () => {
    const formEl = document.getElementById('enquiry-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Admissions Enquiry: Contact Ramnagar Campus, Anantapur at +91 8096651111 / 8096671111.');
    }
  };

  const handleExplorePrograms = () => {
    if (onNavigatePrograms) {
      onNavigatePrograms();
    } else if (onNavigate) {
      onNavigate('/programs');
    } else {
      window.location.hash = 'programs';
    }
  };

  const handleScrollToForm = () => {
    const formEl = document.getElementById('enquiry-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cognizant-contact-page" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#ffffff' }}>
      {/* Sticky Navbar */}
      <NavbarHero onApplyClick={handleApplyClick} activePath="/contact" onNavigate={onNavigate} />

      <main>
        {/* 1. CONTACT HERO */}
        <ContactHero
          eyebrow={contactData.hero.eyebrow}
          title={contactData.hero.title}
          description={contactData.hero.description}
          breadcrumb={contactData.hero.breadcrumb}
          onNavigateHome={onNavigateHome}
        />

        {/* 2. CONTACT INFO + ENQUIRY FORM */}
        <ContactInfoForm
          phones={contactData.phones}
          address={contactData.address}
          formConfig={contactData.form}
        />

        {/* 3. WHY CONTACT COGNIZANT */}
        <WhyContact
          eyebrow={contactData.whyContactHeader.eyebrow}
          title={contactData.whyContactHeader.title}
          subtitle={contactData.whyContactHeader.subtitle}
          cards={contactData.helpCards}
        />

        {/* 4. LOCATION / FIND US */}
        <ContactLocation
          eyebrow={contactData.locationHeader.eyebrow}
          title={contactData.locationHeader.title}
          subtitle={contactData.locationHeader.subtitle}
          address={contactData.address}
        />

        {/* 5. FINAL CTA */}
        <ContactCTA
          title={contactData.cta.title}
          description={contactData.cta.description}
          primaryBtnText={contactData.cta.primaryBtnText}
          secondaryBtnText={contactData.cta.secondaryBtnText}
          onExplorePrograms={handleExplorePrograms}
          onContactClick={handleScrollToForm}
        />
      </main>

      {/* FOOTER */}
      <CompactFooter />
    </div>
  );
}
