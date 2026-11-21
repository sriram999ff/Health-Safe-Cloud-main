import React, { createContext, useEffect, useReducer } from 'react';
import { notificationSeed } from '../services/api';
import { createNotification } from '../services/notificationService';

const NotificationContext = createContext();

const initialState = notificationSeed;

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'MARK_READ':
      return state.map((item) => (item.id === action.id ? { ...item, read: true } : item));
    case 'DELETE':
      return state.filter((item) => item.id !== action.id);
    case 'CLEAR_ALL':
      return [];
    case 'MARK_ALL_READ':
      return state.map((item) => ({ ...item, read: true }));
    default:
      return state;
  }
}

export function NotificationProvider({ children }) {
  const [notifications, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      const templates = [
        {
          title: 'Login Alert',
          description: 'A new admin login was detected from a secured device.',
          time: 'just now',
          priority: 'High',
          icon: 'bi-shield-lock'
        },
        {
          title: 'System Alert',
          description: 'Cloud backup for all records is up to date.',
          time: 'just now',
          priority: 'Low',
          icon: 'bi-cloud-arrow-up'
        },
        {
          title: 'Hospital Registration Request',
          description: 'A new hospital registration is waiting for review.',
          time: 'just now',
          priority: 'High',
          icon: 'bi-hospital'
        }
      ];
      const next = templates[Math.floor(Math.random() * templates.length)];
      dispatch({ type: 'ADD', payload: createNotification(next) });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
