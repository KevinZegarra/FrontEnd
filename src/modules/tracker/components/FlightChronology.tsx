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
        p: { xs: 3, sm: 4 },
        bgcolor: 'background.paper',
        borderRadius: '16px',
        border: '1px solid #E2DBD7',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Stack spacing={3}>
        <Typography
          variant="h3"
          sx={{
            color: '#1B2A4A',
            fontWeight: 800,
            fontSize: '18px',
          }}
        >
          Historial y Cronología del Vuelo
        </Typography>

        {/* Vertical Timeline List */}
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          {events.map((event, index) => {
            const isLast = index === events.length - 1;
            const isCurrent = event.status === 'current';
            const isUpcoming = event.status === 'upcoming';

            return (
              <Box
                key={event.id}
                sx={{
                  display: 'flex',
                  alignItems: 'stretch',
                  minHeight: isLast ? 'auto' : 58,
                }}
              >
                {/* 1. Columna Hora */}
                <Box
                  sx={{
                    width: { xs: 65, sm: 90 },
                    flexShrink: 0,
                    pt: '1px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      fontWeight: isCurrent ? 700 : isUpcoming ? 500 : 600,
                      color: isCurrent
                        ? '#10B981'
                        : isUpcoming
                        ? '#9E9490'
                        : '#6B615E',
                    }}
                  >
                    {event.time}
                  </Typography>
                </Box>

                {/* 2. Columna Timeline Node & Connector Line */}
                <Box
                  sx={{
                    width: 36,
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
                        bgcolor: '#10B981',
                        borderRadius: '9999px',
                        border: '3px solid #DCFCE7',
                        flexShrink: 0,
                        zIndex: 2,
                      }}
                    />
                  ) : isUpcoming ? (
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        bgcolor: '#D0C7C2',
                        borderRadius: '9999px',
                        flexShrink: 0,
                        mt: '2px',
                        zIndex: 2,
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        bgcolor: '#A01B2D',
                        borderRadius: '9999px',
                        flexShrink: 0,
                        mt: '2px',
                        zIndex: 2,
                      }}
                    />
                  )}

                  {/* Línea Conectora Continua */}
                  {!isLast && (
                    <Box
                      sx={{
                        width: '2px',
                        flexGrow: 1,
                        bgcolor: '#E2DBD7',
                        my: '2px',
                      }}
                    />
                  )}
                </Box>

                {/* 3. Columna Descripción del Evento */}
                <Box
                  sx={{
                    flex: 1,
                    pl: 1.5,
                    pb: isLast ? 0 : 2.5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      fontWeight: isCurrent ? 700 : isUpcoming ? 500 : 600,
                      color: isCurrent
                        ? '#10B981'
                        : isUpcoming
                        ? '#9E9490'
                        : '#1B2A4A',
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '13px',
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      color: isUpcoming ? '#9E9490' : '#6B615E',
                      lineHeight: 1.45,
                    }}
                  >
                    {event.description}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Stack>
    </Paper>
  );
};

export default FlightChronology;
