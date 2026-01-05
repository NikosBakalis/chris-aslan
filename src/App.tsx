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
    palette: {
      primary: {
        main: '#1565C0',
        light: '#42a5f5',
        dark: '#0d47a1',
      },
      secondary: {
        main: '#9e9e9e',
        light: '#e0e0e0',
        dark: '#616161',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Raleway, Arial, sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
        lineHeight: 1.4,
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.5,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            borderRadius: 8,
          },
        },
      },
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
