import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Robotmaaiers from './pages/Robotmaaiers';
import Configurator from './pages/Configurator';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/robotmaaiers" element={<Robotmaaiers />} />
          <Route path="/configurator" element={<Configurator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
