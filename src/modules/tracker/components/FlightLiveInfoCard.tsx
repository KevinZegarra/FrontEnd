import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Divider,
  Paper,
  Grid,
} from '@mui/material';
import { FlightTrackDetail } from '../../../types/tracker.types';

export interface FlightLiveInfoCardProps {
  flight: FlightTrackDetail;
}

export const FlightLiveInfoCard: React.FC<FlightLiveInfoCardProps> = ({ flight }) => {
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
        <Typography
          variant="h3"
          sx={{
            color: 'secondary.main',
            fontWeight: 800,
            fontSize: { xs: '1.1rem', md: '1.2rem' },
          }}
        >
          Información de Vuelo
        </Typography>

        {/* Aerolínea & Operador */}
        <Stack direction="row" alignItems="center" spacing={1.75}>
          <Box
            sx={{
              width: 44,
              height: 44,
              bgcolor: 'primary.main',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              flexShrink: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
            </svg>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 800, fontSize: '0.95rem' }}>
              {flight.airline.name}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
              {flight.operatorName}
            </Typography>
          </Box>
        </Stack>

        <Divider />

        {/* Telemetría y Detalles Técnicos */}
        <Stack spacing={1.5}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
              Vuelo
            </Typography>
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.875rem' }}>
              {flight.flightNumber}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
              Aeronave
            </Typography>
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600, fontSize: '0.875rem' }}>
              {flight.aircraftModel}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
              Altitud
            </Typography>
            <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 600, fontSize: '0.875rem' }}>
              {flight.telemetry.altitudeFormatted}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
              Velocidad
            </Typography>
            <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 600, fontSize: '0.875rem' }}>
              {flight.telemetry.speedFormatted}
            </Typography>
          </Stack>
        </Stack>

        <Divider />

        {/* Terminal y Gates */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: 'customBackgrounds.appBase',
                borderRadius: 2,
                border: 1,
                borderColor: 'divider',
              }}
            >
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, display: 'block', mb: 0.75 }}>
                SALIDA
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8125rem', display: 'block' }}>
                Terminal:{' '}
                <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                  {flight.departureTerminalInfo.terminal}
                </Box>
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8125rem', display: 'block' }}>
                Gate:{' '}
                <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                  {flight.departureTerminalInfo.gate}
                </Box>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: 'customBackgrounds.appBase',
                borderRadius: 2,
                border: 1,
                borderColor: 'divider',
              }}
            >
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, display: 'block', mb: 0.75 }}>
                LLEGADA
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8125rem', display: 'block' }}>
                Terminal:{' '}
                <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                  {flight.arrivalTerminalInfo.terminal}
                </Box>
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8125rem', display: 'block' }}>
                Gate:{' '}
                <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                  {flight.arrivalTerminalInfo.gate}
                </Box>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default FlightLiveInfoCard;
