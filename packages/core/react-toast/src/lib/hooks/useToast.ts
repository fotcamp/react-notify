import { useState } from 'react';
import { toastStackStyles } from '../styles/animations';
import { AddToastType, Itoast } from '../types/types';

const useToast = () => {
  const [toasts, setToasts] = useState<Itoast[]>([]);

  const addToast = ({message, type= 'info',position= 'top-right', duration=3000}: AddToastType) => {
    const id = new Date().getTime().toString()
    const stackStyle =  toastStackStyles[position];

    setToasts([{ id, type, position, stackStyle, message, duration, removeToast}, ...toasts]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
   
  return { toasts, addToast, removeToast };
};

export default useToast;