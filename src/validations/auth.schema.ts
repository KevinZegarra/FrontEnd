import { z } from 'zod';

/**
 * Esquema de validación para Inicio de Sesión (Login)
 */
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'El correo electrónico es obligatorio')
    .email('Ingrese un correo electrónico válido (ej. usuario@dominio.com)'),
  password: z
    .string()
    .min(1, 'La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  rememberMe: z.boolean().default(false),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

/**
 * Esquema de validación para Registro de Nuevo Usuario
 */
export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'El nombre es obligatorio')
      .min(2, 'El nombre debe tener al menos 2 caracteres'),
    lastName: z
      .string()
      .min(1, 'El apellido es obligatorio')
      .min(2, 'El apellido debe tener al menos 2 caracteres'),
    email: z
      .string()
      .min(1, 'El correo electrónico es obligatorio')
      .email('Ingrese un correo electrónico válido'),
    password: z
      .string()
      .min(8, 'La contraseña debe tener mínimo 8 caracteres')
      .regex(/[A-Z]/, 'Debe incluir al menos una letra mayúscula')
      .regex(/[0-9]/, 'Debe incluir al menos un número'),
    confirmPassword: z.string().min(1, 'Confirme su contraseña'),
    phone: z.string().optional(),
    termsAccepted: z
      .boolean()
      .refine((val) => val === true, 'Debe aceptar los términos y condiciones'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

/**
 * Esquema de validación para Solicitud de Recuperación de Contraseña
 */
export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'El correo electrónico es obligatorio')
    .email('Ingrese un correo electrónico válido donde recibir las instrucciones'),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

/**
 * Esquema de validación para Reseteo de Contraseña
 */
export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'La nueva contraseña debe tener mínimo 8 caracteres')
      .regex(/[A-Z]/, 'Debe incluir al menos una letra mayúscula')
      .regex(/[0-9]/, 'Debe incluir al menos un número'),
    confirmPassword: z.string().min(1, 'Confirme su nueva contraseña'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

