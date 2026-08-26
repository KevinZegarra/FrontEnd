# Sprint 1: Diseño Frontend y Bases de Control de Versiones

- **Duración:** Semanas 1 a 6.
- **Hito de Evaluación:** **Avance de Proyecto Final 1 (APF1)** (Semana 6).
- **Objetivo Principal:** Construcción de la interfaz de usuario completa (UI/UX) con React, TypeScript, Vite y Material UI, dividida por secciones visuales bajo la regla estricta: **Todo componente debe contar con un diseño previo en Figma antes de programarse**.
- **Alcance Técnico:** Frontend exclusivo con Mock Data (Single-Tenant, sin lógica backend en este sprint).

---

## 🔄 Flujo de Trabajo Oficial del Sprint 1

```
 ┌────────────────┐       ┌──────────────────────┐       ┌────────────────────────┐       ┌─────────────────────┐
 │ 1. DISEÑO EN   │  ──►  │ 2. REVISIÓN DE       │  ──►  │ 3. IMPLEMENTACIÓN EN   │  ──►  │ 4. INTEGRACIÓN Y    │
 │    FIGMA       │       │    ARQUITECTURA/MUI  │       │    REACT + TS + MUI    │       │    CONTROL EN HUBS  │
 └────────────────┘       └──────────────────────┘       └────────────────────────┘       └─────────────────────┘
```

1. **Figma First (Diseño previo mandatorio):** Ningún desarrollador inicia código en React sin el prototipo/frame en Figma validado para su sección.
2. **Implementación Modular por Secciones:** Cada integrante desarrolla su componente en `src/components/` o `src/modules/` garantizando coincidencia con los tokens de diseño (colores, espaciados y tipografía).
3. **Puntos de Control (3 Reuniones de Hito en el Sprint):**
   - **Reunión de Control 1 (Semana 2):** Cierre y aprobación de Wireframes/Mockups en Figma + Scaffolding de Vite, Routing y Theme MUI.
   - **Reunión de Control 2 (Semana 4):** Revisión de componentes atómicos/moleculares construidos y ensamblaje de pantallas principales (Buscador, Resultados, Board).
   - **Reunión de Control 3 (Semana 6):** QA visual, responsividad en móviles/tablets/desktop, integración con Mock Data y entrega de **APF1**.

---

## 🏛️ Asignación Arquitectónica de Secciones y Componentes MUI

| Sección Visual | Componentes de Material UI (MUI v5) | Responsabilidad / Descripción | Asignación (Equipo de 7) |
| :--- | :--- | :--- | :--- |
| **1. Header & Navegación** | `AppBar`, `Toolbar`, `IconButton`, `Menu`, `MenuItem`, `Drawer` (mobile), `Badge`, `Avatar` | Barra superior responsiva con logo, navegación a módulos, dropdown de perfil/notificaciones y menú hamburguesa para móviles. | **Integrante 2** |
| **2. Hero Section** | `Box`, `Container`, `Typography`, `Stack` con gradiente `linear-gradient` aeronáutico | Encabezado principal con título de impacto, subtítulo persuasivo y fondo temático aeroportuario. | **Integrante 1 (Scrum Master)** |
| **3. Barra / Formulario de Búsqueda** | `Paper`, `Grid`, `Autocomplete`, `TextField`, `Select`, `Button`, `ToggleButtonGroup`, `Popper` | Selector de viaje (Solo ida / Ida y vuelta), inputs de Origen/Destino con códigos IATA, selector de fechas, pasajeros y clase. Validado con **Zod**. | **Integrante 4** |
| **4. Panel Lateral de Filtros** | `Paper` (desktop) / `Drawer` (mobile), `Slider`, `FormGroup`, `FormControlLabel`, `Checkbox`, `RadioGroup`, `Divider`, `Typography` | Filtros dinámicos por rango de precio (Slider doble), aerolíneas disponibles, número de escalas (Directo / 1 escala) y rangos horarios. | **Integrante 5** |
| **5. Tarjetas de Vuelo y Resultados** | `Card`, `CardContent`, `CardActions`, `Grid`, `Stack`, `Chip` (`StatusChip`), `Accordion`, `AccordionSummary`, `Button`, `Skeleton` (loading) | Listado comparativo de vuelos con logo de aerolínea, horas, escalas, duración total, desglose de precio y botón de compra/seguimiento. | **Integrante 5** |
| **6. Tablero en Vivo de Estado (FIDS)** | `TableContainer`, `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell`, `Tabs`, `Tab`, `TextField` (search rápido), `Chip` | Pantalla estilo aeropuerto con estatus en tiempo real (`A tiempo`, `Demorado`, `Cancelado`, `Embarcando`), puerta y terminal. | **Integrante 6** |
| **7. Mis Vuelos (Trips) y Modal de Alertas** | `Dialog`, `DialogTitle`, `DialogContent`, `DialogActions`, `Switch`, `FormControlLabel`, `List`, `ListItem`, `ListItemText`, `CountdownDisplay` | Vista de agenda de viajes guardados con contador regresivo de salida y modal para configurar alertas de proximidad (24h / 3h). | **Integrante 7** |
| **8. Autenticación (Login / Registro / Perfil)** | `Dialog` / `Card`, `TextField`, `Button`, `InputAdornment`, `IconButton` (ver password), `Alert`, `Link` | Modales y vistas de inicio de sesión, registro con validaciones inline de Zod y ficha de perfil. | **Integrante 3** |
| **9. Footer** | `Box`, `Container`, `Grid`, `Typography`, `Link`, `Divider` | Pie de página con enlaces corporativos, políticas de privacidad, redes y copyright. | **Integrante 2** |

