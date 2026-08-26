import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Breadcrumbs,
  Link,
  Skeleton,
} from '@mui/material';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import FlightDetailHeader from '../components/FlightDetailHeader';
import FlightAmenitiesAndPolicies from '../components/FlightAmenitiesAndPolicies';
import FareSummary from '../components/FareSummary';
import AlternativeFlights from '../components/AlternativeFlights';
import { flightDetailService } from '../../../services/flightDetailService';
import { FlightDetail, AlternativeFlight } from '../../../types/flightDetail.types';

export interface FlightDetailPageProps {
  flightId?: string;
  onNavigateBack?: () => void;
}

export const FlightDetailPage: React.FC<FlightDetailPageProps> = ({
  flightId = 'la-2045-detail',
  onNavigateBack,
}) => {
  const [flight, setFlight] = useState<FlightDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const loadFlightDetails = async () => {
      try {
        setIsLoading(true);
        const data = await flightDetailService.getFlightDetailById(flightId);
        if (isMounted) {
          setFlight(data);
        }
      } catch (error) {
        console.error('Error al cargar detalle del vuelo:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadFlightDetails();

    return () => {
      isMounted = false;
    };
  }, [flightId]);

  const handleSelectAlternative = (alt: AlternativeFlight) => {
    console.log('Vuelo alternativo seleccionado:', alt);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace del vuelo copiado al portapapeles!');
    }
  };

  const handleSaveToTrips = () => {
    console.log('Guardando vuelo en Mis Viajes');
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      {/* 1. Header Global */}
      <Header activeRoute="buscar" />

      {/* 2. Contenido Principal */}
      <Box component="main" sx={{ flexGrow: 1, py: { xs: 3, md: 5 }, px: { xs: 2, sm: 4, lg: 8 } }}>
        <Container maxWidth="xl" disableGutters>
          {/* Breadcrumbs de Navegación */}
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{
              mb: { xs: 3, md: 4 },
              '& .MuiBreadcrumbs-separator': { color: 'text.secondary', fontSize: '1rem' },
            }}
          >
            <Link
              underline="hover"
              color="text.secondary"
              href="#"
              sx={{ fontSize: '0.8125rem', fontWeight: 500 }}
            >
              Inicio
            </Link>
            <Link
              underline="hover"
              color="text.secondary"
              href="#buscar"
              onClick={(e) => {
                e.preventDefault();
                onNavigateBack?.();
              }}
              sx={{ fontSize: '0.8125rem', fontWeight: 500, cursor: 'pointer' }}
            >
              Resultados
            </Link>
            <Typography color="primary.main" sx={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              Detalle del vuelo
            </Typography>
          </Breadcrumbs>

          {isLoading || !flight ? (
            <Grid container spacing={4}>
              <Grid item xs={12} lg={8}>
                <Skeleton variant="rounded" height={280} sx={{ borderRadius: 4, mb: 3 }} />
                <Skeleton variant="rounded" height={220} sx={{ borderRadius: 4 }} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <Skeleton variant="rounded" height={360} sx={{ borderRadius: 4 }} />
              </Grid>
            </Grid>
          ) : (
            <Stack spacing={4}>
              {/* Layout Superior: Detalles + Resumen de Tarifa */}
              <Grid container spacing={{ xs: 3, lg: 4 }} alignItems="flex-start">
                {/* Columna Izquierda: Información de Vuelo & Políticas */}
                <Grid item xs={12} lg={7.5} xl={8}>
                  <Stack spacing={3}>
                    <FlightDetailHeader flight={flight} />
                    <FlightAmenitiesAndPolicies items={flight.amenitiesAndPolicies} />
                  </Stack>
                </Grid>

                {/* Columna Derecha: Tarjeta de Resumen de Tarifa y Redirección */}
                <Grid item xs={12} lg={4.5} xl={4}>
                  <FareSummary
                    fareSummary={flight.fareSummary}
                    airlineName={flight.airline.name}
                    externalBookingUrl={flight.externalBookingUrl}
                    onShareClick={handleShare}
                    onSaveToTripsClick={handleSaveToTrips}
                  />
                </Grid>
              </Grid>

              {/* Layout Inferior: Vuelos Alternativos Recomendados */}
              <Box sx={{ pt: { xs: 2, md: 3 } }}>
                <AlternativeFlights
                  alternatives={flight.alternatives}
                  onSelectAlternative={handleSelectAlternative}
                />
              </Box>
            </Stack>
          )}
        </Container>
      </Box>

      {/* 3. Footer Global */}
      <Footer />
    </Box>
  );
};

export default FlightDetailPage;
