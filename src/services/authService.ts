import { AuthResponse } from '../types/auth.types';
import { LoginFormValues } from '../validations/auth.schema';
import { MOCK_AUTH_RESPONSE, MOCK_TEST_USER } from '../mocks/authMocks';

const USE_MOCKS = import.meta.env.VITE_USE_MOCKS !== 'false';

const simulateDelay = <T>(data: T, ms: number = 400): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
};

export const authService = {
  /**
   * Inicia sesión con credenciales de usuario
   */
  async login(credentials: LoginFormValues): Promise<AuthResponse> {
    if (USE_MOCKS) {
      await simulateDelay(null, 500);

      // Simulación de validación de credenciales
      // Permite el correo mockeado o cualquier correo válido con contraseña no vacía
      if (credentials.email.toLowerCase() === 'error@correo.com') {
        throw new Error('Credenciales inválidas. Verifique su correo o contraseña.');
      }

      const response: AuthResponse = {
        ...MOCK_AUTH_RESPONSE,
        user: {
          ...MOCK_TEST_USER,
          email: credentials.email,
        },
      };

      // Guardar token en storage si rememberMe está activo
      if (credentials.rememberMe) {
        localStorage.setItem('auth_token', response.accessToken);
      } else {
        sessionStorage.setItem('auth_token', response.accessToken);
      }

      return response;
    }

    // =========================================================================
    // Preparado para el Sprint 2: Consumo del endpoint Spring Boot
    // =========================================================================
    /*
    const response = await axios.post<AuthResponse>('/api/v1/auth/login', {
      email: credentials.email,
      password: credentials.password,
    });
    return response.data;
    */
    return MOCK_AUTH_RESPONSE;
  },

  /**
   * Cierra la sesión activa
   */
  async logout(): Promise<void> {
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token');
  },
};
