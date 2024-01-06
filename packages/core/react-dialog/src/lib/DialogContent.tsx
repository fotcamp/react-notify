import * as S from "./styles/styles";
import CloseIcon from './assets/close-icon';

type Props = {
  children: React.ReactNode;
  toggleDialog: () => void;
};

export const DialogContent = ({children, toggleDialog} : Props) => {
  return(
    <S.DialogContent>
      {children}
      <S.CloseIcon onClick={toggleDialog}>
        <CloseIcon width={25} height={25} fill="#333" ></CloseIcon>
      </S.CloseIcon>
    </S.DialogContent>
  );
};
