import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Grid,
  Paper,
  Chip,
} from '@mui/material';
import { AiComparisonScenario } from '../../../types/home.types';

export interface AiFlightComparisonProps {
  scenario?: AiComparisonScenario;
  onCompareClick?: (scenario: AiComparisonScenario) => void;
}

export const AiFlightComparison: React.FC<AiFlightComparisonProps> = ({
  scenario,
  onCompareClick,
}) => {
  const data = scenario || {
    id: 'default-scenario',
    origin: 'Lima (LIM)',
    destination: 'Cusco (CUZ)',
    dateFormatted: '15 Sep 2025',
    modality: 'Ida y Vuelta',
    flight1: {
      id: 'f1',
      airlineName: 'Sky Airline',
      flightNumber: 'H25021',
      origin: 'LIM',
      destination: 'CUZ',
      price: 120,
      currency: 'S/.',
      durationFormatted: '1h 20m',
      stopsCount: 0,
    },
    flight2: {
      id: 'f2',
      airlineName: 'LATAM',
      flightNumber: 'LA2040',
      origin: 'LIM',
      destination: 'CUZ',
      price: 145,
      currency: 'S/.',
      durationFormatted: '1h 15m',
      stopsCount: 0,
    },
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, lg: 8 },
        bgcolor: 'customBackgrounds.appBase',
        borderTop: 1,
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Stack spacing={4}>
          {/* Header with AI Pill Badge */}
          <Stack spacing={1.5} alignItems="flex-start">
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.75,
                py: 0.75,
                bgcolor: 'soft.primary',
                border: 1,
                borderColor: 'warning.main',
                borderRadius: '100px',
              }}
            >
              <Box sx={{ color: 'primary.main', display: 'flex' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/>
                </svg>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                }}
              >
                RECOMENDACIÓN IA
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                color: 'secondary.main',
                fontWeight: 800,
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                lineHeight: 1.3,
              }}
            >
              ¿No sabes cuál vuelo elegir?
            </Typography>
          </Stack>

          {/* Quick Selection Filter Badges */}
          <Grid container spacing={2}>
            {[
              { label: 'Origen', value: data.origin },
              { label: 'Destino', value: data.destination },
              { label: 'Fecha', value: data.dateFormatted },
              { label: 'Modalidad', value: data.modality },
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={`filter-${idx}`}>
                <Stack spacing={0.75}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    {item.label}
                  </Typography>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 1.5,
                      borderRadius: 1.5,
                      border: 1,
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {item.value}
                    </Typography>
                    <Box sx={{ color: 'text.secondary', display: 'flex' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </Box>
                  </Paper>
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* Comparison Cards + VS Widget */}
          <Stack spacing={2}>
            <Typography variant="h5" sx={{ color: 'secondary.main', fontWeight: 600, fontSize: '1rem' }}>
              Selecciona 2 vuelos para comparar
            </Typography>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              alignItems={{ xs: 'stretch', md: 'center' }}
              spacing={2}
            >
              {/* Flight 1 Card */}
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  p: 2,
                  borderRadius: 1.5,
                  border: 1,
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                }}
              >
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 0.5 }}>
                  Vuelo 1
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                  {data.flight1.airlineName} - {data.flight1.origin} → {data.flight1.destination} - {data.flight1.currency} {data.flight1.price} - {data.flight1.durationFormatted}
                </Typography>
              </Paper>

              {/* VS Badge */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(160, 27, 45, 0.3)',
                }}
              >
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    fontSize: '0.875rem',
                    fontStyle: 'italic',
                    fontWeight: 900,
                  }}
                >
                  VS
                </Typography>
              </Box>

              {/* Flight 2 Card */}
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  p: 2,
                  borderRadius: 1.5,
                  border: 1,
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                }}
              >
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 0.5 }}>
                  Vuelo 2
                </Typography>
                <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                  {data.flight2.airlineName} - {data.flight2.origin} → {data.flight2.destination} - {data.flight2.currency} {data.flight2.price} - {data.flight2.durationFormatted}
                </Typography>
              </Paper>

              {/* Compare Action Button */}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onCompareClick?.(data)}
                endIcon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                }
                sx={{
                  height: { xs: 48, md: 52 },
                  px: 3,
                  borderRadius: 1.5,
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                }}
              >
                Comparar
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AiFlightComparison;
