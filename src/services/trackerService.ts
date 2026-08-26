import { FlightTrackDetail } from '../types/tracker.types';
import { MOCK_FLIGHT_TRACK } from '../mocks/trackerMocks';

const USE_MOCKS = import.meta.env.VITE_USE_MOCKS !== 'false';

const simulateDelay = <T>(data: T, ms: number = 300): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
};

export const trackerService = {
  /**
   * Consulta el estado de seguimiento de un vuelo por número y fecha
   */
  async trackFlight(flightNumber: string, date?: string): Promise<FlightTrackDetail> {
    if (USE_MOCKS) {
      await simulateDelay(null, 350);
      return {
        ...MOCK_FLIGHT_TRACK,
        flightNumber: flightNumber || MOCK_FLIGHT_TRACK.flightNumber,
        dateFormatted: date || MOCK_FLIGHT_TRACK.dateFormatted,
      };
    }

    // =========================================================================
    // Preparado para el Sprint 2: Consumo del endpoint Spring Boot
    // =========================================================================
    /*
    const response = await axios.get<FlightTrackDetail>('/api/v1/flights/track', {
      params: { flightNumber, date },
    });
    return response.data;
    */
    return MOCK_FLIGHT_TRACK;
  },
};
