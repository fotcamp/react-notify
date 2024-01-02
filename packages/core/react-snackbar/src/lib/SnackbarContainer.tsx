import { Toast } from './Snackbar';
import * as S from './styles/styles';
import { ToastContainerType } from './types/types';


export const ToastContainer = ({ toasts }: ToastContainerType) => {
  return (
    <S.ToastContainer>
      {toasts.map((toast, index) => {
        const styles = toast.stackStyle;

        return (
          <div
            style={{
              position: "absolute",
              ...styles(index),
            }}
            key={toast.id}
          >
            <Toast
              toast={toast}
            />
          </div>
        )
      })}
    </S.ToastContainer>
  );
};
