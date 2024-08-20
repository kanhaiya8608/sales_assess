// FormBuilderApp.js
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../utils/validationSchemas';
import FormInputField from './FormInputField';
import ImportJsonModal from './ImportJsonModal';
import { useNavigate } from 'react-router-dom';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import toast from 'react-hot-toast';

const FormBuilderApp = () => {
  const [inputFields, setInputFields] = useState([]);
  const [formTitle, setFormTitle] = useState('My Form');
  const [formDescription, setFormDescription] = useState('');
  const [previewOpen] = useState(false);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu
  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { fields: [] }
  });

  const { reset } = methods;

  const insertInputField = (fieldType) => {
    setInputFields([...inputFields, { type: fieldType, label: '', id: Date.now(), options: [] }]);
    setDropdownOpen(false); // Close the dropdown menu after adding a field
  };

  const deleteInputField = (id) => {
    setInputFields(inputFields.filter((field) => field.id !== id));
  };

  const updateInputField = (id, newProps) => {
    setInputFields(inputFields.map((field) => (field.id === id ? { ...field, ...newProps } : field)));
  };

  const handlePreview = () => {
    navigate('/preview', { state: { formTitle, formDescription, fields: inputFields } });
  };

  const handleCopyJson = () => {
    const formConfig = { title: formTitle, description: formDescription, fields: inputFields };
    navigator.clipboard.writeText(JSON.stringify(formConfig)).then(() => {
      toast.success('Form JSON copied to clipboard!');
    }).catch(() => {
      toast.error('Failed to copy JSON to clipboard');
    });
  };

  const handleImportJson = (json) => {
    try {
      const importedConfig = JSON.parse(json);
      if (importedConfig) {
        setInputFields(importedConfig.fields);
        setFormTitle(importedConfig.title);
        setFormDescription(importedConfig.description);
        reset(importedConfig);
        toast.success('Form JSON imported successfully!');
      }
    } catch (error) {
      toast.error('Failed to parse JSON: ' + error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dynamic Form Builder</h1>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Form Title:</label>
          <input
            type="text"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Enter form title"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Form Description:</label>
          <textarea
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Enter form description"
            rows="4"
          />
        </div>
        <div className="relative mb-6">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded flex items-center"
          >
            {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            <span className="ml-2">Add Field</span>
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
              <button onClick={() => insertInputField('text')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Text Field
              </button>
              <button onClick={() => insertInputField('number')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Number Field
              </button>
              <button onClick={() => insertInputField('dropdown')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Dropdown Field
              </button>
              <button onClick={() => insertInputField('checkbox')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Checkbox Field
              </button>
              <button onClick={() => insertInputField('radio')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Radio Button Field
              </button>
              <button onClick={() => insertInputField('textarea')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Textarea Field
              </button>
              <button onClick={() => insertInputField('date')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Date Field
              </button>
              <button onClick={() => insertInputField('file')} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                File Field
              </button>
            </div>
          )}
        </div>
        <div className="mb-6">
          {inputFields.map((field) => (
            <FormInputField
              key={field.id}
              field={field}
              deleteInputField={deleteInputField}
              updateInputField={updateInputField}
              isPreview={previewOpen} // Pass `isPreview` here
            />
          ))}
        </div>
        <div className="mb-6 space-x-2">
          <button onClick={() => setImportModalOpen(true)} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Import JSON</button>
          <button onClick={handleCopyJson} className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">Copy JSON</button>
          <button onClick={handlePreview} className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Preview Form</button>
        </div>
        <ImportJsonModal isOpen={importModalOpen} onRequestClose={() => setImportModalOpen(false)} onImport={handleImportJson} />
      </div>
    </FormProvider>
  );
};

export default FormBuilderApp;
