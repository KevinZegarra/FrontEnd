# Sistema de Diseño y Guía de Estilos UI/UX (ChasquiFly / FlightTracker)

Este documento define las directrices visuales, tokens de diseño y experiencia de usuario para toda la plataforma utilizando **Material UI (MUI v5+)**, React y TypeScript, basado en el prototipo validado en Figma.

---

## 🎨 Paleta de Colores y Design Tokens

### 1. Colores de Marca y Principales
| Uso / Variable | Código Hexadecimal | Significado / Contexto |
| :--- | :--- | :--- |
| **Primary Main** | `#A01B2D` | Rojo ChasquiFly (Botones principales, acentos de marca, estados activos) |
| **Primary Dark** | `#801524` | Rojo Oscuro (Hover en botones primarios) |
| **Primary Light** | `#FEF1EF` | Fondo suave primario (Hover en botones outlined) |
| **Primary Soft** | `#FDE8EC` | Fondo sutil para insignias/badges de marca |
| **Secondary Main** | `#1B2A4A` | Azul Marino Profundo (Navbar/Header, títulos y textos principales) |
| **Secondary Dark** | `#121C31` | Azul Marino Oscuro (Hover secundario) |
| **Secondary Light** | `#2A3F6D` | Azul Marino Medio |

### 2. Fondos, Superficies y Bordes
| Uso / Variable | Código Hexadecimal | Significado / Contexto |
| :--- | :--- | :--- |
| **Background Default** | `#FAF5F0` | Fondo general de la aplicación (Gris cálido) |
| **Background Paper** | `#FFFFFF` | Fondo de tarjetas (`Card`), modales (`Dialog`) y popovers |
| **Input Background** | `#F3F3F3` | Fondo de campos de texto y selectores |
| **Border / Divider** | `#E2DBD7` | Líneas divisorias, bordes de tarjetas y separadores |

### 3. Tipografía y Textos
| Uso / Variable | Código Hexadecimal | Significado / Contexto |
| :--- | :--- | :--- |
| **Text Primary** | `#1B2A4A` | Azul Marino para encabezados y texto principal |
| **Text Secondary** | `#6B615E` | Gris pizarra oscuro para subtítulos, etiquetas y descripciones |
| **Text Disabled / Tertiary** | `#9E9490` | Gris pizarra suave para placeholders e indicadores inactivos |

### 4. Semánticos y Estados de Vuelo
| Estado / Uso | Color Main | Fondo Suave | Contexto |
| :--- | :--- | :--- | :--- |
| **Success (A tiempo / Directo)** | `#10B981` / `#15803D` | `#DCFCE7` | Vuelos puntuales, vuelos sin escalas, confirmaciones |
| **Warning / Accent (IA / Alertas)** | `#F97316` / `#F59E0B` | `rgba(249,115,22,0.15)` | Vuelos demorados, recomendaciones inteligentes IA |
| **Error (Cancelado / Fallo)** | `#EF4444` | `#FEE2E2` | Vuelos cancelados, errores de validación |
| **Info (Embarque / Progreso)** | `#2563EB` | `#DBEAFE` | Vuelos en sala de embarque, procesos en curso |

---

## 🔤 Tipografía y Jerarquía Visual

- **Familia tipográfica principal:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.
- **Pesos soportados:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold).

| Variante MUI | Tamaño / Line-Height | Peso (Weight) | Uso / Elemento |
| :--- | :--- | :--- | :--- |
| `h1` | 2.25rem (36px) / 1.2 | 800 (ExtraBold) | Hero banner y títulos principales de pantalla |
| `h2` | 1.75rem (28px) / 1.3 | 700 (Bold) | Títulos de sección y encabezados de módulos |
| `h3` | 1.375rem (22px) / 1.35 | 700 (Bold) | Títulos de tarjetas principales y encabezados modales |
| `h4` / `h5` | 1.125rem / 1rem | 600 (SemiBold) | Subtítulos de tarjetas y nombres de vuelos |
| `body1` | 1.0rem (16px) / 1.6 | 400 (Regular) | Párrafos generales y textos descriptivos |
| `body2` | 0.875rem (14px) / 1.6 | 400 (Regular) | Detalles de itinerarios, escalas y notas secundarias |
| `button` | 0.875rem (14px) | 600 (SemiBold) | Botones (sin forzado a mayúsculas: `textTransform: 'none'`) |
| `caption` | 0.75rem (12px) / 1.4 | 500 (Medium) | Códigos de vuelo (IATA), badges y leyendas |

---

## 📐 Formas, Bordes Redondeados y Sombras

### Bordes Redondeados (`Border Radius`)
- `xs` (6px): Chips, Badges, botones pequeños.
- `sm` (8px): Botones estándar (`MuiButton`), inputs (`MuiOutlinedInput`), selectores.
- `md` (12px): Paneles secundarios y contenedores `MuiPaper`.
- `lg` (16px): Tarjetas de vuelo (`MuiCard`) y ventanas modales (`MuiDialog`).

### Sombras (`Box Shadows`)
- **Card Default:** `0px 4px 20px rgba(0, 0, 0, 0.05)`
- **Card Hover:** `0px 8px 30px rgba(0, 0, 0, 0.08)`
- **Modal / Dialog:** `0px 12px 40px rgba(27, 42, 74, 0.12)`

---

## 🧩 Overrides Globales de Componentes MUI

1. **`MuiButton`:**
   - `borderRadius: 8px`, `textTransform: 'none'`, `fontWeight: 600`, `disableElevation: true`.
2. **`MuiCard`:**
   - `borderRadius: 16px`, borde sutil `1px solid #E2DBD7`, sombra suave y transición `hover`.
3. **`MuiOutlinedInput`:**
   - `borderRadius: 8px`, fondo neutro `#F3F3F3`, borde `#E2DBD7`, foco con fondo `#FFFFFF` y borde primario `#A01B2D`.
4. **`MuiChip`:**
   - `borderRadius: 6px`, variantes semánticas con fondos suaves y bordes translúcidos correspondientes.
5. **`MuiAppBar`:**
   - Fondo Azul Marino `#1B2A4A`, texto blanco y sombra ligera.

---

## 📱 Responsividad y Breakpoints
- **Mobile (`xs: 0px - 599px`):** Menú hamburguesa Drawer, tarjetas de vuelo apiladas, filtros colapsados en bottom sheet / drawer.
- **Tablet (`sm / md: 600px - 1199px`):** Formulario de búsqueda en dos filas, layout adaptable.
- **Desktop (`lg / xl: 1200px+`):** Layout completo con sidebar de filtros permanente y listado de resultados centralizado (ancho máx. 1280px).
