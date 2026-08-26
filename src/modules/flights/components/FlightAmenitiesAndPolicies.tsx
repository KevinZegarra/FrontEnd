import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Grid,
  Paper,
} from '@mui/material';
import { AmenityPolicyItem } from '../../../types/flightDetail.types';

export interface FlightAmenitiesAndPoliciesProps {
  items: AmenityPolicyItem[];
}

export const FlightAmenitiesAndPolicies: React.FC<FlightAmenitiesAndPoliciesProps> = ({ items }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'baggage':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        );
      case 'services':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
            <line x1="12" y1="20" x2="12.01" y2="20"></line>
          </svg>
        );
      case 'policies':
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        );
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
          Información de vuelo y tarifas
        </Typography>

        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  p: 2.5,
                  bgcolor: 'customBackgrounds.appBase',
                  borderRadius: 3,
                  border: 1,
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.25}>
                  <Box sx={{ color: 'info.main', display: 'flex' }}>
                    {getIcon(item.iconType)}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'secondary.main',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.8125rem',
                    lineHeight: 1.55,
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Paper>
  );
};

export default FlightAmenitiesAndPolicies;
