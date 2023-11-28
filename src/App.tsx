import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import Lectures from './pages/Lectures';
import Tours from './pages/Tours';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/tours" element={<Tours />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
