import { useState } from 'react';
import PropTypes from 'prop-types';

const FormInputField = ({ field, deleteInputField, updateInputField, isPreview }) => {
  const [newOption, setNewOption] = useState('');

  const handleLabelChange = (e) => {
    updateInputField(field.id, { label: e.target.value });
  };

  const handleAddOption = () => {
    if (newOption) {
      updateInputField(field.id, { options: [...field.options, newOption] });
      setNewOption('');
    }
  };

  const handleOptionChange = (index, e) => {
    const updatedOptions = [...field.options];
    updatedOptions[index] = e.target.value;
    updateInputField(field.id, { options: updatedOptions });
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = field.options.filter((_, i) => i !== index);
    updateInputField(field.id, { options: updatedOptions });
  };

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {isPreview ? (
          <span>{field.label}</span>
        ) : (
          <input
            type="text"
            value={field.label}
            onChange={handleLabelChange}
            placeholder="Field label"
            className="border border-gray-300 p-2 rounded w-full"
          />
        )}
      </label>

      {field.type === 'text' && (
        <>
          <input
            type="text"
            readOnly={isPreview}
            placeholder={isPreview ? '' : 'Enter text here'}
            className="border border-gray-300 p-2 rounded w-full"
         disabled />
          {!isPreview && (
            <>
              <input
                type="number"
                value={field.minLength || ''}
                onChange={(e) => updateInputField(field.id, { minLength: e.target.value })}
                placeholder="Min Length"
                className="border border-gray-300 p-2 rounded w-full mt-2"
           />
              <input
                type="number"
                value={field.maxLength || ''}
                onChange={(e) => updateInputField(field.id, { maxLength: e.target.value })}
                placeholder="Max Length"
                className="border border-gray-300 p-2 rounded w-full mt-2"
           />
              <select
                value={field.format || ''}
                onChange={(e) => updateInputField(field.id, { format: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full mt-2"
              >
                <option value="">Select Format</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="phone">Name</option>
              </select>
            </>
          )}
        </>
      )}
      {field.type === 'number' && (
        <input
          type="number"
          readOnly={isPreview}
          placeholder={isPreview ? '' : 'Enter number here'}
          className="border border-gray-300 p-2 rounded w-full"
          disabled
        />
      )}
      {field.type === 'textarea' && (
        <textarea
          readOnly={isPreview}
          placeholder={isPreview ? '' : 'Enter text here'}
          className="border border-gray-300 p-2 rounded w-full"
          rows="4"
          disabled
        />
      )}
      {field.type === 'dropdown' && (
        <div className="relative">
          <select
            disabled={isPreview}
            className="border border-gray-300 p-2 rounded w-full"
          >
            {field.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
          {!isPreview && (
            <div className="mt-2">
              <input
                type="text"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
                placeholder="New option"
                className="border border-gray-300 p-2 rounded w-full"
              />
              <button
                onClick={handleAddOption}
                className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
              >
                Add Option
              </button>
            </div>
          )}
        </div>
      )}
      {field.type === 'checkbox' && (
        <div>
          {field.options.map((option, i) => (
            <div key={i} className="flex items-center mb-2">
              <input
                type="checkbox"
                disabled={isPreview}
                className="mr-2"
              />
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(i, e)}
                readOnly={isPreview}
                placeholder="Option"
                className="border border-gray-300 p-2 rounded w-full"
              />
              {!isPreview && (
                <button
                  onClick={() => handleRemoveOption(i)}
                  className="ml-2 bg-red-500 text-white p-1 rounded"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          {!isPreview && (
            <div className="mt-2">
              <input
                type="text"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
                placeholder="New option"
                className="border border-gray-300 p-2 rounded w-full"
              />
              <button
                onClick={handleAddOption}
                className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
              >
                Add Option
              </button>
            </div>
          )}
        </div>
      )}
      {field.type === 'radio' && (
        <div>
          {field.options.map((option, i) => (
            <div key={i} className="flex items-center mb-2">
              <input
                type="radio"
                name={`radio-${field.id}`}
                value={option}
                disabled={isPreview}
                className="mr-2"
              />
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(i, e)}
                readOnly={isPreview}
                placeholder="Option"
                className="border border-gray-300 p-2 rounded w-full"
              />
              {!isPreview && (
                <button
                  onClick={() => handleRemoveOption(i)}
                  className="ml-2 bg-red-500 text-white p-1 rounded"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          {!isPreview && (
            <div className="mt-2">
              <input
                type="text"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
                placeholder="New option"
                className="border border-gray-300 p-2 rounded w-full"
              />
              <button
                onClick={handleAddOption}
                className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
              >
                Add Option
              </button>
            </div>
          )}
        </div>
      )}
      {field.type === 'date' && (
        <input
          type="date"
          readOnly={isPreview}
          className="border border-gray-300 p-2 rounded w-full"
        />
      )}
      {field.type === 'file' && (
        <>
          <input
            type="file"
            accept={field.fileType || '*'}
            disabled={isPreview}
            className="border border-gray-300 p-2 rounded w-full"
          />
          {!isPreview && (
            <>
              <input
                type="number"
                value={field.maxSize || ''}
                onChange={(e) => updateInputField(field.id, { maxSize: e.target.value })}
                placeholder="Max File Size (MB)"
                className="border border-gray-300 p-2 rounded w-full mt-2"
              />
            </>
          )}
        </>
      )}

      {!isPreview && (
        <button
          onClick={() => deleteInputField(field.id)}
          className="mt-2 bg-red-500 text-white p-2 rounded"
        >
          Delete Field
        </button>
      )}
    </div>
  );
};

FormInputField.propTypes = {
  field: PropTypes.object.isRequired,
  deleteInputField: PropTypes.func.isRequired,
  updateInputField: PropTypes.func.isRequired,
  isPreview: PropTypes.bool.isRequired,
};

export default FormInputField;
