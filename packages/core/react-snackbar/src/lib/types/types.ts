export interface Itoast {
    id: string;
    type: ToastActionType;
    position: ToastPosition;
    stackStyle: ToastStackStylesTypes;
    message: string;
    duration: number;
    removeToast: (id:string) => void;
}

export type ToastContainerType = {
    toasts: Itoast[];
};

export type ToastProps = {
    toast : Itoast
};

export type ToastActionType = 'success' | 'error' | 'info' | 'loading';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type ToastStackStylesTypes = (index:number) => {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  transform?: string;
  transition: string;
}

export type AddToastType = { 
    message: string, 
    type?: ToastActionType,
    position?: ToastPosition,
    duration?: number
}