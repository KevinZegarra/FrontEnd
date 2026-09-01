import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Paper,
  Divider,
  Chip,
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
        return '#10B981';
      case 'warning':
        return '#F59E0B';
      case 'error':
        return '#EF4444';
      case 'info':
        return '#2563EB';
      case 'primary':
      default:
        return '#A01B2D';
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
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          boxShadow: '0px 8px 30px rgba(27, 42, 74, 0.1)',
          borderColor: 'primary.main',
        },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'stretch', md: 'center' }}
        spacing={{ xs: 2.5, md: 3 }}
      >
        {/* Bloque Aerolínea & Cabina */}
        <Stack direction="row" alignItems="center" spacing={2} sx={{ minWidth: { md: 190 } }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              bgcolor: getAirlineBadgeColor(flight.airline.colorBadge),
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
            </svg>
          </Box>

          <Box>
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.2 }}>
              {flight.airline.name}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', display: 'block', mt: 0.25 }}>
              {flight.cabinClass} · <strong>{flight.flightNumber}</strong>
            </Typography>
          </Box>
        </Stack>

        {/* Bloque Itinerario (Salida -> Línea -> Llegada) */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 2, sm: 3 }}
          sx={{ flex: 1, maxWidth: { md: 400 }, mx: { md: 'auto' } }}
        >
          {/* Hora y Aeropuerto de Salida */}
          <Box sx={{ textAlign: 'right', minWidth: 65 }}>
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 800, fontSize: '1.15rem', lineHeight: 1.1 }}>
              {flight.departureTime}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, fontSize: '0.8125rem' }}>
              {flight.originIata}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.disabled', fontSize: '0.7rem', display: 'block' }}>
              {flight.originCity}
            </Typography>
          </Box>

          {/* Línea Central con Duración y Escalas */}
          <Box sx={{ flex: 1, textAlign: 'center', px: 1 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', display: 'block', mb: 0.5, fontWeight: 500 }}>
              {flight.durationFormatted}
            </Typography>

            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', my: 0.5 }}>
              <Divider sx={{ flexGrow: 1, borderColor: 'divider', borderWidth: 1 }} />
              <Box
                sx={{
                  color: 'info.main',
                  display: 'flex',
                  mx: 0.75,
                  bgcolor: 'info.light',
                  p: 0.5,
                  borderRadius: '50%',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </Box>
              <Divider sx={{ flexGrow: 1, borderColor: 'divider', borderWidth: 1 }} />
            </Box>

            <Chip
              label={flight.stopsFormatted}
              size="small"
              sx={{
                height: 20,
                fontSize: '0.7rem',
                fontWeight: 600,
                bgcolor: isDirect ? '#DCFCE7' : 'rgba(249, 115, 22, 0.15)',
                color: isDirect ? '#15803D' : '#C2410C',
                border: 1,
                borderColor: isDirect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(249, 115, 22, 0.3)',
              }}
            />
          </Box>

          {/* Hora y Aeropuerto de Llegada */}
          <Box sx={{ textAlign: 'left', minWidth: 65 }}>
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 800, fontSize: '1.15rem', lineHeight: 1.1 }}>
              {flight.arrivalTime}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, fontSize: '0.8125rem' }}>
              {flight.destinationIata}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.disabled', fontSize: '0.7rem', display: 'block' }}>
              {flight.destinationCity}
            </Typography>
          </Box>
        </Stack>

        {/* Bloque Precio y Botón de Acción */}
        <Stack
          direction={{ xs: 'row', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2.5}
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
                fontSize: { xs: '1.35rem', md: '1.5rem' },
                lineHeight: 1.1,
              }}
            >
              {flight.currency} {flight.price}
            </Typography>
            <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 600, fontSize: '0.75rem' }}>
              {flight.tripTypeLabel}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={() => onViewDetailsClick?.(flight)}
            sx={{
              px: 2.5,
              py: 1.2,
              borderRadius: 1,
              fontWeight: 700,
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(160, 27, 45, 0.2)',
              '&:hover': {
                bgcolor: 'primary.dark',
                boxShadow: '0 4px 12px rgba(160, 27, 45, 0.35)',
              },
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
