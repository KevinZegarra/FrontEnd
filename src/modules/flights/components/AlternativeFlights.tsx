import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import { AlternativeFlight } from '../../../types/flightDetail.types';

export interface AlternativeFlightsProps {
  alternatives: AlternativeFlight[];
  onSelectAlternative?: (alt: AlternativeFlight) => void;
}

export const AlternativeFlights: React.FC<AlternativeFlightsProps> = ({
  alternatives,
  onSelectAlternative,
}) => {
  return (
    <Stack spacing={2.5}>
      <Typography
        variant="h3"
        sx={{
          color: 'secondary.main',
          fontWeight: 800,
          fontSize: { xs: '1.25rem', md: '1.375rem' },
        }}
      >
        Vuelos alternativos recomendados
      </Typography>

      <Stack spacing={2}>
        {alternatives.map((alt) => (
          <Paper
            key={alt.id}
            elevation={0}
            sx={{
              p: 2.5,
              bgcolor: 'background.paper',
              borderRadius: 3,
              border: 1,
              borderColor: 'divider',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.2s ease',
              '&:hover': {
                borderColor: 'primary.light',
                boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              spacing={{ xs: 2, sm: 3 }}
            >
              {/* Airline Col */}
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ minWidth: { sm: 160 } }}>
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    bgcolor: 'primary.main',
                    borderRadius: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
                  </svg>
                </Box>
                <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.875rem' }}>
                  {alt.airline.name}
                </Typography>
              </Stack>

              {/* Schedule Line */}
              <Stack direction="row" alignItems="center" spacing={2} sx={{ flex: 1, maxWidth: { sm: 260 } }}>
                <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.925rem' }}>
                  {alt.departureTime}
                </Typography>

                <Box sx={{ flex: 1, textAlign: 'center' }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.6875rem', display: 'block', mb: 0.25 }}>
                    {alt.durationFormatted}
                  </Typography>
                  <Divider sx={{ borderColor: 'divider' }} />
                </Box>

                <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.925rem' }}>
                  {alt.arrivalTime}
                </Typography>
              </Stack>

              {/* Price & Selection CTA */}
              <Stack direction="row" alignItems="center" spacing={2} sx={{ alignSelf: { xs: 'flex-end', sm: 'center' } }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                  }}
                >
                  {alt.currency} {alt.price}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => onSelectAlternative?.(alt)}
                  sx={{
                    px: 2,
                    py: 0.75,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    borderRadius: 1.5,
                  }}
                >
                  Seleccionar
                </Button>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
};

export default AlternativeFlights;
