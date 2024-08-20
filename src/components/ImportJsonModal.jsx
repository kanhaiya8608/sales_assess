import { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
Modal.setAppElement('#root'); 

const modalLayout = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '500px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    border: 'none',
  },
};
const ImportJsonModal = ({ isOpen, onRequestClose, onImport }) => {
  const [json, setJson] = useState('');

  const handleImport = () => {
    onImport(json);
    setJson('');
    onRequestClose();
  };

  return (
    <Modal  style={modalLayout} isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Import JSON">
      <h2 className='text-2xl font-bold py-3'>Import JSON</h2>
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
