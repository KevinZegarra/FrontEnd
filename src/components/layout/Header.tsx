import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';

export interface HeaderProps {
  onLoginClick?: () => void;
  activeRoute?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onLoginClick,
  activeRoute = 'inicio',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Inicio', id: 'inicio', href: '#' },
    { label: 'Buscar vuelos', id: 'buscar', href: '#buscar' },
    { label: 'Mis vuelos', id: 'trips', href: '#trips' },
    { label: 'Ayuda', id: 'ayuda', href: '#ayuda' },
  ];

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 68, md: 80 },
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 2, sm: 4, lg: 8 },
          }}
        >
          {/* Logo & Navigation Links */}
          <Stack direction="row" spacing={{ xs: 2, lg: 4 }} alignItems="center">
            {/* Brand Logo */}
            <Box
              component="a"
              href="#"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  bgcolor: 'primary.main',
                  borderRadius: 'shape.borderRadius',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'primary.contrastText',
                }}
              >
                {/* Airplane Icon SVG */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
                </svg>
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.4rem' },
                  fontWeight: 800,
                  color: 'secondary.main',
                  letterSpacing: '-0.02em',
                }}
              >
                Chasqui<Box component="span" sx={{ color: 'primary.main' }}>Fly</Box>
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack direction="row" spacing={3} sx={{ ml: 2 }}>
                {navItems.map((item) => {
                  const isActive = activeRoute === item.id;
                  return (
                    <Typography
                      key={item.id}
                      component="a"
                      href={item.href}
                      sx={{
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? 'primary.main' : 'text.secondary',
                        position: 'relative',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  );
                })}
              </Stack>
            )}
          </Stack>

          {/* Action Button / Mobile Menu Toggle */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={onLoginClick}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                px: 2.5,
                py: 1,
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              Iniciar sesión
            </Button>

            {/* Mobile Hamburger Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="Abrir menú"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: 'secondary.main' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: 'background.paper',
            p: 2,
          },
        }}
      >
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'secondary.main' }}>
            Chasqui<Box component="span" sx={{ color: 'primary.main' }}>Fly</Box>
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.secondary' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </IconButton>
        </Box>

        <List>
          {navItems.map((item) => {
            const isActive = activeRoute === item.id;
            return (
              <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: 1,
                    bgcolor: isActive ? 'soft.primary' : 'transparent',
                    color: isActive ? 'primary.main' : 'text.primary',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.95rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ mt: 3, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              handleDrawerToggle();
              onLoginClick?.();
            }}
          >
            Iniciar sesión
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
