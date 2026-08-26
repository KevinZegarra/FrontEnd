import { PopularDestination, AiComparisonScenario, AirportOption } from '../types/home.types';
import { MOCK_POPULAR_DESTINATIONS, MOCK_AI_COMPARISON_SCENARIO, MOCK_AIRPORTS } from '../mocks/homeMocks';

/**
 * Feature Toggle para alternar entre Mock Data y API REST de Spring Boot
 * En Sprint 1 opera por defecto en modo MOCK (USE_MOCKS = true)
 */
const USE_MOCKS = import.meta.env.VITE_USE_MOCKS !== 'false';

// Helper para simular latencia de red en entorno de pruebas
const simulateNetworkDelay = <T>(data: T, delayMs: number = 300): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delayMs);
  });
};

export const homeService = {
  /**
   * Obtiene la lista de destinos populares para la sección de inicio
   */
  async getPopularDestinations(): Promise<PopularDestination[]> {
    if (USE_MOCKS) {
      return simulateNetworkDelay(MOCK_POPULAR_DESTINATIONS, 250);
    }

    // =========================================================================
    // Preparado para integración Backend Spring Boot (Sprint 2)
    // =========================================================================
    /*
    const response = await axios.get<PopularDestination[]>('/api/v1/flights/popular-destinations');
    return response.data;
    */
    return MOCK_POPULAR_DESTINATIONS;
  },

  /**
   * Obtiene el escenario de recomendación y comparación asistida por IA
   */
  async getAiComparisonScenario(): Promise<AiComparisonScenario> {
    if (USE_MOCKS) {
      return simulateNetworkDelay(MOCK_AI_COMPARISON_SCENARIO, 200);
    }

    // =========================================================================
    // Preparado para integración Backend Spring Boot (Sprint 2)
    // =========================================================================
    /*
    const response = await axios.get<AiComparisonScenario>('/api/v1/flights/ai-recommendation');
    return response.data;
    */
    return MOCK_AI_COMPARISON_SCENARIO;
  },

  /**
   * Obtiene el catálogo de aeropuertos para el autocompletado del buscador
   */
  async getAirports(): Promise<AirportOption[]> {
    if (USE_MOCKS) {
      return simulateNetworkDelay(MOCK_AIRPORTS, 150);
    }

    /*
    const response = await axios.get<AirportOption[]>('/api/v1/airports');
    return response.data;
    */
    return MOCK_AIRPORTS;
  },
};