---

## 🚀 Módulos y Pantallas Implementadas en Sprint 1

### 1. Pantalla de Inicio (Home)
- `Header.tsx`: Barra superior con menú responsive, logo corporativo y drawer móvil.
- `HeroSearch.tsx`: Hero banner con selector de viaje (Ida y vuelta / Solo ida) y panel de búsqueda rápido.
- `PopularDestinations.tsx`: Grid de destinos (Cusco, Arequipa, Iquitos, Piura) con soporte de Skeletons.
- `AiFlightComparison.tsx`: Escenario de recomendación asistida por IA con widget "VS".
- `PromoBanner.tsx`: Promoción de alertas tempranas de vuelo (24h y 3h).
- `Footer.tsx`: Pie de página de 4 columnas y enlaces corporativos.

### 2. Pantalla de Búsqueda y Resultados (`SearchResultsPage`)
- `SearchSummaryBar.tsx`: Cabecera resumen de ruta (ej. *Lima a Cusco · 15 Sep - 20 Sep*) con opción de edición.
- `FilterSidebar.tsx`: Panel lateral reactivo con filtros de:
  - **Escalas:** Directo (`S/. 120`), 1 escala (`S/. 180`), 2+ escalas (`S/. 250`).
  - **Precio:** Slider de rango continuo (`S/. 80 – S/. 500`).
  - **Aerolíneas:** Checkboxes dinámicos para LATAM, Sky Airline, JetSMART y Star Perú.
  - **Horarios de Salida:** Mañana (05:00 - 12:00), Tarde (12:00 - 18:00) y Noche (18:00 - 24:00).
- `FlightCard.tsx`: Tarjeta de itinerario con badge de aerolínea, horario despegue/aterrizaje, tiempo de vuelo, indicador de escala (`Directo` / `1 escala`), desglose de tarifa y botón "Ver detalles".
- `SearchResultsPage.tsx`: Vista principal que ensambla la barra resumen, ordenamiento por precio/rapidez, barra de filtros (incluyendo Drawer inferior para móviles) y listado de resultados.

### 3. Pantalla de Detalle de Vuelo (`FlightDetailPage`)
- `FlightDetailHeader.tsx`: Cabecera del itinerario con aerolínea, matrícula del avión, fecha de viaje, horarios y badges de escala.
- `FlightAmenitiesAndPolicies.tsx`: Tarjetas informativas de equipaje en cabina/bodega, servicios a bordo (Wi-Fi, snacks) y políticas de cambio/cancelación.
- `FareSummary.tsx`: Panel sticky de resumen de tarifa con desglose de base e impuestos (`Total: S/. 145`), redirección segura al portal oficial de la aerolínea y acciones rápidas (*Compartir*, *Guardar en Mis Vuelos*).
- `AlternativeFlights.tsx`: Listado de vuelos alternativos recomendados con botón de selección rápida.
- `FlightDetailPage.tsx`: Vista completa con Breadcrumbs interactivos y carga con Skeletons.

