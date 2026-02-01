# Business Core Architecture (BCA)
> **"El negocio como núcleo. Todo lo demás es reemplazable."**

**Business Core Architecture (BCA)** es un estilo arquitectónico orientado a la longevidad del software.  
Su objetivo es garantizar que la lógica de negocio pueda sobrevivir al cambio constante de frameworks, infraestructuras y tecnologías.

En BCA, el negocio se modela como un **sistema autónomo**, independiente de decisiones técnicas y completamente portable.

---

## 🎯 Objetivo

BCA existe para resolver un problema recurrente en sistemas modernos:

> El negocio cambia lentamente, pero la tecnología cambia todo el tiempo.

La arquitectura debe proteger aquello que aporta valor real.

---

## 🧠 Principios Clave

BCA se rige por reglas explícitas y no negociables:

1. **Negocio Primero**  
   La lógica de negocio es el activo principal del sistema.

2. **Core Autónomo**  
   El Business Core:
   - no conoce frameworks  
   - no accede a bases de datos  
   - no registra logs ni métricas  
   - no depende de infraestructura  

3. **Signals (Hechos de Negocio)**  
   El core no ejecuta efectos técnicos.  
   Produce hechos de negocio que la infraestructura interpreta y materializa.

Estos principios permiten que el negocio permanezca estable mientras la tecnología evoluciona.

---

## 🔁 Portabilidad Total (Ejemplo)

Este repositorio demuestra la portabilidad del enfoque:

El **mismo Business Core** se ejecuta simultáneamente en:

- **NestJS** — infraestructura completa
- **Fastify** — infraestructura ligera

➡️ Sin modificar una sola línea de código de negocio.

---

## 🏗️ Relación con otros estilos

BCA toma ideas de arquitecturas conocidas como Clean y Hexagonal,  
pero define reglas más estrictas para eliminar ambigüedades y proteger el negocio a largo plazo.

No es un framework ni una metodología, sino un **estilo arquitectónico autocontenido**.

---

## 👤 Autoría

Business Core Architecture (BCA) fue creada y formalizada por **Leandro Verón**  
como respuesta a los problemas reales de mantenimiento, migración y evolución de sistemas de larga vida.
