import * as S from "./styles/styles";

type Props = {
  children: React.ReactNode;
};

export const DialogHeader = ({children} : Props) => {
  return(
    <S.DialogHeader>
      {children}
    </S.DialogHeader>
  );
};
