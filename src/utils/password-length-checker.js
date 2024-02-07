  export const passwordlengthChecker = (password) => {
    let score = {
      total: 25,
      hasDigit: false,
      hasCharacter: false,
      hasSpecialCharacter: false,
      hasLengthCondition: false
    };
    if (password !== undefined) {
      const specialCharacter = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
      const lengthCondition = password.length > 7;
      const characterCondition = /[a-z]/.test(password) && /[A-Z]/.test(password);
      const digitCondition = /\d/.test(password);
      const specialCharacterCondition = specialCharacter.test(password);
  
      if (lengthCondition) {
        score = {
          ...score,
          hasLengthCondition: true
        };
      }
  
      if (characterCondition) {
        score = {
          ...score,
          total: score.total + 25,
          hasCharacter: true
        };
      }
      if (digitCondition) {
        score = {
          ...score,
          total: score.total + 25,
          hasDigit: true
        };
      }
      if (specialCharacterCondition) {
        score = {
          ...score,
          total: score.total + 25,
          hasSpecialCharacter: true
        };
      }
      if (
        !lengthCondition &&
        (characterCondition || digitCondition || specialCharacterCondition)
      ) {
        score = {
          ...score,
          total: 25
        };
      }
    }
    return score;
  };
  
  export const lengthCheckerTitleGenerator = (score) => {
    let title = 'ضعیف';
  
    if (score > 20) {
      title = 'متوسط';
    } else if (score > 60) {
      title = 'خوب';
    } else if (score > 80) {
      title = 'عالی';
    } else {
      title = 'ضعیف';
    }
  
    return title;
  };