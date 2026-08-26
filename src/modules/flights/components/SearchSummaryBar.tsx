import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { SearchQueryParams } from '../../../types/flight.types';

export interface SearchSummaryBarProps {
  searchParams?: SearchQueryParams;
  onEditSearchClick?: () => void;
}

export const SearchSummaryBar: React.FC<SearchSummaryBarProps> = ({
  searchParams,
  onEditSearchClick,
}) => {
  const params = searchParams || {
    origin: 'Lima',
    originIata: 'LIM',
    destination: 'Cusco',
    destinationIata: 'CUZ',
    departureDate: '15 Sep',
    returnDate: '20 Sep',
    passengers: 1,
    travelClass: 'Económica',
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        py: { xs: 1.5, md: 2 },
        px: { xs: 2, sm: 4, lg: 8 },
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={{ xs: 1.5, sm: 2 }}
        >
          {/* Summary Route & Info */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            spacing={{ xs: 0.5, md: 2 }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                sx={{
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
                </svg>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                }}
              >
                Vuelos de {params.origin} ({params.originIata}) a {params.destination} ({params.destinationIata}) · {params.departureDate} {params.returnDate ? `– ${params.returnDate}` : ''}
              </Typography>
            </Stack>

            <Box sx={{ display: { xs: 'none', md: 'block' }, color: 'text.secondary' }}>
              |
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.875rem',
                pl: { xs: 4, md: 0 },
              }}
            >
              {params.passengers} {params.passengers > 1 ? 'pasajeros' : 'pasajero'} · {params.travelClass}
            </Typography>
          </Stack>

          {/* Edit Search CTA Button */}
          <Button
            variant="text"
            color="primary"
            onClick={onEditSearchClick}
            startIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            }
            sx={{
              fontWeight: 600,
              fontSize: '0.875rem',
              p: 0.5,
              alignSelf: { xs: 'flex-end', sm: 'center' },
              '&:hover': {
                bgcolor: 'soft.primary',
              },
            }}
          >
            Editar búsqueda
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default SearchSummaryBar;
