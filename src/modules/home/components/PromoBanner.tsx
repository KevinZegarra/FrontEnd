import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Grid,
} from '@mui/material';

export interface PromoBannerProps {
  onBannerActionClick?: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onBannerActionClick }) => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, lg: 8 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            borderRadius: { xs: 3, md: 4 },
            p: { xs: 4, sm: 5, md: 6 },
            bgcolor: 'secondary.main',
            backgroundImage: 'linear-gradient(135deg, rgba(27, 42, 74, 0.95) 0%, rgba(160, 27, 45, 0.85) 100%), url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#FFFFFF',
            border: 1,
            borderColor: 'divider',
            boxShadow: '0px 8px 30px rgba(27, 42, 74, 0.15)',
          }}
        >
          <Grid container spacing={3} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Stack spacing={1.5}>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'primary.light',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Alertas Inteligentes de Vuelo
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Recibe notificaciones 24h y 3h antes de tu despegue
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.disabled',
                    maxWidth: 580,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                  }}
                >
                  Configura tus vuelos seguidos y ChasquiFly te avisará sobre cambios de puerta, retrasos o el momento exacto para hacer tu Web Check-in.
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={onBannerActionClick}
                sx={{
                  bgcolor: 'primary.main',
                  color: '#FFFFFF',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: 1,
                  boxShadow: '0 4px 16px rgba(160, 27, 45, 0.4)',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                Activar Alertas Gratis
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PromoBanner;
