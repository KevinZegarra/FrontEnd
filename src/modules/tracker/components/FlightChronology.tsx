import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Paper,
} from '@mui/material';
import { FlightChronologyEvent } from '../../../types/tracker.types';

export interface FlightChronologyProps {
  events: FlightChronologyEvent[];
}

export const FlightChronology: React.FC<FlightChronologyProps> = ({ events }) => {
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
            fontSize: { xs: '1.1rem', md: '1.2rem' },
          }}
        >
          Historial y Cronología del Vuelo
        </Typography>

        {/* Vertical Timeline List */}
        <Box sx={{ width: '100%' }}>
          {events.map((event, index) => {
            const isLast = index === events.length - 1;
            const isCurrent = event.status === 'current';
            const isUpcoming = event.status === 'upcoming';

            return (
              <Stack
                key={event.id}
                direction="row"
                alignItems="flex-start"
                sx={{ position: 'relative', pb: isLast ? 0 : 2.5 }}
              >
                {/* 1. Columna Hora */}
                <Box sx={{ width: { xs: 70, sm: 90 }, flexShrink: 0, pt: 0.25 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: isCurrent ? 700 : 600,
                      color: isCurrent
                        ? 'success.main'
                        : isUpcoming
                        ? 'text.disabled'
                        : 'text.secondary',
                      fontSize: '0.875rem',
                    }}
                  >
                    {event.time}
                  </Typography>
                </Box>

                {/* 2. Columna Timeline Node & Connector Line */}
                <Box
                  sx={{
                    width: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  {/* Bullet Node */}
                  {isCurrent ? (
                    <Box
                      sx={{
                        width: 14,
                        height: 14,
                        bgcolor: 'success.main',
                        borderRadius: '50%',
                        border: 3,
                        borderColor: 'soft.success',
                        boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.3)',
                        zIndex: 2,
                      }}
                    />
                  ) : isUpcoming ? (
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        bgcolor: 'text.disabled',
                        borderRadius: '50%',
                        mt: 0.5,
                        zIndex: 2,
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        mt: 0.5,
                        zIndex: 2,
                      }}
                    />
                  )}

                  {/* Connecting Line */}
                  {!isLast && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 14,
                        bottom: -10,
                        width: 2,
                        bgcolor: 'divider',
                        zIndex: 1,
                      }}
                    />
                  )}
                </Box>

                {/* 3. Columna Descripción del Evento */}
                <Box sx={{ flex: 1, pl: 1, pt: 0.1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: isCurrent ? 700 : 600,
                      color: isCurrent
                        ? 'success.main'
                        : isUpcoming
                        ? 'text.disabled'
                        : 'secondary.main',
                      fontSize: '0.925rem',
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: isUpcoming ? 'text.disabled' : 'text.secondary',
                      fontSize: '0.8125rem',
                      display: 'block',
                      mt: 0.25,
                      lineHeight: 1.45,
                    }}
                  >
                    {event.description}
                  </Typography>
                </Box>
              </Stack>
            );
          })}
        </Box>
      </Stack>
    </Paper>
  );
};

export default FlightChronology;
