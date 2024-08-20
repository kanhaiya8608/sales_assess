import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onRequestClose, responses }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">Form Responses</h2>
        <div className="space-y-2">
          {Object.keys(responses).map((key, index) => (
            <div key={index} className="flex justify-between">
              <span className="font-semibold">{key}:</span>
              <span>{Array.isArray(responses[key]) ? responses[key].join(', ') : responses[key]}</span>
            </div>
          ))}
        </div>
        <button
          onClick={onRequestClose}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  responses: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string)
  ])).isRequired,
};

export default Modal;
