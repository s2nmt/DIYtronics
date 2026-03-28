import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import App from './App';
import '../styles.css';
import './styles/mobile-nav.css';

const rawBase = import.meta.env.BASE_URL || '/';
const routerBasename = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');

createRoot(rootEl).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename || undefined}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
