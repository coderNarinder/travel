import { ReactNode, forwardRef } from 'react';
import { UseFormRegister, FieldValues, RegisterOptions, Path } from 'react-hook-form';

const Textfield = (
  {
    label,
    inputType,
    inputId,
    placeholder,
    value,
    labelClassName = "col-sm-3 control-label col-form-label",
    inputClassName = "form-control",
    containerClassName = "form-group row",
    rows = 4,
    autoComplete = 'on',
    disabled = false,
    error,
    register,
    name
  },
  ref
) => {
  return (
    <div className={containerClassName}>
      <label htmlFor={inputId} className={labelClassName}>
        {typeof label === 'string' ? (
          <span dangerouslySetInnerHTML={{ __html: label }} />
        ) : (
          label
        )}
      </label>
      <div className="col-sm-9">
        {inputType === 'textarea' ? (
          <textarea
            id={inputId}
            className={inputClassName}
            placeholder={placeholder}
            value={value as string} // `value` should be string for textarea
            rows={rows}
            autoComplete={autoComplete}
            disabled={disabled}
            {...(register && name ? register(name, { required: 'Business Name is required' } as RegisterOptions) : {})}
            ref={ref}
          />
        ) : (
          <input
            type={inputType}
            className={inputClassName}
            id={inputId}
            placeholder={placeholder}
            value={value as string} // `value` should be string for input
            autoComplete={autoComplete}
            disabled={disabled}
            {...(register && name ? register(name, { required: 'Business Name is required' } as RegisterOptions) : {})}
            ref={ref}
          />
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

const ForwardedTextfield = forwardRef(Textfield);
ForwardedTextfield.displayName = 'Textfield';

export default ForwardedTextfield;
