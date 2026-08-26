import { AuthResponse, UserProfile } from '../types/auth.types';

export const MOCK_TEST_USER: UserProfile = {
  id: 'usr-3fa85f64-5717-4562-b3fc-2c963f66afa6',
  email: 'ejemplo@correo.com',
  firstName: 'Juan',
  lastName: 'Pérez',
  phone: '+51987654321',
  role: 'ROLE_USER',
  createdAt: '2026-01-15T10:00:00Z',
};

export const MOCK_AUTH_RESPONSE: AuthResponse = {
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mockAccessTokenForSprint1...',
  refreshToken: 'dGhpcy1pcy1hLW1vY2stcmVmcmVzaC10b2tlbi1mb3Itc3ByaW50LTE...',
  tokenType: 'Bearer',
  expiresIn: 1800,
  user: MOCK_TEST_USER,
};
