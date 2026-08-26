import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Stack,
  Skeleton,
} from '@mui/material';
import { PopularDestination } from '../../../types/home.types';

export interface PopularDestinationsProps {
  destinations: PopularDestination[];
  isLoading?: boolean;
  onDestinationClick?: (destination: PopularDestination) => void;
}

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  destinations,
  isLoading = false,
  onDestinationClick,
}) => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 4, lg: 8 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="xl" disableGutters>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <Typography
            variant="h2"
            sx={{
              color: 'secondary.main',
              fontWeight: 800,
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              mb: 1,
            }}
          >
            Destinos populares
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.875rem', md: '1rem' },
            }}
          >
            Los lugares más visitados en Perú con las tarifas más convenientes para ti.
          </Typography>
        </Box>

        {/* Destinations Grid */}
        <Grid container spacing={3}>
          {isLoading
            ? Array.from(new Array(4)).map((_, index) => (
                <Grid item xs={12} sm={6} md={3} key={`skeleton-${index}`}>
                  <Card sx={{ borderRadius: 4, overflow: 'hidden' }}>
                    <Skeleton variant="rectangular" height={180} />
                    <Box sx={{ p: 2.5 }}>
                      <Skeleton variant="text" width="60%" height={28} />
                      <Skeleton variant="text" width="90%" height={20} />
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                        <Skeleton variant="text" width="30%" />
                        <Skeleton variant="text" width="25%" />
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))
            : destinations.map((dest) => (
                <Grid item xs={12} sm={6} md={3} key={dest.id}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      bgcolor: 'background.paper',
                      border: 1,
                      borderColor: 'divider',
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                      overflow: 'hidden',
                      transition: 'all 0.25s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
                        borderColor: 'primary.light',
                      },
                    }}
                  >
                    <CardActionArea
                      onClick={() => onDestinationClick?.(dest)}
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                    >
                      <CardMedia
                        component="img"
                        height="180"
                        image={dest.imageUrl}
                        alt={`Vuelo a ${dest.city}`}
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.03)',
                          },
                        }}
                      />
                      <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Typography
                          variant="h4"
                          sx={{
                            color: 'secondary.main',
                            fontWeight: 700,
                            fontSize: '1.125rem',
                            mb: 1,
                          }}
                        >
                          {dest.city}
                        </Typography>

                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="flex-end"
                          sx={{ mt: 'auto' }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              fontSize: '0.8125rem',
                            }}
                          >
                            {dest.tripTypeLabel}
                          </Typography>

                          <Box sx={{ textAlign: 'right' }}>
                            <Typography
                              variant="caption"
                              sx={{
                                color: 'text.secondary',
                                fontSize: '0.6875rem',
                                display: 'block',
                                lineHeight: 1,
                                mb: 0.5,
                              }}
                            >
                              Desde
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                color: 'warning.main',
                                fontWeight: 700,
                                fontSize: '1rem',
                                lineHeight: 1,
                              }}
                            >
                              {dest.currency} {dest.priceFrom}
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularDestinations;
