import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Divider,
  Paper,
} from '@mui/material';
import { FlightTrackDetail } from '../../../types/tracker.types';

export interface FlightTimelineProgressBarProps {
  flight: FlightTrackDetail;
}

export const FlightTimelineProgressBar: React.FC<FlightTimelineProgressBarProps> = ({ flight }) => {
  const { telemetry } = flight;
  const progress = Math.min(Math.max(telemetry.progressPercentage, 0), 100);

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
      <Stack spacing={3.5}>
        <Typography
          variant="h3"
          sx={{
            color: 'secondary.main',
            fontWeight: 800,
            fontSize: { xs: '1.1rem', md: '1.2rem' },
          }}
        >
          Ruta y Progreso de Vuelo
        </Typography>

        {/* Barra de Progreso Gráfica con Indicador de Aeronave */}
        <Stack spacing={1.5}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.875rem' }}>
              {flight.originIata} ({flight.originCity})
            </Typography>
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.875rem' }}>
              {flight.destinationIata} ({flight.destinationCity})
            </Typography>
          </Stack>

          {/* Track y Puntero de Avión */}
          <Box sx={{ position: 'relative', width: '100%', height: 28, display: 'flex', alignItems: 'center' }}>
            {/* Línea Base */}
            <Box
              sx={{
                width: '100%',
                height: 4,
                bgcolor: 'divider',
                borderRadius: 2,
              }}
            />

            {/* Línea de Progreso Activa */}
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                width: `${progress}%`,
                height: 4,
                bgcolor: 'primary.main',
                borderRadius: 2,
                transition: 'width 0.5s ease',
              }}
            />

            {/* Icono de Avión Flotante */}
            <Box
              sx={{
                position: 'absolute',
                left: `calc(${progress}% - 12px)`,
                width: 24,
                height: 24,
                bgcolor: 'primary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 2px 8px rgba(160, 27, 45, 0.3)',
                transition: 'left 0.5s ease',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </Box>
          </Box>

          {/* Métricas de Progreso y Distancia */}
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
              Progreso:{' '}
              <Box component="span" sx={{ color: 'info.main', fontWeight: 700 }}>
                {progress}% completado
              </Box>
            </Typography>

            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
              Distancia total:{' '}
              <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                {telemetry.totalDistanceFormatted}
              </Box>
            </Typography>
          </Stack>
        </Stack>

        <Divider />

        {/* Desglose de Horarios Origen - Duración - Destino */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={{ xs: 2.5, md: 3 }}
        >
          {/* Origen */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: '0.05em' }}>
              ORIGEN
            </Typography>
            <Typography variant="h2" sx={{ color: 'secondary.main', fontWeight: 800, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
              {flight.scheduledDepartureTime}
            </Typography>
            <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 600, fontSize: '0.875rem' }}>
              Salió a las {flight.actualDepartureTime}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', display: 'block', mt: 0.25 }}>
              {flight.originAirportName}
            </Typography>
          </Box>

          {/* Centro: Duración */}
          <Box sx={{ textAlign: { xs: 'left', md: 'center' }, px: { md: 2 } }}>
            <Box sx={{ color: 'text.secondary', display: 'inline-flex', mb: 0.25 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </Box>
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.925rem' }}>
              {flight.durationFormatted}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.725rem', display: 'block' }}>
              Duración total
            </Typography>
          </Box>

          {/* Destino */}
          <Box sx={{ flex: 1, textAlign: { xs: 'left', md: 'right' } }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: '0.05em' }}>
              DESTINO
            </Typography>
            <Typography variant="h2" sx={{ color: 'secondary.main', fontWeight: 800, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
              {flight.scheduledArrivalTime}
            </Typography>
            <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.875rem' }}>
              Llegada estimada {flight.estimatedArrivalTime}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', display: 'block', mt: 0.25 }}>
              {flight.destinationAirportName}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default FlightTimelineProgressBar;
