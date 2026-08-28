import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from './theme';

// Importación de Páginas de los Módulos
import Home from './modules/home/pages/Home';
import SearchResultsPage from './modules/flights/pages/SearchResultsPage';
import FlightDetailPage from './modules/flights/pages/FlightDetailPage';
import CompareFlightsPage from './modules/compare/pages/CompareFlightsPage';
import FlightTrackerPage from './modules/tracker/pages/FlightTrackerPage';
import LoginPage from './modules/auth/pages/LoginPage';

// Inicialización de React Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutos de cache
    },
  },
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            {/* 1. Página Principal (Hero, Buscador, Destinos, Banner IA) */}
            <Route path="/" element={<Home />} />

            {/* 2. Búsqueda y Resultados de Vuelos */}
            <Route path="/flights" element={<SearchResultsPage />} />
            <Route path="/flights/search" element={<SearchResultsPage />} />

            {/* 3. Detalle de Vuelo */}
            <Route path="/flights/:id" element={<FlightDetailPage />} />

            {/* 4. Comparador de Vuelos */}
            <Route path="/compare" element={<CompareFlightsPage />} />

            {/* 5. Rastreador y Estado de Vuelo en Vivo */}
            <Route path="/tracker" element={<FlightTrackerPage />} />
            <Route path="/tracker/:flightId" element={<FlightTrackerPage />} />

            {/* 6. Autenticación */}
            <Route path="/login" element={<LoginPage />} />

            {/* Redirección por defecto para rutas no encontradas */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
