import { ValidationRule } from '@types';

export const validationRules: Record<string, ValidationRule> = {
  email: {
    regex: /^[^@]+@[^@.]+\.[^@]+$/,
    message: 'Please enter a valid email address.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Please enter a valid number.',
  },
  date: {
    regex: /^\d{4}-\d{2}-\d{2}$/,
    message: 'Please enter a valid date in the format YYYY-MM-DD.',
  },
  time: {
    regex: /^\d{2}:\d{2}$/,
    message: 'Please enter a valid time in the format HH:MM.',
  },
  tel: {
    regex: /^\d{3}-\d{3}-\d{4}$/,
    message: 'Please enter a valid telephone number in the format XXX-XXX-XXXX.',
  },
  url: {
    regex: /^https?:\/\/[^\s]+$/,
    message: 'Please enter a valid URL.',
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
    message: 'Please enter a strong password with at least 8 characters.',
  },
};
