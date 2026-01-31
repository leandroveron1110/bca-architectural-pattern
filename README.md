# Business Core Architecture (BCA)
> **"El negocio como núcleo. Todo lo demás es reemplazable."**

**BCA** es un patrón arquitectónico diseñado para proteger la lógica de negocio del cambio tecnológico constante. A diferencia de otros enfoques, en BCA el negocio es un sistema autónomo e independiente de frameworks, bases de datos o protocolos.

## 👤 Autoría
Este patrón y manifiesto han sido creados por **Leandro Verón**. BCA nace para resolver la fragilidad del software moderno y garantizar que el valor real de una aplicación sobreviva a las herramientas que la rodean.

## 🚀 ¿Por qué BCA? (BCA vs. Clean/Hexagonal)
Mientras que en la arquitectura Clean o Hexagonal es común encontrar "ruido" técnico (como logs, métricas o inyección de dependencias de infraestructura) dentro del dominio, **BCA impone reglas no negociables**:

1. **Negocio Primero:** El Core es el activo principal.
2. **Core Autónomo:** El negocio no conoce frameworks, no accede a DBs, no loguea y no registra métricas.
3. **Signals (Hechos de Negocio):** El core no produce efectos técnicos, produce hechos. La infraestructura es la que reacciona a estos hechos para ejecutar persistencia o logging.

## 🛠️ Ejemplo de Portabilidad Total
En este repo encontrarás el **mismo Business Core** funcionando simultáneamente en:
- **NestJS:** Para una infraestructura robusta.
- **Fastify:** Para una implementación ultra ligera.
*Cero cambios en el código de negocio entre ambos.*
