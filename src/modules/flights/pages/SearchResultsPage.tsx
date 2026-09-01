import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Button,
  Paper,
  Drawer,
  IconButton,
  Skeleton,
  Chip,
} from '@mui/material';
import SearchSummaryBar from '../components/SearchSummaryBar';
import FilterSidebar from '../components/FilterSidebar';
import FlightCard from '../components/FlightCard';
import { flightService } from '../../../services/flightService';
import {
  FlightItem,
  FlightFilterState,
  SearchQueryParams,
  SortOption,
} from '../../../types/flight.types';

export const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useState<SearchQueryParams | undefined>(undefined);
  const [flights, setFlights] = useState<FlightItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<SortOption>('PRICE_ASC');
  const [filters, setFilters] = useState<FlightFilterState>({
    stops: [],
    priceRange: [80, 500],
    airlines: [],
    departureTimes: [],
  });
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setIsLoading(true);
        const params = await flightService.getCurrentSearchParams();
        const results = await flightService.searchFlights(params, filters, sortBy);

        if (isMounted) {
          setSearchParams(params);
          setFlights(results);
        }
      } catch (error) {
        console.error('Error al cargar vuelos:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [filters, sortBy]);

  const handleFiltersChange = (newFilters: FlightFilterState) => {
    setFilters(newFilters);
  };

  const handleFlightDetailsClick = (flight: FlightItem) => {
    console.log('Detalles del vuelo seleccionado:', flight.flightNumber, flight.airline.name);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      {/* Barra de Resumen de Búsqueda */}
      <SearchSummaryBar
        searchParams={searchParams}
        onEditSearchClick={() => console.log('Editar búsqueda')}
      />

      {/* Contenedor Principal: Filtros + Resultados */}
      <Box component="main" sx={{ flexGrow: 1, py: { xs: 3, md: 4 }, px: { xs: 2, sm: 4, lg: 6 } }}>
        <Container maxWidth="xl" disableGutters>
          <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 2.5 }}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setMobileFilterOpen(true)}
              sx={{ bgcolor: 'background.paper', borderColor: 'divider', color: 'secondary.main', fontWeight: 600 }}
            >
              Mostrar Filtros
            </Button>
          </Box>

          <Grid container spacing={{ xs: 3, lg: 4 }} alignItems="flex-start">
            {/* Panel Lateral de Filtros (Desktop) */}
            <Grid item xs={12} md={4} lg={3.2} xl={3} sx={{ display: { xs: 'none', md: 'block' } }}>
              <FilterSidebar
                initialFilters={filters}
                onFiltersChange={handleFiltersChange}
              />
            </Grid>

            {/* Columna de Resultados */}
            <Grid item xs={12} md={8} lg={8.8} xl={9}>
              <Stack spacing={2.5}>
                {/* Barra de Ordenamiento y Cantidad de Resultados */}
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2, sm: 2.5 },
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    border: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    gap: 1.5,
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      Encontramos
                    </Typography>
                    <Chip
                      label={`${flights.length} vuelos`}
                      size="small"
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                        fontWeight: 700,
                        fontSize: '0.8125rem',
                        height: 24,
                      }}
                    />
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      para tu ruta
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: 'wrap', gap: 0.5 }}>
                    <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700, mr: 0.5 }}>
                      Ordenar:
                    </Typography>

                    {[
                      { label: 'Más económico', val: 'PRICE_ASC' as SortOption },
                      { label: 'Más rápido', val: 'DURATION_ASC' as SortOption },
                      { label: 'Mejor opción', val: 'BEST' as SortOption },
                    ].map((sortItem) => {
                      const isSelected = sortBy === sortItem.val;
                      return (
                        <Box
                          key={sortItem.val}
                          component="button"
                          onClick={() => setSortBy(sortItem.val)}
                          sx={{
                            px: 1.75,
                            py: 0.75,
                            borderRadius: 2,
                            border: 1,
                            borderColor: isSelected ? 'primary.main' : 'divider',
                            bgcolor: isSelected ? 'soft.primary' : 'background.paper',
                            color: isSelected ? 'primary.main' : 'text.secondary',
                            fontSize: '0.8125rem',
                            fontWeight: isSelected ? 700 : 500,
                            fontFamily: 'inherit',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              borderColor: 'primary.main',
                              color: 'primary.main',
                            },
                          }}
                        >
                          {sortItem.label}
                        </Box>
                      );
                    })}
                  </Stack>
                </Paper>

                {/* Listado de Tarjetas de Vuelo con Skeletons */}
                {isLoading ? (
                  Array.from(new Array(4)).map((_, i) => (
                    <Paper
                      key={`skeleton-card-${i}`}
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        border: 1,
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                      }}
                    >
                      <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} sm={3}>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Skeleton variant="rounded" width={44} height={44} sx={{ borderRadius: 2 }} />
                            <Box sx={{ flex: 1 }}>
                              <Skeleton width="80%" height={24} />
                              <Skeleton width="50%" height={18} />
                            </Box>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                            <Skeleton width={60} height={35} />
                            <Skeleton width={120} height={20} />
                            <Skeleton width={60} height={35} />
                          </Stack>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
                            <Skeleton width={70} height={40} />
                            <Skeleton variant="rounded" width={110} height={40} sx={{ borderRadius: 1.5 }} />
                          </Stack>
                        </Grid>
                      </Grid>
                    </Paper>
                  ))
                ) : (
                  flights.map((flight) => (
                    <FlightCard
                      key={flight.id}
                      flight={flight}
                      onViewDetailsClick={handleFlightDetailsClick}
                    />
                  ))
                )}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Drawer de Filtros para Móviles */}
      <Drawer
        anchor="bottom"
        open={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
      >
        <FilterSidebar
          initialFilters={filters}
          onFiltersChange={handleFiltersChange}
        />
      </Drawer>
    </Box>
  );
};

export default SearchResultsPage;
