# MANIFIESTO OFICIAL  
## Business Core Architecture (BCA)

---

## 1. Introducción

El software moderno vive más tiempo que las tecnologías que lo rodean.  
Frameworks, lenguajes, proveedores cloud y modas técnicas cambian constantemente,
mientras que el negocio permanece.

**Business Core Architecture (BCA)** nace para resolver un problema fundamental:  
proteger y encapsular la lógica de negocio como un activo autónomo,
independiente de aplicaciones, frameworks e infraestructura.

---

## 2. Propósito

Garantizar que la lógica de negocio sea:

- independiente de frameworks y herramientas
- altamente testeable
- portable entre aplicaciones y tecnologías

En BCA, el negocio es el núcleo absoluto del sistema.  
Todo lo demás es reemplazable.

---

## 3. Principios Fundamentales

### 3.1 Negocio Primero

La lógica de negocio es el activo principal del sistema.  
Toda decisión técnica debe adaptarse al negocio, nunca al revés.

---

### 3.2 Core Autónomo

Un Business Core es una **caja negra**.

- no conoce frameworks
- no conoce infraestructura
- no conoce aplicaciones

Solo contiene reglas, decisiones y comportamiento de negocio.

---

### 3.3 Portabilidad Total

Un Core debe poder ejecutarse en cualquier entorno sin modificar su lógica interna.  
Cambiar la aplicación o la infraestructura no debe impactar el Core.

---

### 3.4 La Tríada de Interfaces de BCA

BCA define tres contratos explícitos que sellan al Core como una caja negra:

#### 1️⃣ Input

Los Inputs representan **intenciones de negocio**.

- son inmutables
- usan lenguaje del dominio
- no representan transporte (HTTP, CLI, RPC)

---

#### 2️⃣ Signal

Los Signals representan **hechos o resultados de negocio**.

- expresan decisiones del Core
- no conocen quién los consume
- no son respuestas técnicas

---

#### 3️⃣ Port del Core (Public Port)

El Port del Core es la **única puerta pública** de un Business Core.

- define las capacidades que ofrece el Core
- recibe Inputs y emite Signals
- encapsula completamente la implementación interna

Nada externo puede importar Domain, Services u otras partes internas del Core.  
**Solo el Port.**

---

### 3.5 Ports Requeridos (Dependencias)

Cuando un Core necesita interactuar con el mundo exterior, define **Ports Requeridos**.

- son interfaces declaradas por el Core
- son implementadas por infraestructura
- no contienen lógica de negocio

Ejemplos: reloj, persistencia, cálculo de distancia, mensajería.

---

### 3.6 Infraestructura Reactiva

La infraestructura:

- implementa Ports Requeridos
- escucha Signals
- traduce decisiones de negocio en efectos técnicos

La infraestructura **no toma decisiones de negocio**.

---

### 3.7 Dominio Composicional

El Domain representa el corazón conceptual del negocio.  
Se concibe como un conjunto de conceptos y reglas que colaboran entre sí,
evitando clases gigantes y complejidad accidental.

El Domain está compuesto por:

#### • Modelo

Conceptos centrales del negocio.

- Entidades
- Agregados (si aplica)
- Estados

Ejemplos: Shipment, Zone, Vehicle, BusinessDay.

---

#### • Value Objects

Conceptos sin identidad, definidos por su valor.

- inmutables
- validan sus invariantes

Ejemplos: Money, DistanceKm, Hour.

---

#### • Políticas

Reglas de decisión del negocio.

- expresan criterios
- devuelven decisiones claras

Ejemplos: IsBusinessOpenPolicy, CanDeliverPolicy.

---

#### • Especificaciones

Reglas composables para validar condiciones complejas.

- se combinan (AND / OR / NOT)
- evitan condicionales extensos

Ejemplos: DistanceAllowedSpecification, WorkingDaySpecification.

---

### 3.8 Services

Los Services coordinan las reglas del Domain.

- orquestan políticas y especificaciones
- no contienen reglas propias
- no conocen infraestructura

---

### 3.9 Modelo de Errores de Negocio

Los errores son **decisiones del negocio**, no fallos técnicos.

- explícitos
- tipados
- comunicados mediante Signals

---

### 3.10 Múltiples Business Cores

Un sistema puede contener múltiples Business Cores.

- cada Core es autónomo
- no se comunican entre sí
- la composición ocurre externamente

Ejemplos: Business Core, Pricing Core, Billing Core.

---

### 3.11 Orchestrator

El **Orchestrator** es el componente que compone uno o más Business Cores
para ejecutar un flujo de aplicación.

- conoce únicamente Ports
- no contiene reglas de negocio
- no depende de frameworks

El Orchestrator permite que una aplicación migre de tecnología
sin afectar al negocio.

---

## 4. Estructura Canónica de un Business Core

```txt
/core
 ├── port        # Port público del Core
 ├── input       # Inputs (intenciones de negocio)
 ├── signal      # Signals (resultados de negocio)
 ├── service     # Orquestación interna
 ├── domain      # Modelo y reglas del negocio
 └── ports       # Ports requeridos (dependencias)
```

## 5. Aplicaciones y Frameworks

Las aplicaciones (HTTP, CLI, Jobs, UI):

traducen entrada y salida técnica

llaman al Orchestrator

no contienen lógica de negocio

Cambiar una aplicación no impacta los Business Cores ni el Orchestrator.

## 6. Regla de Oro
> **El negocio debe sobrevivir al cambio tecnológico. Todo lo demás es descartable.**

BCA no es un framework, es una forma de pensar y construir software donde el negocio es el núcleo absoluto del sistema.


Business Core Architecture (BCA) no es un framework.
Es una forma de pensar y construir software donde el negocio es el núcleo absoluto del sistema.


**Autor:** Leandro Verón
