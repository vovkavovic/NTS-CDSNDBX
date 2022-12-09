import { Field, InputType } from '@types';

interface InputProps extends Field {
  class: NonNullable<string>;
  conditional: NonNullable<string>;
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  type: InputType;
}
function InputField({
  class: className,

  /* Conditional, */
  label,
  name,
  placeholder,
  required,
  type,
}: InputProps) {
  return (
    <>
      <label
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        required={required}
      />
    </>
  );
}

export default InputField;
