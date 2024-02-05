export const containPersianCharacters = (value) => {
    const regex = /^[\u0600-\u06FF\s]+$/;
    return regex.test(value);
  };
  export default containPersianCharacters;

