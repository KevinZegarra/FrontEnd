import { FlightDetail } from '../types/flightDetail.types';
import { MOCK_FLIGHT_DETAIL } from '../mocks/flightDetailMocks';

const USE_MOCKS = import.meta.env.VITE_USE_MOCKS !== 'false';

const simulateDelay = <T>(data: T, ms: number = 250): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
};

export const flightDetailService = {
  /**
   * Obtiene los detalles completos de un vuelo por su ID
   */
  async getFlightDetailById(flightId: string): Promise<FlightDetail> {
    if (USE_MOCKS) {
      return simulateDelay(MOCK_FLIGHT_DETAIL, 200);
    }

    // =========================================================================
    // Preparado para el Sprint 2: Consumo directo de Spring Boot
    // =========================================================================
    /*
    const response = await axios.get<FlightDetail>(`/api/v1/flights/${flightId}/detail`);
    return response.data;
    */
    return MOCK_FLIGHT_DETAIL;
  },
};
