import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Paper,
} from '@mui/material';
import { CompareSpecItem } from '../../../types/compare.types';

export interface CompareSpecsTableProps {
  airlineAName: string;
  airlineBName: string;
  specs: CompareSpecItem[];
}

export const CompareSpecsTable: React.FC<CompareSpecsTableProps> = ({
  airlineAName,
  airlineBName,
  specs,
}) => {
  const renderIcon = (hasCheck?: boolean, hasCross?: boolean, isNegative?: boolean) => {
    if (hasCheck) {
      return (
        <Box
          sx={{
            width: 18,
            height: 18,
            bgcolor: 'soft.success',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'success.main',
            flexShrink: 0,
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </Box>
      );
    }
    if (hasCross || isNegative) {
      return (
        <Box
          sx={{
            width: 18,
            height: 18,
            bgcolor: 'soft.primary',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.main',
            flexShrink: 0,
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </Box>
      );
    }
    return null;
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        borderRadius: 4,
        border: 1,
        borderColor: 'divider',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
      }}
    >
      {/* 1. Cabecera de la Tabla */}
      <Box
        sx={{
          px: { xs: 2, sm: 3 },
          py: 2.5,
          bgcolor: 'secondary.main',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            {airlineAName}
          </Typography>
        </Box>

        <Box sx={{ width: { xs: 120, sm: 220 }, textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{
              color: 'warning.main',
              fontWeight: 800,
              letterSpacing: '0.08em',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
            }}
          >
            FACTORES
          </Typography>
        </Box>

        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            {airlineBName}
          </Typography>
        </Box>
      </Box>

      {/* 2. Filas de Especificaciones iteradas con .map() */}
      <Box>
        {specs.map((item, index) => {
          const isLast = index === specs.length - 1;

          return (
            <Box
              key={item.id}
              sx={{
                px: { xs: 1.5, sm: 3 },
                py: 2,
                borderBottom: isLast ? 0 : 1,
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                transition: 'background-color 0.15s ease',
                '&:hover': {
                  bgcolor: 'customBackgrounds.appBase',
                },
              }}
            >
              {/* Valor Aerolínea A */}
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                {renderIcon(item.flightAValue.hasCheckIcon, item.flightAValue.hasCrossIcon, item.flightAValue.isNegative)}
                <Typography
                  variant="body2"
                  sx={{
                    color: item.flightAValue.highlight
                      ? 'success.main'
                      : item.flightAValue.isNegative
                      ? 'text.secondary'
                      : 'secondary.main',
                    fontWeight: item.flightAValue.highlight ? 700 : 500,
                    fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                    textAlign: 'center',
                  }}
                >
                  {item.flightAValue.text}
                </Typography>
              </Box>

              {/* Factor Central (Pill) */}
              <Box sx={{ width: { xs: 120, sm: 220 }, display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    px: { xs: 1, sm: 1.75 },
                    py: 0.5,
                    bgcolor: 'customBackgrounds.appBase',
                    borderRadius: '20px',
                    border: 1,
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      fontSize: { xs: '0.625rem', sm: '0.75rem' },
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.factorName}
                  </Typography>
                </Box>
              </Box>

              {/* Valor Aerolínea B */}
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                {renderIcon(item.flightBValue.hasCheckIcon, item.flightBValue.hasCrossIcon, item.flightBValue.isNegative)}
                <Typography
                  variant="body2"
                  sx={{
                    color: item.flightBValue.highlight
                      ? 'success.main'
                      : item.flightBValue.isNegative
                      ? 'text.secondary'
                      : 'secondary.main',
                    fontWeight: item.flightBValue.highlight ? 700 : 500,
                    fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                    textAlign: 'center',
                  }}
                >
                  {item.flightBValue.text}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};

export default CompareSpecsTable;
