import React, { useState, useEffect } from 'react';
import './Toast.css';

let addToastFunction = null;

export const showToast = (message, type = 'info') => {
  if (addToastFunction) {
    addToastFunction(message, type);
  }
};

export const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    addToastFunction = (message, type) => {
      const id = Date.now();
      const newToast = { id, message, type };
      setToasts((prev) => [...prev, newToast]);

      // Auto remove after 4 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    };

    return () => {
      addToastFunction = null;
    };
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          <span className="toast-icon">
            {toast.type === 'success' && '✅'}
            {toast.type === 'error' && '❌'}
            {toast.type === 'warning' && '⚠️'}
            {toast.type === 'info' && 'ℹ️'}
          </span>
          <span className="toast-message">{toast.message}</span>
          <button className="toast-close" onClick={() => removeToast(toast.id)}>
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};
