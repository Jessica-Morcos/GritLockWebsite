import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import LandingPage from './LandingPage';
import PrivacyPolicy from './PrivacyPolicy';
import AboutPage from './AboutPage';
import ContactUsPage from './ContactUs';

function App() {
  return (
    <Router>
      <LoadingScreen />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
