import React, { useState } from 'react';
import {
  Box,
  Stack,
  Button,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { TripType, HeroSearchValues } from '../../../types/home.types';

export interface SearchFormProps {
  onSearch?: (searchValues: HeroSearchValues) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [tripType, setTripType] = useState<TripType>('ROUND_TRIP');
  const [origin, setOrigin] = useState('Lima (LIM)');
  const [destination, setDestination] = useState('Cusco (CUZ)');
  const [departureDate, setDepartureDate] = useState('15 Sep');
  const [returnDate, setReturnDate] = useState('20 Sep');
  const [passengers, setPassengers] = useState('1 Ad., Económica');

  const handleSearchSubmit = () => {
    onSearch?.({
      tripType,
      origin,
      destination,
      departureDate,
      returnDate: tripType === 'ROUND_TRIP' ? returnDate : undefined,
      passengers: 1,
      travelClass: 'ECONOMY',
    });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        p: { xs: 2.5, sm: 3.5, md: 4 },
        borderRadius: { xs: 2, md: 4 },
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        boxShadow: (theme) => theme.palette.mode === 'light' ? '0px 8px 30px rgba(0, 0, 0, 0.08)' : 'none',
      }}
    >
      {/* Trip Type Tabs */}
      <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
        <Box
          component="button"
          onClick={() => setTripType('ROUND_TRIP')}
          sx={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            pb: 0.8,
            borderBottom: tripType === 'ROUND_TRIP' ? 2 : 0,
            borderColor: 'primary.main',
            color: tripType === 'ROUND_TRIP' ? 'primary.main' : 'text.secondary',
            fontSize: '0.875rem',
            fontFamily: 'inherit',
            fontWeight: tripType === 'ROUND_TRIP' ? 600 : 500,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            transition: 'all 0.2s ease',
            '&:hover': { color: 'primary.main' },
          }}
        >
          Ida y vuelta
        </Box>

        <Box
          component="button"
          onClick={() => setTripType('ONE_WAY')}
          sx={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            pb: 0.8,
            borderBottom: tripType === 'ONE_WAY' ? 2 : 0,
            borderColor: 'primary.main',
            color: tripType === 'ONE_WAY' ? 'primary.main' : 'text.secondary',
            fontSize: '0.875rem',
            fontFamily: 'inherit',
            fontWeight: tripType === 'ONE_WAY' ? 600 : 500,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            transition: 'all 0.2s ease',
            '&:hover': { color: 'primary.main' },
          }}
        >
          Solo ida
        </Box>
      </Stack>

      {/* Inputs Grid */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {/* Origen */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Stack spacing={1}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              Origen
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                p: 1.75,
                borderRadius: 1,
                border: 1,
                borderColor: 'divider',
                bgcolor: 'customBackgrounds.input',
              }}
            >
              <Box sx={{ color: 'primary.main', display: 'flex' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                {origin}
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* Destino */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Stack spacing={1}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              Destino
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                p: 1.75,
                borderRadius: 1,
                border: 1,
                borderColor: 'divider',
                bgcolor: 'customBackgrounds.input',
              }}
            >
              <Box sx={{ color: 'warning.main', display: 'flex' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                {destination}
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* Fecha de Ida */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Stack spacing={1}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              Fecha de ida
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                p: 1.75,
                borderRadius: 1,
                border: 1,
                borderColor: 'divider',
                bgcolor: 'customBackgrounds.input',
              }}
            >
              <Box sx={{ color: 'text.secondary', display: 'flex' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                {departureDate}
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* Fecha de Regreso */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Stack spacing={1}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              Fecha de regreso
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                p: 1.75,
                borderRadius: 1,
                border: 1,
                borderColor: 'divider',
                bgcolor: tripType === 'ROUND_TRIP' ? 'customBackgrounds.input' : 'action.disabledBackground',
                opacity: tripType === 'ROUND_TRIP' ? 1 : 0.6,
              }}
            >
              <Box sx={{ color: 'text.secondary', display: 'flex' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                {tripType === 'ROUND_TRIP' ? returnDate : 'No aplica'}
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* Pasajeros y Clase */}
        <Grid item xs={12} sm={12} md={2.4}>
          <Stack spacing={1}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              Pasajeros y clase
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                p: 1.75,
                borderRadius: 1,
                border: 1,
                borderColor: 'divider',
                bgcolor: 'customBackgrounds.input',
              }}
            >
              <Box sx={{ color: 'text.secondary', display: 'flex' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                {passengers}
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* Bottom Row: Agency text & Search CTA */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'stretch', sm: 'center' }}
        spacing={2}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Box sx={{ color: 'warning.main', display: 'flex' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
            Comparando entre más de 15 agencias y aerolíneas locales.
          </Typography>
        </Stack>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSearchSubmit}
          endIcon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          }
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 700,
            borderRadius: 1,
          }}
        >
          Buscar vuelos
        </Button>
      </Stack>
    </Paper>
  );
};

export default SearchForm;
