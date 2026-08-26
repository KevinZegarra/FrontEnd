import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import { FlightItem } from '../../../types/flight.types';

export interface FlightCardProps {
  flight: FlightItem;
  onViewDetailsClick?: (flight: FlightItem) => void;
}

export const FlightCard: React.FC<FlightCardProps> = ({
  flight,
  onViewDetailsClick,
}) => {
  // Mapeo semántico de colores para el badge de la aerolínea
  const getAirlineBadgeColor = (badgeType: string) => {
    switch (badgeType) {
      case 'success':
        return 'success.main';
      case 'warning':
        return 'warning.main';
      case 'error':
        return 'error.main';
      case 'info':
        return 'info.main';
      case 'primary':
      default:
        return 'primary.main';
    }
  };

  const isDirect = flight.stopsCount === 0;

  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        p: { xs: 2.5, md: 3 },
        bgcolor: 'background.paper',
        borderRadius: 3,
        border: 1,
        borderColor: 'divider',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.08)',
          borderColor: 'primary.light',
        },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'stretch', md: 'center' }}
        spacing={{ xs: 2.5, md: 3 }}
      >
        {/* 1. Bloque Aerolínea & Cabina */}
        <Stack direction="row" alignItems="center" spacing={2} sx={{ minWidth: { md: 180 } }}>
          <Box
            sx={{
              width: 42,
              height: 42,
              bgcolor: getAirlineBadgeColor(flight.airline.colorBadge),
              borderRadius: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
            </svg>
          </Box>

          <Box>
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.925rem' }}>
              {flight.airline.name}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
              {flight.cabinClass} · {flight.flightNumber}
            </Typography>
          </Box>
        </Stack>

        {/* 2. Bloque Itinerario (Salida -> Línea -> Llegada) */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 2, sm: 3 }}
          sx={{ flex: 1, maxWidth: { md: 360 }, mx: { md: 'auto' } }}
        >
          {/* Hora y Aeropuerto de Salida */}
          <Box sx={{ textAlign: 'right', minWidth: 60 }}>
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '1.05rem' }}>
              {flight.departureTime}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              {flight.originIata}
            </Typography>
          </Box>

          {/* Línea Central con Duración y Escalas */}
          <Box sx={{ flex: 1, textAlign: 'center', px: 1 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', display: 'block', mb: 0.5 }}>
              {flight.durationFormatted}
            </Typography>

            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', my: 0.5 }}>
              <Divider sx={{ flexGrow: 1, borderColor: 'divider', borderWidth: 1 }} />
              <Box sx={{ color: 'info.main', display: 'flex', mx: 0.5 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </Box>
              <Divider sx={{ flexGrow: 1, borderColor: 'divider', borderWidth: 1 }} />
            </Box>

            <Typography
              variant="caption"
              sx={{
                color: isDirect ? 'success.main' : 'warning.main',
                fontWeight: 600,
                fontSize: '0.75rem',
                display: 'block',
                mt: 0.5,
              }}
            >
              {flight.stopsFormatted}
            </Typography>
          </Box>

          {/* Hora y Aeropuerto de Llegada */}
          <Box sx={{ textAlign: 'left', minWidth: 60 }}>
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '1.05rem' }}>
              {flight.arrivalTime}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              {flight.destinationIata}
            </Typography>
          </Box>
        </Stack>

        {/* 3. Bloque Precio y Botón de Acción */}
        <Stack
          direction={{ xs: 'row', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          sx={{ minWidth: { md: 220 } }}
        >
          <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', display: 'block' }}>
              Precio final
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                fontSize: { xs: '1.25rem', md: '1.375rem' },
                lineHeight: 1.1,
              }}
            >
              {flight.currency} {flight.price}
            </Typography>
            <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 600, fontSize: '0.7rem' }}>
              {flight.tripTypeLabel}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={() => onViewDetailsClick?.(flight)}
            sx={{
              px: 2.5,
              py: 1.25,
              borderRadius: 1,
              fontWeight: 700,
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
            }}
          >
            Ver detalles
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default FlightCard;
