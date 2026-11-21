export const createNotification = (overrides = {}) => ({
  id: Date.now() + Math.floor(Math.random() * 1000),
  title: 'System Alert',
  description: 'A new system update is available.',
  time: 'just now',
  read: false,
  priority: 'Medium',
  icon: 'bi-bell',
  ...overrides
});
