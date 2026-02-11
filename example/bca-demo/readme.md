# BCA Demo – Múltiples Business Cores y Portabilidad Real entre Frameworks

Este demo demuestra de forma concreta y verificable los principios fundamentales de **Business Core Architecture (BCA)**:

* **El negocio es un activo soberano.**
* **Los Business Cores son autónomos y portables.**
* **Los frameworks son reemplazables.**

---

## 🎯 Objetivo del Demo
El objetivo de este demo es demostrar con código, no solo afirmar, que:

* La lógica de negocio puede encapsularse en **múltiples Business Cores autónomos**.
* Cada Core puede evolucionar de forma independiente.
* Los mismos Business Cores pueden reutilizarse **sin modificar una sola línea**.
* Cambiar de framework **no impacta el negocio**.

> Este demo no busca mostrar complejidad funcional, sino integridad arquitectónica.

---

## 🧠 Business Cores del Demo
El sistema está compuesto por dos Business Cores independientes:

### 🧩 core-business
Representa el flujo principal y las decisiones centrales del negocio.
* Dominio propio.
* Reglas de negocio propias.
* Inputs y Signals propios.
* No conoce lógica de pricing.
* No depende de otros Cores.

### 💰 core-pricing
Representa las decisiones relacionadas con precios.
* Dominio completamente independiente.
* Reglas y políticas propias.
* No comparte entidades con `core-business`.
* Puede evolucionar o reemplazarse sin afectar al resto del sistema.

---

## 🔒 Regla de Soberanía del Core
En BCA:
1.  Los Business Cores **no se importan** entre sí.
2.  Los Business Cores **no comparten** modelos de dominio.
3.  Los Business Cores **no se comunican** directamente.

La coordinación entre Cores ocurre exclusivamente fuera de ellos.

---

## 🧩 Orchestrator – Composición sin Lógica de Negocio
El Orchestrator es el componente responsable de componer uno o más Business Cores para ejecutar un flujo de aplicación.

* Conoce únicamente los **Ports públicos** de cada Core.
* Orquesta la secuencia de llamadas.
* **No contiene reglas de negocio.**
* No depende de frameworks.

```text
[ Aplicación / Framework ]
              ↓
        [ Orchestrator ]
          ↓          ↓
   [ core-business ] [ core-pricing ]
```

---

📁 Estructura REAL del Proyecto
Este demo exhibe la potencia real de BCA: la capacidad de copiar y pegar el Core y el Orchestrator en diferentes frameworks y que funcionen instantáneamente sin una sola modificación.

```text
bca-demo/
 ├── node-app/                      # Implementación Node.js
 │   ├── core/                      # <--- COPIAR Y PEGAR
 │   └── orchestrator/              # <--- COPIAR Y PEGAR
 │
 ├── nestjs-app/                    # Implementación NestJS
 │   ├── core/                      # <--- MISMO CÓDIGO
 │   └── orchestrator/              # <--- MISMO CÓDIGO
 │
 └── fastify-app/                   # Implementación Fastify
     ├── core/                      # <--- SIN CAMBIOS
     └── orchestrator/              # <--- SIN CAMBIOS
```

---

🔑 Regla Crítica de BCA
Las carpetas core/ y orchestrator/ son tecnológicamente agnósticas:

Sin refactors ni adaptaciones.

Sin imports de frameworks ni dependencias cruzadas.

Sin condicionales técnicos para detectar el runtime.

Si un Business Core necesita cambiar para adaptarse a un framework, la arquitectura ha fallado.

---

🧠 ¿Por qué copiar los Cores y no compartirlos como librería?
Este demo no comparte los Cores como un paquete npm de forma deliberada:

Soberanía sobre el Tooling: Las restricciones de TypeScript (paths, builds) suelen obligar al negocio a adaptarse al tooling. En BCA, el negocio manda.

Portabilidad Radical: Al ser autónomo, el Core puede moverse entre equipos, tecnologías y arquitecturas (de un monolito a un microservicio) sin fricción.

Resiliencia: El activo más valioso de la empresa (su lógica) sobrevive a la obsolescencia de cualquier ecosistema de paquetes.

---

## 🔁 Qué Cambia y Qué No

### ❌ Lo que NUNCA cambia

- Reglas de negocio
- Modelos de dominio
- Inputs
- Signals
- Límites entre Cores
- Autonomía del negocio

### ✅ Lo que SÍ puede cambiar

- Frameworks
- Aplicaciones
- Transporte (HTTP, CLI, etc.)
- Infraestructura
- Runtime
- Estrategia de deployment

Esta separación es la **promesa central de Business Core Architecture**.

---

## 🎓 Enfoque Académico

Este demo puede utilizarse como **material educativo** para enseñar:

- Arquitectura business-first
- Soberanía del negocio
- Múltiples Business Cores
- Composición sin acoplamiento
- Portabilidad arquitectónica
- Sistemas de larga vida

---

## 🧠 Ejercicios Propuestos

Para estudiantes, arquitectos o revisores:

- Agregar un nuevo framework sin modificar ningún Business Core
- Incorporar un nuevo Business Core y componerlo desde el Orchestrator
- Modificar reglas de pricing sin afectar el flujo principal
- Reemplazar completamente un Core y analizar el impacto
- Intentar violar las reglas (importar un Core dentro de otro) y analizar por qué falla

---

## 📌 Idea Clave

Este demo **no trata sobre Node, NestJS o Fastify**.

Demuestra que:

> El negocio puede vivir más tiempo que la tecnología que lo ejecuta.

Esa es la esencia de **Business Core Architecture (BCA)**.