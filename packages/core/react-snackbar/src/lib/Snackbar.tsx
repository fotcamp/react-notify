/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { css } from "@emotion/react";
import * as S from './styles/styles';
import * as A from './styles/animations'
import { ToastPosition, ToastProps } from './types/types';
import CloseIcon from './assets/close-icon';
import SuccessIcon from './assets/success-icon';


const getAnimation = (toastPosition: ToastPosition) => {
    switch (toastPosition) {
        case 'top-left':
        case 'bottom-left':
            return [A.slideInLeft, A.slideOutLeft];
        case 'top-center':
            return [A.slideInCenterTop, A.slideOutCenterTop];
        case 'bottom-center':
            return [A.slideInCenterBottom, A.slideOutCenterBottom];
        case 'top-right':
        case 'bottom-right':
            return [A.slideInRight, A.slideOutRight];
        
        default:
            console.log("Invalid Position: ", toastPosition);
            return [];
    }
}

// animation: ${visible && css`${toastAnimation[0]} 0.35s forwards`};
// animation: ${visible ? css`${toastAnimation[0]} 0.35s forwards` : css`${toastAnimation[1]} 0.4s forwards`};
export const Toast = ({ toast } : ToastProps) => {
  const [visible, setVisible] = useState(true);
  const toastAnimation = getAnimation(toast.position);
  const style = css`
    animation: ${visible ? css`${toastAnimation[0]} 0.35s forwards` : css`${toastAnimation[1]} 0.4s forwards`};
  `;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        toast.removeToast(toast.id);
      }, 1000);
    }, toast.duration);

    return () => {
      clearTimeout(timer);
    };
  }, [toast]);

  const closeItem = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setVisible(false);
    setTimeout(() => {
      toast.removeToast(toast.id);
    }, 1000);
  }
  
  return (
    <S.SnackbarController onClick={closeItem}>
      <S.Toast className={toast.type} css={style}>
        <S.TypeIcon>
          <SuccessIcon width={20} height={20} fill="#FFF" ></SuccessIcon>
        </S.TypeIcon>
        <S.Message>
          {toast.message}
        </S.Message>
        <S.CloseIcon>
          <CloseIcon width={20} height={20} fill="#FFF" ></CloseIcon>
        </S.CloseIcon>
      </S.Toast>
    </S.SnackbarController>
  );
};
