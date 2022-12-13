// Define the event handler for the onChange event
import { ChangeEvent } from 'react';

import { validationRules } from '@utils';

export function handleChange(event: ChangeEvent<HTMLInputElement>) {
  // Get the value and input type from the event
  const {
    value, type,
  } = event.target;

  // Get the validation rule for the input type
  const validationRule = validationRules[type];


  if (validationRule) {
    // Check if the value matches the regular expression
    const isValid = validationRule.regex.test(value);

    if (!isValid) {
      // Show an error message if the value is not valid
      console.log(validationRule.message);
    }
  }
}
