import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Gallery from './components/Gallary';
import ContactUs from './components/ContactUs';
import Booking from './components/Booking';
import Offers from './components/Offers';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50 flex flex-col">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/gallary" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/offers" element={<Offers />} />
          {/* Add more routes for other pages as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;