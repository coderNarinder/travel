import { FieldError } from 'react-hook-form';

const FormInputText = ({
  label,
  name,
  register,
  errors = {},
  placeholder = '',
}) => {
  return (
    <div className="mb-3 form-group" id={`formGroup${String(name)}`}>
      <label>{label}</label>
      <input
        className='form-control'
        type="text"
        {...register(name, { required: 'This field is required' })}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="text-danger text-right">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default FormInputText;
