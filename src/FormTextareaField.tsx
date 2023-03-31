import { ChangeEvent, forwardRef } from "react";

interface FormTextareaFieldProps {
  id: string;
  labelText: string;
  isRequired: boolean;
  value: string;
  onInputChange: (value: string) => void;
  hasError: boolean;
  errorMessage: string;
  rowNumber?: number;
}

const FormTextareaField = forwardRef<
  HTMLTextAreaElement,
  FormTextareaFieldProps
>((props, ref) => {
  const {
    id,
    labelText,
    isRequired,
    value,
    onInputChange,
    hasError,
    errorMessage,
    rowNumber,
  } = props;

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onInputChange(value);
  };

  return (
    <div className="form-input">
      <label htmlFor={id}>
        {labelText} {isRequired && "(required)"}
      </label>
      <textarea
        id={id}
        required={isRequired}
        aria-required={isRequired ? "true" : "false"}
        value={value}
        onChange={handleInputChange}
        ref={ref}
        rows={rowNumber ? rowNumber : 4}
      ></textarea>
      <div aria-live="polite">
        {hasError && (
          <div className="text-red-600" id={`${id}Error`}>
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
});

FormTextareaField.displayName = "FormTextareaField";
export default FormTextareaField;
