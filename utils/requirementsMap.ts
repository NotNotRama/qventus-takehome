// Define a map of password requirements and their descriptions
export const requirementsMap = {
  digits: 'Has a number 0-9',
  specialChars: 'Has a special char !@#$%^&*',
  uppercaseLetter: 'Has uppercase letter',
  noConsecutiveLetters: 'Has no consecutive letters',
} as const;
