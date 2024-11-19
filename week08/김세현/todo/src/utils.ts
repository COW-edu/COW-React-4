export const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
export const isValidPassword = (password: string) => password.length >= 8;
