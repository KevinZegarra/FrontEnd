import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Breadcrumbs,
  Link,
  Skeleton,
} from '@mui/material';
import CompareHeaderCards from '../components/CompareHeaderCards';
import CompareSpecsTable from '../components/CompareSpecsTable';
import AIRecommendationBanner from '../components/AIRecommendationBanner';
import { compareService } from '../../../services/compareService';
import { FlightComparisonData, CompareFlightCardData } from '../../../types/compare.types';

export interface CompareFlightsPageProps {
  flightIdA?: string;
  flightIdB?: string;
  onNavigateBack?: () => void;
  onFlightSelected?: (flight: CompareFlightCardData) => void;
}

export const CompareFlightsPage: React.FC<CompareFlightsPageProps> = ({
  flightIdA,
  flightIdB,
  onNavigateBack,
  onFlightSelected,
}) => {
  const [data, setData] = useState<FlightComparisonData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const loadComparison = async () => {
      try {
        setIsLoading(true);
        const result = await compareService.getFlightComparison(flightIdA, flightIdB);
        if (isMounted) {
          setData(result);
        }
      } catch (error) {
        console.error('Error al cargar comparación de vuelos:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadComparison();

    return () => {
      isMounted = false;
    };
  }, [flightIdA, flightIdB]);

  const handleSelectFlight = (flight: CompareFlightCardData) => {
    console.log('Vuelo seleccionado de la comparación:', flight);
    onFlightSelected?.(flight);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      {/* Contenido Principal */}
      <Box component="main" sx={{ flexGrow: 1, py: { xs: 3, md: 5 }, px: { xs: 2, sm: 4, lg: 8 } }}>
        <Container maxWidth="xl" disableGutters>
          <Stack spacing={4}>
            {/* Breadcrumbs */}
            <Breadcrumbs
              separator="›"
              aria-label="breadcrumb"
              sx={{
                '& .MuiBreadcrumbs-separator': { color: 'text.secondary', fontSize: '1rem' },
              }}
            >
              <Link underline="hover" color="text.secondary" href="#" sx={{ fontSize: '0.8125rem', fontWeight: 500 }}>
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
                Comparar vuelos
              </Typography>
            </Breadcrumbs>

            {/* Encabezado de Página */}
            <Box>
              <Typography
                variant="h1"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', md: '2rem' },
                }}
              >
                Compara tus vuelos
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1rem', mt: 0.5 }}>
                No te quedes con la duda. Compara lado a lado y elige el vuelo perfecto para ti.
              </Typography>
            </Box>

            {isLoading || !data ? (
              <Stack spacing={4}>
                <Skeleton variant="rounded" height={220} sx={{ borderRadius: 4 }} />
                <Skeleton variant="rounded" height={450} sx={{ borderRadius: 4 }} />
                <Skeleton variant="rounded" height={200} sx={{ borderRadius: 4 }} />
              </Stack>
            ) : (
              <Stack spacing={4}>
                {/* Bloque Superior: Tarjetas de Vuelo con VS */}
                <CompareHeaderCards
                  flightA={data.flightA}
                  flightB={data.flightB}
                  onSelectFlight={handleSelectFlight}
                />

                {/* Bloque Intermedio: Tabla de Factores y Especificaciones */}
                <CompareSpecsTable
                  airlineAName={data.flightA.airline.name}
                  airlineBName={data.flightB.airline.name}
                  specs={data.specs}
                />

                {/* Bloque Inferior: Recomendación Inteligente de la IA */}
                <AIRecommendationBanner recommendation={data.recommendation} />
              </Stack>
            )}
          </Stack>
        </Container>
      </Box>

    </Box>
  );
};

export default CompareFlightsPage;
