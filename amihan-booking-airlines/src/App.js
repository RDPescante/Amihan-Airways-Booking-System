import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserProvider } from './context/UserContext';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import About from './pages/AboutUs/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Pages from './pages/Pages';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ResetPassword from './pages/ResetPassword/ResetPassword'; // ✅ Import Reset modal
import Container from 'react-bootstrap/Container';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showReset, setShowReset] = useState(false); // ✅ Add reset state

  // ✅ Lock scroll when any modal is open
  useEffect(() => {
    document.body.style.overflow =
      showLogin || showRegister || showReset ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLogin, showRegister, showReset]);

  return (
    <UserProvider>
      <Router>
        <AppNavbar onLoginClick={() => setShowLogin(true)} />

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pages" element={<Pages />} />
          </Routes>
        </Container>

        {/* ✅ Login Modal */}
        <Login
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
          onForgotPassword={() => {
            setShowLogin(false);
            setShowReset(true);
          }}
        />

        {/* ✅ Register Modal */}
        <Register
          isOpen={showRegister}
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />

        {/* ✅ Reset Password Modal */}
        <ResetPassword
          isOpen={showReset}
          onClose={() => setShowReset(false)}
          onBackToLogin={() => {
            setShowReset(false);
            setShowLogin(true);
          }}
        />
      </Router>
    </UserProvider>
  );
}

export default App;
