import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const FormFieldConfig = ({ index, field }) => {
  const { register } = useFormContext();

  const renderField = () => {
    switch (field.type) {
      case 'text':
        return <input type="text" {...register(`fields.${index}.value`)} />;
      case 'number':
        return <input type="number" {...register(`fields.${index}.value`)} />;
      case 'textarea':
        return <textarea {...register(`fields.${index}.value`)} />;
      case 'dropdown':
        return (
          <select {...register(`fields.${index}.value`)}>
            {field.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <div>
            {field.options.map((option, i) => (
              <label key={i}>
                <input type="checkbox" {...register(`fields.${index}.value`)} value={option} />
                {option}
              </label>
            ))}
          </div>
        );
      case 'radio':
        return (
          <div>
            {field.options.map((option, i) => (
              <label key={i}>
                <input type="radio" {...register(`fields.${index}.value`)} value={option} />
                {option}
              </label>
            ))}
          </div>
        );
      case 'date':
        return <input type="date" {...register(`fields.${index}.value`)} />;
      case 'file':
        return <input type="file" {...register(`fields.${index}.value`)} />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-4">
      <label>
        {field.label}
      </label>
      {renderField()}
    </div>
  );
};

FormFieldConfig.propTypes = {
  index: PropTypes.number.isRequired,
  field: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default FormFieldConfig;
