import { AuthResponse } from '../types/auth.types';
import {
  LoginFormValues,
  RegisterFormValues,
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
} from '../validations/auth.schema';
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

    // Preparado para el Sprint 2: Consumo de /api/v1/auth/login
    return MOCK_AUTH_RESPONSE;
  },

  /**
   * Registra una nueva cuenta de usuario
   */
  async register(data: RegisterFormValues): Promise<{ userId: string; message: string }> {
    if (USE_MOCKS) {
      await simulateDelay(null, 600);

      if (data.email.toLowerCase() === 'existente@correo.com') {
        throw new Error('El correo electrónico ya se encuentra registrado.');
      }

      return {
        userId: 'usr-' + Math.random().toString(36).substring(2, 9),
        message: 'Usuario registrado exitosamente',
      };
    }

    // Preparado para el Sprint 2: Consumo de /api/v1/auth/register
    return {
      userId: 'usr-3fa85f64-5717-4562-b3fc-2c963f66afa6',
      message: 'Usuario registrado exitosamente',
    };
  },

  /**
   * Solicita el restablecimiento de contraseña mediante correo
   */
  async forgotPassword(data: ForgotPasswordFormValues): Promise<{ message: string }> {
    if (USE_MOCKS) {
      await simulateDelay(null, 500);
      return {
        message: `Hemos enviado un enlace de recuperación a ${data.email}`,
      };
    }
    return { message: `Hemos enviado un enlace de recuperación a ${data.email}` };
  },

  /**
   * Resetea la contraseña con un token
   */
  async resetPassword(token: string, data: ResetPasswordFormValues): Promise<{ message: string }> {
    if (USE_MOCKS) {
      await simulateDelay(null, 500);
      return {
        message: 'Tu contraseña ha sido actualizada con éxito',
      };
    }
    return { message: 'Tu contraseña ha sido actualizada con éxito' };
  },

  /**
   * Cierra la sesión activa
   */
  async logout(): Promise<void> {
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token');
  },
};

