import React, { forwardRef, useLayoutEffect, useState } from "react";
import * as S from "./styles/styles";
import * as A from "./styles/animations"
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  animate?: boolean;
  toggleDialog: () => void;
  isOpen?: boolean;
};

export const Dialog = forwardRef<HTMLDialogElement, Props>(
  ({ children, style, animate, toggleDialog, isOpen}, ref) => {
    const [dialogAnimation, setDialogAnimation] = useState(css``);

    useLayoutEffect(() => {
      if (animate) {
        const animationStyle = isOpen ? A.DialogShow : A.DialogClose;
        setDialogAnimation(animationStyle);
      }
    }, [isOpen, animate]);


    const handleClick = (e:React.MouseEvent) => {
      if (e.currentTarget === e.target) {
        toggleDialog();
      }
    }

    return (
      <S.Dialog 
        ref={ref}
        style={style}
        animate={animate}
        dialogAnimation={dialogAnimation}
        onClick={handleClick}
      >
        <S.DialogInner>
          {children}
        </S.DialogInner>
      </S.Dialog>
    );
  }
);

Dialog.displayName = "Dialog";