import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Divider,
} from '@mui/material';
import { FlightTrackDetail } from '../../../types/tracker.types';

export interface FlightStatusBannerProps {
  flight: FlightTrackDetail;
}

export const FlightStatusBanner: React.FC<FlightStatusBannerProps> = ({ flight }) => {
  return (
    <Box
      sx={{
        width: '100%',
        px: { xs: 2.5, sm: 3 },
        py: 2,
        bgcolor: 'soft.primary',
        borderRadius: 3,
        border: 1,
        borderColor: 'primary.light',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        gap: 2,
      }}
    >
      {/* Información del Vuelo y Ruta */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={{ xs: 1.5, sm: 2 }}
        divider={<Divider orientation="vertical" flexItem sx={{ borderColor: 'primary.light', my: 0.5 }} />}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'primary.main',
            fontWeight: 800,
            fontSize: { xs: '1rem', sm: '1.125rem' },
          }}
        >
          Vuelo {flight.flightNumber}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'primary.dark',
            fontWeight: 600,
            fontSize: { xs: '0.8125rem', sm: '0.875rem' },
          }}
        >
          {flight.originCity} ({flight.originIata}) a {flight.destinationCity} ({flight.destinationIata})
        </Typography>
      </Stack>

      {/* Badges de Estado en Tiempo Real */}
      <Stack direction="row" spacing={1} alignItems="center">
        {/* Status Chip (En vuelo) */}
        <Box
          sx={{
            px: 1.5,
            py: 0.75,
            bgcolor: 'soft.success',
            borderRadius: '100px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              bgcolor: 'success.dark',
              borderRadius: '50%',
              boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)',
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: 'success.dark',
              fontWeight: 700,
              fontSize: '0.8125rem',
            }}
          >
            {flight.statusLabel}
          </Typography>
        </Box>

        {/* Punctuality Chip (A tiempo) */}
        <Box
          sx={{
            px: 1.5,
            py: 0.75,
            bgcolor: 'background.paper',
            borderRadius: '100px',
            border: 1,
            borderColor: 'primary.light',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '0.8125rem',
            }}
          >
            {flight.punctualityLabel}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default FlightStatusBanner;
