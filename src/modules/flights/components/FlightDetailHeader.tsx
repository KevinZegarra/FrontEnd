import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Divider,
  Paper,
} from '@mui/material';
import { FlightDetail } from '../../../types/flightDetail.types';

export interface FlightDetailHeaderProps {
  flight: FlightDetail;
}

export const FlightDetailHeader: React.FC<FlightDetailHeaderProps> = ({ flight }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        p: { xs: 2.5, sm: 3.5, md: 4 },
        bgcolor: 'background.paper',
        borderRadius: 4,
        border: 1,
        borderColor: 'divider',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Stack spacing={3}>
        {/* Top Row: Airline, Flight Code & Date Badge */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* Airline Logo Badge */}
            <Box
              sx={{
                width: 48,
                height: 48,
                bgcolor: 'primary.main',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
              </svg>
            </Box>

            <Box>
              <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                {flight.airline.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
                Vuelo {flight.flightNumber} · {flight.aircraftModel}
              </Typography>
            </Box>
          </Stack>

          {/* Date Tag */}
          <Box
            sx={{
              px: 1.75,
              py: 0.75,
              bgcolor: 'soft.primary',
              borderRadius: 1.5,
              alignSelf: { xs: 'flex-start', sm: 'center' },
            }}
          >
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.8125rem' }}>
              {flight.dateFormatted}
            </Typography>
          </Box>
        </Stack>

        <Divider />

        {/* Itinerary Matrix (Departure -> Flight Time & Indicator -> Arrival) */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={{ xs: 3, md: 5 }}
        >
          {/* Departure Column */}
          <Box sx={{ minWidth: { md: 140 } }}>
            <Typography
              variant="h1"
              sx={{
                color: 'secondary.main',
                fontWeight: 800,
                fontSize: { xs: '1.75rem', md: '2rem' },
                lineHeight: 1.1,
              }}
            >
              {flight.departureTime}
            </Typography>
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.925rem' }}>
              {flight.originIata}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', display: 'block' }}>
              {flight.originAirportName}, {flight.originCity}
            </Typography>
          </Box>

          {/* Center Connection Indicator */}
          <Box sx={{ flex: 1, width: '100%', textAlign: 'center', px: { md: 2 } }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.8125rem', mb: 0.5, display: 'block' }}>
              {flight.durationFormatted}
            </Typography>

            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', my: 1 }}>
              <Divider sx={{ flexGrow: 1, borderColor: 'divider', borderWidth: 1 }} />
              <Box sx={{ color: 'info.main', display: 'flex', mx: 1 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </Box>
              <Divider sx={{ flexGrow: 1, borderColor: 'divider', borderWidth: 1 }} />
            </Box>

            <Box
              sx={{
                display: 'inline-flex',
                px: 1.5,
                py: 0.5,
                bgcolor: 'soft.success',
                borderRadius: '100px',
                mt: 0.5,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'success.dark',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                }}
              >
                {flight.stopsFormatted}
              </Typography>
            </Box>
          </Box>

          {/* Arrival Column */}
          <Box sx={{ minWidth: { md: 140 }, textAlign: { xs: 'left', md: 'right' } }}>
            <Typography
              variant="h1"
              sx={{
                color: 'secondary.main',
                fontWeight: 800,
                fontSize: { xs: '1.75rem', md: '2rem' },
                lineHeight: 1.1,
              }}
            >
              {flight.arrivalTime}
            </Typography>
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.925rem' }}>
              {flight.destinationIata}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', display: 'block' }}>
              {flight.destinationAirportName}, {flight.destinationCity}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default FlightDetailHeader;
