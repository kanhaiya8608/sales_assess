import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormBuilderApp from './components/FormBuilderApp';
import PreviewForm from './components/PreviewForm';
import { Toaster } from 'react-hot-toast'; // Import Toaster

function App() {
  return (
    <Router>
      <Toaster /> {/* Add Toaster component here */}
      <Routes>
        <Route path="/" element={<FormBuilderApp />} />
        <Route path="/preview" element={<PreviewForm />} />
      </Routes>
    </Router>
  );
}

export default App;
