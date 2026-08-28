# ==============================================================================
# FlightTracker Frontend - Dockerfile (Modo Pausado / Agnóstico - ADR 02)
# ==============================================================================
# NOTA DE ARQUITECTURA:
# El uso de Docker se mantiene en modo standby/placeholder para el flujo diario.
# Descomentar e integrar en fases avanzadas según requerimientos de entrega.

# Stage 1: Build de la aplicación con Node.js
# FROM node:20-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# Stage 2: Servidor Web Nginx para producción
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
