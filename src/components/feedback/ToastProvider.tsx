import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { Toast } from "./Toast";

export interface ToastState {
  message: string;
  ok: boolean;
  durationMs?: number;
}

interface ToastContextValue {
  hideToast: () => void;
  showToast: (message: string, ok: boolean, durationMs?: number) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export interface ToastProviderProps {
  children?: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toast, setToast] = useState<ToastState | null>(null);

  const value = useMemo<ToastContextValue>(() => ({
    hideToast: () => setToast(null),
    showToast: (message, ok, durationMs = 5000) => {
      setToast({ message, ok, durationMs });
      window.setTimeout(() => setToast(current => (
        current?.message === message && current?.ok === ok ? null : current
      )), durationMs);
    },
  }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast ? <Toast message={toast.message} ok={toast.ok} durationMs={toast.durationMs} /> : null}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
