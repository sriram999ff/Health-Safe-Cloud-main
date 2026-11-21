export const statsData = [
  { title: 'Total Hospitals', value: '128', growth: '+12.5%' },
  { title: 'Total Doctors', value: '542', growth: '+8.7%' },
  { title: 'Total Patients', value: '12,845', growth: '+15.6%' },
  { title: 'Total Health Records', value: '45,231', growth: '+10.1%' },
  { title: "Today's Logins", value: '1,234', growth: '+18.2%' },
  { title: 'Cloud Storage Used', value: '320 GB / 1 TB', growth: '32%', progress: 32 }
];

export const hospitalsData = [
  { id: 1, name: 'Apollo Hospital', email: 'apollo@care.com', address: 'Bangalore', license: 'LIC-1001', status: 'Active', beds: 320 },
  { id: 2, name: 'Medanta City', email: 'medanta@care.com', address: 'Hyderabad', license: 'LIC-1002', status: 'Pending', beds: 280 },
  { id: 3, name: 'Global Health', email: 'global@care.com', address: 'Mumbai', license: 'LIC-1003', status: 'Active', beds: 410 },
  { id: 4, name: 'CarePoint', email: 'carepoint@care.com', address: 'Pune', license: 'LIC-1004', status: 'Inactive', beds: 180 }
];

export const patientsData = [
  { id: 'PT-1001', name: 'Aarav Sharma', age: 32, gender: 'Male', hospital: 'Apollo Hospital', doctor: 'Dr. Mehta', status: 'Stable' },
  { id: 'PT-1002', name: 'Meera Nair', age: 29, gender: 'Female', hospital: 'Global Health', doctor: 'Dr. Rao', status: 'Critical' },
  { id: 'PT-1003', name: 'Karthik Rao', age: 45, gender: 'Male', hospital: 'Medanta City', doctor: 'Dr. Sinha', status: 'Stable' },
  { id: 'PT-1004', name: 'Nidhi Verma', age: 37, gender: 'Female', hospital: 'CarePoint', doctor: 'Dr. Kumar', status: 'Recovery' }
];

export const requestsData = [
  { id: 1, hospitalName: 'Sundaram Hospital', email: 'sundaram@care.com', address: 'Chennai', licenseNumber: 'LIC-2001', requestedDate: '2026-07-28', status: 'Pending' },
  { id: 2, hospitalName: 'Lifeline Center', email: 'lifeline@care.com', address: 'Delhi', licenseNumber: 'LIC-2002', requestedDate: '2026-07-29', status: 'Pending' },
  { id: 3, hospitalName: 'Prime Care', email: 'prime@care.com', address: 'Kolkata', licenseNumber: 'LIC-2003', requestedDate: '2026-07-30', status: 'Pending' }
];

export const reportsData = [
  { id: 1, title: 'Daily Report', description: 'Patient inflow and bed availability' },
  { id: 2, title: 'Weekly Report', description: 'Operational performance summary' },
  { id: 3, title: 'Monthly Report', description: 'Revenue and care delivery trends' },
  { id: 4, title: 'Yearly Report', description: 'Annual compliance and growth analysis' }
];

export const activitiesData = [
  { time: '10:30 AM', activity: 'Hospital Registered', performedBy: 'Apollo Hospital', status: 'Completed' },
  { time: '11:20 AM', activity: 'Doctor Added', performedBy: 'Admin', status: 'Completed' },
  { time: '01:10 PM', activity: 'Patient Record Updated', performedBy: 'Dr. Rao', status: 'In Progress' },
  { time: '03:45 PM', activity: 'Report Generated', performedBy: 'System', status: 'Completed' }
];

export const notificationSeed = [
  { id: 1, title: 'Hospital Registration Request', description: 'Sundaram Hospital submitted a new registration.', time: '2m ago', read: false, priority: 'High', icon: 'bi-hospital' },
  { id: 2, title: 'Patient Record Updated', description: 'Patient record for Meera Nair was updated.', time: '15m ago', read: false, priority: 'Medium', icon: 'bi-person-check' },
  { id: 3, title: 'Doctor Added', description: 'Dr. Sinha has been added to Medanta City.', time: '1h ago', read: true, priority: 'Low', icon: 'bi-person-plus' },
  { id: 4, title: 'Report Generated', description: 'Weekly report has been generated successfully.', time: '2h ago', read: true, priority: 'Medium', icon: 'bi-file-earmark-text' }
];
