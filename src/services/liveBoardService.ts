import { LIVE_BOARD_MOCKS } from '../mocks/liveBoardMocks';
import { LiveBoardQuery, LiveFlight } from '../types/liveBoard.types';

const USE_MOCKS = import.meta.env.VITE_USE_MOCKS !== 'false';

const simulateDelay = <T>(data: T, ms: number = 300): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
};

export const liveBoardService = {
  /**
   * Obtiene los vuelos en vivo para un aeropuerto y tipo de operación.
   */
  async getLiveFlights(query: LiveBoardQuery): Promise<LiveFlight[]> {
    const airport = query.airport.trim().toUpperCase();
    const flights = LIVE_BOARD_MOCKS[airport]?.[query.type] ?? [];

    if (USE_MOCKS) {
      return simulateDelay(flights, 300);
    }

    // =========================================================================
    // Preparado para el Sprint 2: Consumo del endpoint Spring Boot
    // =========================================================================
    /*
    const response = await axios.get<LiveFlight[]>('/api/v1/flight-status/live', {
      params: { airport, type: query.type },
    });
    return response.data;
    */
    return flights;
  },
};
