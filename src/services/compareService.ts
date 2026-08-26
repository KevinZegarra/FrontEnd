import { FlightComparisonData } from '../types/compare.types';
import { MOCK_FLIGHT_COMPARISON } from '../mocks/compareMocks';

const USE_MOCKS = import.meta.env.VITE_USE_MOCKS !== 'false';

const simulateDelay = <T>(data: T, ms: number = 300): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
};

export const compareService = {
  /**
   * Obtiene la comparación detallada entre dos vuelos
   */
  async getFlightComparison(flightIdA?: string, flightIdB?: string): Promise<FlightComparisonData> {
    if (USE_MOCKS) {
      await simulateDelay(null, 300);
      return MOCK_FLIGHT_COMPARISON;
    }

    // =========================================================================
    // Preparado para el Sprint 2: Consumo del endpoint Spring Boot
    // =========================================================================
    /*
    const response = await axios.get<FlightComparisonData>('/api/v1/flights/compare', {
      params: { flightIdA, flightIdB },
    });
    return response.data;
    */
    return MOCK_FLIGHT_COMPARISON;
  },
};
