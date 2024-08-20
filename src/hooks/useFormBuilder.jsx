import { useState } from 'react';

export const useFormBuilder = () => {
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    setFields([...fields, { type, label: '', value: '' }]);
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  return {
    fields,
    addField,
    removeField,
  };
};
