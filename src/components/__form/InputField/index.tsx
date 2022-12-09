import { Field, InputType } from '@types';

interface InputProps {
  class: NonNullable<string>;
  conditional?: string;
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  type: InputType;
}
function InputField({
  class: className,
  /* conditional, */
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
