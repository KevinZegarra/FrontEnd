import React from 'react';
import { Chip, ChipProps } from '@mui/material';
import { LiveFlightStatus } from '../../../types/liveBoard.types';

export interface StatusChipProps {
  status: LiveFlightStatus;
  delayMinutes?: number;
}

interface StatusChipConfig {
  color: ChipProps['color'];
  label: string;
}

const getStatusChipConfig = (
  status: LiveFlightStatus,
  delayMinutes?: number,
): StatusChipConfig => {
  switch (status) {
    case 'BOARDING':
      return { color: 'info', label: 'Embarcando' };
    case 'DELAYED':
      return {
        color: 'warning',
        label: delayMinutes ? `Demorado +${delayMinutes} min` : 'Demorado',
      };
    case 'CANCELLED':
      return { color: 'error', label: 'Cancelado' };
    case 'LANDED':
      return { color: 'success', label: 'Aterrizado' };
    case 'SCHEDULED':
    default:
      return { color: 'success', label: 'A tiempo' };
  }
};

export const StatusChip: React.FC<StatusChipProps> = ({ status, delayMinutes }) => {
  const { color, label } = getStatusChipConfig(status, delayMinutes);

  return <Chip color={color} label={label} size="small" />;
};

export default StatusChip;
