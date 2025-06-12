import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Contacts from './pages/Contacts';
import Pages from './pages/Pages';
// import Login from './pages/Login';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <AppNavbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/book" element={<Book />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/pages" element={<Pages />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </Container>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
