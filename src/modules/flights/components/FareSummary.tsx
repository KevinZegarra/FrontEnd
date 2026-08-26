import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Divider,
  Paper,
} from '@mui/material';
import { FareBreakdown } from '../../../types/flightDetail.types';

export interface FareSummaryProps {
  fareSummary: FareBreakdown;
  airlineName: string;
  externalBookingUrl?: string;
  onShareClick?: () => void;
  onSaveToTripsClick?: () => void;
}

export const FareSummary: React.FC<FareSummaryProps> = ({
  fareSummary,
  airlineName,
  externalBookingUrl,
  onShareClick,
  onSaveToTripsClick,
}) => {
  const handleRedirect = () => {
    if (externalBookingUrl) {
      window.open(externalBookingUrl, '_blank', 'noopener,noreferrer');
    }
  };

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
        position: { md: 'sticky' },
        top: { md: 96 },
      }}
    >
      <Stack spacing={3}>
        <Typography
          variant="h3"
          sx={{
            color: 'secondary.main',
            fontWeight: 800,
            fontSize: { xs: '1.15rem', md: '1.25rem' },
          }}
        >
          Resumen de tarifa
        </Typography>

        {/* Fare Rows Breakdown */}
        <Stack spacing={1.5}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
              {fareSummary.baseFareDescription}
            </Typography>
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600, fontSize: '0.875rem' }}>
              {fareSummary.currency} {fareSummary.baseFare}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
              Impuestos y tasas de aeropuerto
            </Typography>
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600, fontSize: '0.875rem' }}>
              {fareSummary.currency} {fareSummary.taxesAndFees}
            </Typography>
          </Stack>

          <Divider sx={{ my: 1 }} />

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: '1rem' }}>
              Total estimado
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                fontSize: '1.5rem',
                lineHeight: 1,
              }}
            >
              {fareSummary.currency} {fareSummary.totalPrice}
            </Typography>
          </Stack>
        </Stack>

        {/* Redirect Action CTA */}
        <Stack spacing={1.5}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleRedirect}
            endIcon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            }
            sx={{
              py: 1.5,
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: 1,
            }}
          >
            Ir al sitio de la aerolínea
          </Button>

          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              fontSize: '0.725rem',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            Serás redirigido al sitio oficial de {airlineName} para completar el pago de forma segura.
          </Typography>
        </Stack>

        <Divider />

        {/* Secondary Actions: Share & Save to Trips */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Button
            variant="text"
            color="primary"
            onClick={onShareClick}
            startIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            }
            sx={{
              fontWeight: 600,
              fontSize: '0.875rem',
              p: 0.5,
              '&:hover': { bgcolor: 'soft.primary' },
            }}
          >
            Compartir vuelo
          </Button>

          <Button
            variant="text"
            color="primary"
            onClick={onSaveToTripsClick}
            startIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            }
            sx={{
              fontWeight: 600,
              fontSize: '0.875rem',
              p: 0.5,
              '&:hover': { bgcolor: 'soft.primary' },
            }}
          >
            Guardar en Mis vuelos
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default FareSummary;
