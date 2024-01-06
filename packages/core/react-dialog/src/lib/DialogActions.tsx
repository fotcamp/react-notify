import * as S from "./styles/styles";

type Props = {
  children: React.ReactNode;
};

export const DialogActions = ({children} : Props) => {
  return(
    <S.DialogActions>
      {children}
    </S.DialogActions>
  );
};
