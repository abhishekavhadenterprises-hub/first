import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, AlertCircle, Info } from 'lucide-react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

let toastQueue: Toast[] = [];
let setToastsFunction: ((toasts: Toast[]) => void) | null = null;

export function showToast(message: string, type: 'success' | 'error' | 'info' = 'success') {
  const id = Date.now().toString();
  const newToast = { id, message, type };
  toastQueue = [...toastQueue, newToast];
  
  if (setToastsFunction) {
    setToastsFunction([...toastQueue]);
  }

  setTimeout(() => {
    toastQueue = toastQueue.filter(t => t.id !== id);
    if (setToastsFunction) {
      setToastsFunction([...toastQueue]);
    }
  }, 3000);
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    setToastsFunction = setToasts;
    return () => {
      setToastsFunction = null;
    };
  }, []);

  return (
    <div className="fixed top-24 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[300px] ${
              toast.type === 'success'
                ? 'bg-green-500 text-white'
                : toast.type === 'error'
                ? 'bg-red-500 text-white'
                : 'bg-blue-500 text-white'
            }`}
          >
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5" />}
            {toast.type === 'info' && <Info className="w-5 h-5" />}
            <span className="flex-1 text-sm font-medium">{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
