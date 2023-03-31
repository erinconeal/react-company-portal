import { ChangeEvent, forwardRef } from "react";

interface FormInputFieldProps {
  id: string;
  labelText: string;
  inputType: string;
  isRequired: boolean;
  value: string;
  onInputChange: (value: string) => void;
  hasError: boolean;
  errorMessage: string;
}

const FormInputField = forwardRef<HTMLInputElement, FormInputFieldProps>(
  (props, ref) => {
    const {
      id,
      labelText,
      inputType,
      isRequired,
      value,
      onInputChange,
      hasError,
      errorMessage,
    } = props;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onInputChange(value);
    };

    return (
      <div className="form-input">
        <label htmlFor={id}>
          {labelText} {isRequired && "(required)"}
        </label>
        <input
          type={inputType}
          id={id}
          required={isRequired}
          aria-required={isRequired ? "true" : "false"}
          value={value}
          onChange={handleInputChange}
          ref={ref}
        />
        <div aria-live="polite">
          {hasError && (
            <div className="text-red-600" id={`${id}Error`}>
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    );
  }
);

FormInputField.displayName = "FormInputField";
export default FormInputField;
