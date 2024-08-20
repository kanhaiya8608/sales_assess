import { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
// Set the app element for react-modal accessibility
Modal.setAppElement('#root'); // Ensure this matches your app root element

const ImportJsonModal = ({ isOpen, onRequestClose, onImport }) => {
  const [json, setJson] = useState('');

  const handleImport = () => {
    onImport(json);
    setJson('');
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Import JSON">
      <h2>Import JSON</h2>
      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        placeholder="Paste your JSON here"
        rows="10"
        className="border p-2 rounded w-full"
      />
      <button onClick={handleImport} className="bg-blue-500 text-white p-2 rounded">
        Import
      </button>
      <button onClick={onRequestClose} className="bg-gray-500 text-white p-2 rounded ml-2">
        Close
      </button>
    </Modal>
  );
};

ImportJsonModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onImport: PropTypes.func.isRequired,
};

export default ImportJsonModal;
