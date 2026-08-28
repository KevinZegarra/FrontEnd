import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Skeleton,
} from '@mui/material';
import FlightTrackerSearch from '../components/FlightTrackerSearch';
import FlightStatusBanner from '../components/FlightStatusBanner';
import FlightTimelineProgressBar from '../components/FlightTimelineProgressBar';
import FlightLiveInfoCard from '../components/FlightLiveInfoCard';
import FlightChronology from '../components/FlightChronology';
import FlightNotificationToggles from '../components/FlightNotificationToggles';
import { trackerService } from '../../../services/trackerService';
import { FlightTrackDetail } from '../../../types/tracker.types';

export const FlightTrackerPage: React.FC = () => {
  const [flightData, setFlightData] = useState<FlightTrackDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchTrackData = async (flightNum: string = 'LA 2045', date: string = '15 Sep 2025') => {
    try {
      setIsLoading(true);
      const data = await trackerService.trackFlight(flightNum, date);
      setFlightData(data);
    } catch (error) {
      console.error('Error al obtener datos de seguimiento:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrackData();
  }, []);

  const handleSearch = (flightNumber: string, date: string) => {
    fetchTrackData(flightNumber, date);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      {/* Contenido Principal */}
      <Box component="main" sx={{ flexGrow: 1, py: { xs: 4, md: 6 }, px: { xs: 2, sm: 4, lg: 8 } }}>
        <Container maxWidth="xl" disableGutters>
          <Stack spacing={4}>
            {/* Título de la Sección */}
            <Box>
              <Typography
                variant="h1"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', md: '2rem' },
                }}
              >
                Seguimiento de vuelo
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1rem', mt: 0.5 }}>
                Consulta el estado de tu vuelo en tiempo real
              </Typography>
            </Box>

            {/* Buscador de Vuelo */}
            <FlightTrackerSearch onSearch={handleSearch} isLoading={isLoading} />

            {isLoading || !flightData ? (
              <Stack spacing={3}>
                <Skeleton variant="rounded" height={64} sx={{ borderRadius: 3 }} />
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={8}>
                    <Skeleton variant="rounded" height={260} sx={{ borderRadius: 4 }} />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Skeleton variant="rounded" height={260} sx={{ borderRadius: 4 }} />
                  </Grid>
                </Grid>
                <Skeleton variant="rounded" height={300} sx={{ borderRadius: 4 }} />
                <Skeleton variant="rounded" height={160} sx={{ borderRadius: 4 }} />
              </Stack>
            ) : (
              <Stack spacing={3.5}>
                {/* Banner de Estado en Vivo */}
                <FlightStatusBanner flight={flightData} />

                {/* Grid Superior: Barra de Progreso y Ficha Técnica */}
                <Grid container spacing={3.5} alignItems="stretch">
                  <Grid item xs={12} lg={7.5} xl={8}>
                    <FlightTimelineProgressBar flight={flightData} />
                  </Grid>

                  <Grid item xs={12} lg={4.5} xl={4}>
                    <FlightLiveInfoCard flight={flightData} />
                  </Grid>
                </Grid>

                {/* Cronología e Historial de Eventos */}
                <FlightChronology events={flightData.chronology} />

                {/* Configuración de Alertas y Notificaciones */}
                <FlightNotificationToggles
                  initialSettings={flightData.notificationSettings}
                  onChange={(newSettings) => console.log('Notificaciones actualizadas:', newSettings)}
                />
              </Stack>
            )}
          </Stack>
        </Container>
      </Box>

    </Box>
  );
};

export default FlightTrackerPage;
