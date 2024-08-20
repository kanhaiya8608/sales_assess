import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import toast from 'react-hot-toast';

const PreviewForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formTitle, formDescription, fields } = location.state || {};

  const [responses, setResponses] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formResponses = {};
  
    fields.forEach((field) => {
      if (field.type === 'radio') {
        formResponses[field.label] = formData.get(`radio-${field.id}`);
      } else if (field.type === 'checkbox') {
        formResponses[field.label] = formData.getAll(field.label);
      } else {
        formResponses[field.label] = formData.get(field.label);
      }
    });

    // Handle file inputs
    fields.forEach((field) => {
      if (field.type === 'file') {
        formResponses[field.label] = formData.getAll(field.label);
      }
    });

    setResponses(formResponses);
    setIsModalOpen(true);
    toast.success('Form submitted successfully!');
  };

  return (
    <div className="m-4 p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">{formTitle}</h1>
      <p className="mb-6 text-gray-600">{formDescription}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              {field.label}
              {field.type === 'text' && (
                <input
                  name={field.label}
                  type="text"
                  className="border border-gray-300 p-2 rounded w-full mt-1"
                />
              )}
              {field.type === 'number' && (
                <input
                  name={field.label}
                  type="number"
                  className="border border-gray-300 p-2 rounded w-full mt-1"
                />
              )}
              {field.type === 'textarea' && (
                <textarea
                  name={field.label}
                  className="border border-gray-300 p-2 rounded w-full mt-1"
                />
              )}
              {field.type === 'dropdown' && (
                <select
                  name={field.label}
                  className="border border-gray-300 p-2 rounded w-full mt-1"
                >
                  {field.options.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              {field.type === 'checkbox' && (
                <div className="mt-1">
                  {field.options.map((option, i) => (
                    <label key={i} className="block text-sm font-medium text-gray-700">
                      <input
                        type="checkbox"
                        name={field.label}
                        value={option}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {field.type === 'radio' && (
                <div className="mt-1">
                  {field.options.map((option, i) => (
                    <label key={i} className="block text-sm font-medium text-gray-700">
                      <input
                        type="radio"
                        name={`radio-${field.id}`}
                        value={option}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {field.type === 'date' && (
                <input
                  name={field.label}
                  type="date"
                  className="border border-gray-300 p-2 rounded w-full mt-1"
                />
              )}
              {field.type === 'file' && (
                <input
                  name={field.label}
                  type="file"
                  className="border border-gray-300 p-2 rounded w-full mt-1"
                  multiple // Allow multiple files if needed
                />
              )}
            </label>
          </div>
        ))}
        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Back
          </button>
        </div>
      </form>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} responses={responses} />
    </div>
  );
};

export default PreviewForm;
