# Business Core Architecture (BCA)

> **“El negocio como núcleo. Todo lo demás es reemplazable.”**

**Business Core Architecture (BCA)** es un **estilo arquitectónico business-first** para construir software de larga vida, donde la lógica de negocio se encapsula como un activo autónomo y soberano, mientras que frameworks, aplicaciones e infraestructura pueden cambiar sin afectar al negocio.

BCA parte de una premisa simple pero crítica:

> El negocio cambia lentamente.  
> La tecnología cambia todo el tiempo.  
> **La arquitectura debe proteger aquello que aporta valor real.**

---

## 🎯 Propósito

BCA existe para garantizar que:

- la lógica de negocio sea **independiente de frameworks y aplicaciones**
- los Business Cores sean **altamente testeables**
- los cambios tecnológicos no obliguen a reescribir el negocio
- el sistema pueda migrar de runtime, framework o infraestructura con esfuerzo mínimo

En BCA, el negocio es el **núcleo absoluto** del sistema.  
Todo lo demás es descartable.

---

## 🧠 Principios Clave

### 🟢 Negocio Primero

La lógica de negocio es el activo principal del sistema.  
Toda decisión técnica debe adaptarse al negocio, nunca al revés.

---

### 🟢 Business Core Autónomo

Un **Business Core** es una **caja negra**:

- no conoce frameworks
- no conoce infraestructura
- no conoce aplicaciones
- solo contiene reglas, decisiones y lenguaje de negocio

---

### 🟢 Dominio = Business Core

Cada dominio de negocio vive en su **propio Business Core soberano**.

- los Cores no se importan entre sí
- no comparten entidades ni reglas
- pueden evolucionar o migrar de forma independiente

---

### 🟢 La Tríada de Contratos

Un Business Core se comunica **exclusivamente** mediante:

- **Input**  
  Intenciones de negocio expresadas en lenguaje de dominio.

- **Signal**  
  Hechos o resultados del negocio, sin conocer quién reacciona.

- **Port Público del Core**  
  Única puerta de entrada al Core.  
  Recibe Inputs y emite Signals.  
  Nada externo puede importar Domain o Services.

---

### 🟢 Infraestructura Reactiva

La infraestructura:

- implementa Ports requeridos
- escucha Signals
- traduce decisiones de negocio en efectos técnicos

La infraestructura **no toma decisiones de negocio**.

---

## 🧩 Orchestrator

El **Orchestrator** compone uno o más Business Cores para ejecutar un flujo de aplicación.

- conoce únicamente Ports
- no contiene reglas de negocio
- no depende de frameworks

Permite cambiar de tecnología sin afectar al negocio.

---

## 🏗️ Estructura Canónica

```txt
/src
 ├── core/                      # EL NEGOCIO (incorruptible)
 │   └── [domain-name]/
 │       ├── port/              # Port público del Core
 │       ├── input/             # Inputs (intenciones)
 │       ├── signal/            # Signals (hechos)
 │       ├── service/           # Orquestación interna
 │       ├── domain/            # Modelo y reglas
 │       └── ports/             # Ports requeridos
 │
 ├── orchestrator/              # Composición de Business Cores
 │
 └── app/                       # Aplicaciones / Frameworks
     ├── http/
     ├── cli/
     └── listeners/
```



**Autor:** Leandro Verón
