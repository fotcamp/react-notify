export const isKorean = (value: string) => {
  return /^[가-힣]*$/.test(value);
};
