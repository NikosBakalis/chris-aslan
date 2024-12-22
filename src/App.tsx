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
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

const App: React.FC = () => {
  const basename = process.env.PUBLIC_URL || ''; // This will set the basename to your repository name

  let theme = createTheme({
    typography: {
      fontFamily: 'Raleway, Arial',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router basename={basename}>
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
    </ThemeProvider>
  );
}

export default App;
