import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ toasts, removeToast }) => {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => {
        const isDanger = toast.type === 'danger';
        const isInfo = toast.type === 'info';

        return (
          <div
            key={toast.id}
            className={`toast ${
              isDanger ? 'toast-danger' : isInfo ? 'toast-info' : 'toast-success'
            }`}
          >
            {isDanger ? (
              <AlertCircle size={20} color="var(--accent)" />
            ) : isInfo ? (
              <Info size={20} color="var(--primary)" />
            ) : (
              <CheckCircle2 size={20} color="var(--status-success)" />
            )}

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {toast.title}
              </div>
              {toast.message && (
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {toast.message}
                </div>
              )}
            </div>

            <button
              style={{ color: 'var(--text-muted)', padding: '2px' }}
              onClick={() => removeToast(toast.id)}
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
