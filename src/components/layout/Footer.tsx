import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Link,
} from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
        pt: { xs: 8, md: 10 },
        pb: { xs: 5, md: 6 },
        px: { xs: 2, sm: 4, lg: 8 },
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Grid container spacing={{ xs: 5, md: 6 }} justifyContent="space-between">
          {/* Brand & Mission Column */}
          <Grid item xs={12} md={4} lg={3.5}>
            <Stack spacing={2.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: 'primary.main',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
                  </svg>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                  Chasqui<Box component="span" sx={{ color: 'primary.main' }}>Fly</Box>
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: 'text.disabled',
                  lineHeight: 1.6,
                  maxWidth: 340,
                }}
              >
                El comparador de vuelos preferido por los peruanos. Buscamos y comparamos en tiempo real para ofrecerte la mejor ruta al mejor precio.
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.75rem',
                }}
              >
                © 2026 ChasquiFly. Todos los derechos reservados.
              </Typography>
            </Stack>
          </Grid>

          {/* Links Column 1: Compañía */}
          <Grid item xs={6} sm={4} md={2.5}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2 }}>
              Compañía
            </Typography>
            <Stack spacing={1.5}>
              {['Sobre nosotros', 'Socios', 'Prensa'].map((link) => (
                <Link
                  key={link}
                  href="#"
                  underline="hover"
                  sx={{
                    color: 'text.disabled',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#FFFFFF' },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Links Column 2: Soporte */}
          <Grid item xs={6} sm={4} md={2.5}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2 }}>
              Soporte
            </Typography>
            <Stack spacing={1.5}>
              {['Centro de Ayuda', 'Reclamaciones', 'Contacto'].map((link) => (
                <Link
                  key={link}
                  href="#"
                  underline="hover"
                  sx={{
                    color: 'text.disabled',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#FFFFFF' },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Links Column 3: Legal */}
          <Grid item xs={6} sm={4} md={2.5}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2 }}>
              Legal
            </Typography>
            <Stack spacing={1.5}>
              {['Privacidad', 'Términos', 'Cookies'].map((link) => (
                <Link
                  key={link}
                  href="#"
                  underline="hover"
                  sx={{
                    color: 'text.disabled',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#FFFFFF' },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Sub-footer Section */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 3,
            borderTop: '1px solid rgba(226, 219, 215, 0.15)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.disabled', fontSize: '0.875rem' }}>
            Tu viaje, siempre en ruta.
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={1.5}>
            {/* Facebook Icon */}
            <IconButton
              size="small"
              sx={{
                color: 'text.disabled',
                '&:hover': { color: '#FFFFFF', bgcolor: 'rgba(255, 255, 255, 0.08)' },
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </IconButton>

            {/* Instagram Icon */}
            <IconButton
              size="small"
              sx={{
                color: 'text.disabled',
                '&:hover': { color: '#FFFFFF', bgcolor: 'rgba(255, 255, 255, 0.08)' },
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </IconButton>

            {/* Twitter / X Icon */}
            <IconButton
              size="small"
              sx={{
                color: 'text.disabled',
                '&:hover': { color: '#FFFFFF', bgcolor: 'rgba(255, 255, 255, 0.08)' },
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