### 4. Módulo de Autenticación (`LoginPage`)
- `auth.schema.ts`: Esquemas de validación simétricos con Zod para correo electrónico, contraseña mínima y recordatorio de sesión.
- `LoginForm.tsx`: Formulario controlado con `react-hook-form` + `@hookform/resolvers/zod`, visibilidad de contraseña (`IconButton`), alerta de error y estado de carga (`CircularProgress`).
- `SocialLoginButtons.tsx`: Botones de acceso rápido mediante proveedores OAuth (Google y Apple).
- `LoginPage.tsx`: Pantalla de inicio de sesión con tarjeta centrada de 480px, fondo cálido `#FAF5F0` y enlace a registro.

### 5. Pantalla de Seguimiento de Vuelo en Tiempo Real (`FlightTrackerPage`)
- `FlightTrackerSearch.tsx`: Buscador superior por número de vuelo (`LA 2045`) y fecha de salida.
- `FlightStatusBanner.tsx`: Banner suave con información de ruta y tags de estado (`En vuelo`, `A tiempo`).
- `FlightTimelineProgressBar.tsx`: Barra de progreso de vuelo animada con avión en tiempo real (60% completado, 585 km) y horas reales/estimadas.
- `FlightLiveInfoCard.tsx`: Ficha técnica de telemetría (altitud 35,000 ft, velocidad 850 km/h) y terminales/gates asignados.
- `FlightChronology.tsx`: Historial vertical secuencial con nodos interactivos (Check-in, Embarque, Despegue y Llegada).
- `FlightNotificationToggles.tsx`: Switches interactivos para configuración de alertas de vuelo.
- `FlightTrackerPage.tsx`: Vista integradora con soporte asíncrono y feedback visual.

### 6. Pantalla de Comparación de Vuelos (`CompareFlightsPage`)
- `CompareHeaderCards.tsx`: Tarjetas superiores enfrentadas (Sky Airline vs LATAM Airlines) con insignia central circular "VS".
- `CompareSpecsTable.tsx`: Tabla cruzada de factores técnicos iterada dinámicamente (`.map()`) con comparación de precios, equipajes, flexibilidad, puntualidad y amenidades.
- `AIRecommendationBanner.tsx`: Bloque destacado con gradiente oscuro, badge de "RECOMENDACIÓN IA", argumentos analíticos y disclaimer legal.
- `CompareFlightsPage.tsx`: Vista orquestadora con Breadcrumbs interactivos y estados de carga con Skeletons.

### 7. Capa de Servicios y Mocks (Feature Toggle)
- `src/types/`: Interfaces TypeScript para `home`, `flight`, `flightDetail`, `auth`, `tracker` y `compare`.
- `src/mocks/`: Datos estructurados de aeropuertos, rutas, vuelos, políticas, usuario demo, telemetría y matrices de comparación.
- `src/services/`: Capas de servicio con `VITE_USE_MOCKS` para alternar entre llamadas asíncronas simuladas (Sprint 1) y endpoints de Spring Boot (Sprint 2).

---

## 📋 Criterios de Aceptación para el Hito APF1
1. **Figma Completo:** Prototipo interactivo navegable con todas las secciones y variantes responsive (Desktop 1440px y Mobile 375px).
2. **Fidelidad de Implementación:** El código React en `FrontEnd/` debe reflejar fielmente los estilos, espaciados (grid de 8px) y colores del Figma.
3. **Manejo de Estado UI con Mock Data:** Búsqueda y filtros funcionando con catálogo local tipado en TypeScript.
4. **Validaciones en Tiempo Real:** Todos los formularios integrados con React Hook Form y Zod mostrando feedback visual inmediato.
5. **Cero Lógica Backend:** No se requiere conexión a base de datos ni servidor Spring Boot en este sprint.
