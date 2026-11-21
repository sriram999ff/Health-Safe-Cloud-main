import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

export default function useNotifications() {
  const context = useContext(NotificationContext);

  if (!context) {
    return { notifications: [], dispatch: () => {} };
  }

  return context;
}
