import { ChangeEvent, useState } from 'react';

import { validationRules } from '@utils';

export const useInputValidation = () => {
  const [
    value,
    setValue,
  ] = useState('');
  const [
    error,
    setError,
  ] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setError(null);
  };

  const validate = (type: string) => {
    const rule = validationRules[type];

    if (rule && !rule.regex.test(value)) {
      setError(rule.message);
    }
  };

  return {
    value: value,
    error: error,
    onChange: handleChange,
    validate: validate,
  };
};
