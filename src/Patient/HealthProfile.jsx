import React from 'react';
import './Patient.css';

const profileData = {
  patientId: 'HSC-9823-4412',
  fullName: 'Swaraj Chidurala',
  gender: 'Male',
  age: 29,
  dateOfBirth: '15 Mar 1997',
  bloodGroup: 'O +ve',
  height: '176 cm',
  weight: '72 kg',
  bmi: '23.2',
  mobile: '+91 98765 43210',
  email: 'swaraj.chidurala@email.com',
  address: '12, Green Park Lane, Hyderabad, Telangana',
  emergencyContact: 'Mrs. Lakshmi Chidurala | +91 99887 66554',
  allergies: 'Penicillin, Shellfish',
  chronicDiseases: 'None',
  currentMedications: 'Vitamin D3, Omega-3',
  pastSurgeries: 'Appendectomy (2014)',
  vaccinationStatus: 'COVID-19 fully vaccinated, Influenza updated',
  organDonorStatus: 'Registered Donor',
  smoking: 'No',
  alcohol: 'Occasionally',
  exercise: '5 times/week',
  diet: 'Balanced vegetarian diet',
  sleepHours: '7.5 hours/night',
  insurance: 'Star Health Policy',
  policyNumber: 'STH-445982',
  planType: 'Premium Family Care',
  healthStatus: 'Stable'
};

const summaryCards = [
  { label: 'Blood Group', value: profileData.bloodGroup, icon: 'bi-droplet-half' },
  { label: 'Age', value: `${profileData.age} years`, icon: 'bi-person' },
  { label: 'BMI', value: profileData.bmi, icon: 'bi-speedometer2' },
  { label: 'Health Status', value: profileData.healthStatus, icon: 'bi-heart-pulse' }
];

const sections = [
  {
    title: 'Personal Information',
    icon: 'bi-person-badge',
    items: [
      ['Patient ID', profileData.patientId],
      ['Full Name', profileData.fullName],
      ['Gender', profileData.gender],
      ['Age', `${profileData.age} years`],
      ['Date of Birth', profileData.dateOfBirth],
      ['Blood Group', profileData.bloodGroup],
      ['Height', profileData.height],
      ['Weight', profileData.weight],
      ['BMI', profileData.bmi]
    ]
  },
  {
    title: 'Contact Information',
    icon: 'bi-telephone',
    items: [
      ['Mobile Number', profileData.mobile],
      ['Email', profileData.email],
      ['Address', profileData.address]
    ]
  },
  {
    title: 'Emergency Contact',
    icon: 'bi-telephone-forward',
    items: [
      ['Emergency Contact', profileData.emergencyContact]
    ]
  },
  {
    title: 'Medical Information',
    icon: 'bi-heart-pulse',
    items: [
      ['Allergies', profileData.allergies],
      ['Chronic Diseases', profileData.chronicDiseases],
      ['Current Medications', profileData.currentMedications],
      ['Past Surgeries', profileData.pastSurgeries],
      ['Vaccination Status', profileData.vaccinationStatus],
      ['Organ Donor Status', profileData.organDonorStatus]
    ]
  },
  {
    title: 'Lifestyle Information',
    icon: 'bi-activity',
    items: [
      ['Smoking', profileData.smoking],
      ['Alcohol', profileData.alcohol],
      ['Exercise', profileData.exercise],
      ['Diet', profileData.diet],
      ['Sleep Hours', profileData.sleepHours]
    ]
  },
  {
    title: 'Insurance Information',
    icon: 'bi-shield-check',
    items: [
      ['Insurance Provider', profileData.insurance],
      ['Policy Number', profileData.policyNumber],
      ['Plan Type', profileData.planType]
    ]
  }
];

function HealthProfile() {
  return (
    <section className="page-content">
      <div className="page-header flex-column flex-md-row">
        <div className="page-title">
          <p className="eyebrow mb-2">Patient Care Overview</p>
          <h1 className="mb-1">Health Profile</h1>
          <p className="page-subtitle">Comprehensive summary of your personal, medical, and insurance information.</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-outline-primary rounded-pill" type="button">
            <i className="bi bi-pencil-square me-2"></i>
            Edit Profile
          </button>
          <button className="btn btn-primary rounded-pill" type="button">
            <i className="bi bi-cloud-arrow-down me-2"></i>
            Download Health Card
          </button>
        </div>
      </div>

      <div className="summary-grid mb-4">
        {summaryCards.map((item) => (
          <div className="summary-card" key={item.label}>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="text-muted small">{item.label}</span>
              <div className="summary-icon">
                <i className={`bi ${item.icon}`}></i>
              </div>
            </div>
            <h3>{item.value}</h3>
          </div>
        ))}
      </div>

      <div className="page-section-card mb-4">
        <div className="row g-4 align-items-center">
          <div className="col-md-2 text-center">
            <div className="avatar mx-auto" style={{ width: '70px', height: '70px', fontSize: '1.4rem' }}>
              SC
            </div>
          </div>
          <div className="col-md-10">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
              <div>
                <h3 className="mb-1">{profileData.fullName}</h3>
                <p className="text-muted mb-0">Patient ID: {profileData.patientId}</p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <span className="pill">{profileData.bloodGroup}</span>
                <span className="pill">BMI {profileData.bmi}</span>
                <span className="pill">{profileData.gender}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {sections.map((section) => (
          <div className="col-lg-6" key={section.title}>
            <div className="page-section-card h-100">
              <div className="section-title">
                <div className="d-flex align-items-center gap-2">
                  <i className={`bi ${section.icon} fs-5 text-primary`}></i>
                  <h4>{section.title}</h4>
                </div>
              </div>
              <div className="row g-3">
                {section.items.map(([label, value]) => (
                  <div className="col-12 col-sm-6" key={label}>
                    <div className="info-tile">
                      <div className="text-muted small fw-semibold">{label}</div>
                      <div className="mt-1 fw-semibold">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 d-flex flex-wrap gap-2">
        <button className="btn btn-primary rounded-pill" type="button">
          <i className="bi bi-arrow-repeat me-2"></i>
          Update Information
        </button>
      </div>
    </section>
  );
}

export default HealthProfile;
