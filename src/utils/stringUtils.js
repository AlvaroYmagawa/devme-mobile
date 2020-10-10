export const isStringEmpty = (string) => {
  if (/\S/.test(string)) return false;

  return true;
};
