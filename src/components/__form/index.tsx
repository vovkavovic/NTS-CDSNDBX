import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import type { Field, InputType } from '@types';
import { /* Capitalize*/ isValid } from '@utils';

import { useStyles } from './useStyles';

interface FormProps {
    fields: Field[];
}

function FormField(field: Field, index: number) {
  // Create a new function for checking if a value is a valid InputType value
  const isValidInputType = isValid<InputType>([field.type]);

  /*
   * If the component type is a valid InputType,
   * dynamically import the component and render it.
   */
  if (isValidInputType(field.type)) {
    // The value of the `fild.type` is a valid InputType value
    const Component = dynamic(() => {
      return import('@components/__form/InputField');
    });

    return <Component {...field} key={index} />;
  }

  // Otherwise, return an error message
  console.error(`No module found for ${field.type}!. Please provide an existing module or change the module type.`);
  return <div>Unknown field type: {field.type}</div>;
}

function MyForm({ fields }: FormProps) {
  const { classes } = useStyles({});
  const [
    formFields,
    setFormFields,
  ] = useState<Field[] | []>([]);

  // On mount set formFields
  useEffect(() => {
    setFormFields(fields);
  }, [fields]);

  return (
    <form className={classes.formRoot}>
      {formFields.map((field, index) => {
        return FormField(field, index);
      })}
    </form>
  );
}

export default MyForm;
