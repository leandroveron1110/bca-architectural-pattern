# 🏛️ BCA vs Arquitecturas Clásicas

**Hexagonal · Clean Architecture · Domain-Driven Design (DDD)**

Este documento tiene un **objetivo educativo**, no polémico.

Su propósito es explicar:

* Qué problema intenta resolver cada enfoque arquitectónico
* Qué supuestos hace cada uno
* Qué introduce **Business Core Architecture (BCA)** como propuesta diferencial

> **Premisa fundamental**: no existe la “arquitectura perfecta”. Existen arquitecturas diseñadas para **problemas distintos**, con **prioridades distintas**.

---

## 1️⃣ Punto de Partida Común

Las arquitecturas modernas como **Hexagonal**, **Clean Architecture**, **DDD** y **BCA** comparten una intención clara:

* Separar la lógica de negocio de la tecnología
* Proteger el dominio frente a frameworks
* Reducir el acoplamiento
* Diseñar sistemas con foco en el largo plazo

Sin embargo, **difieren profundamente** en:

* Qué consideran “el núcleo” del sistema
* Cómo definen los límites
* Qué tan estrictamente se imponen esas reglas

---

## 2️⃣ Arquitectura Hexagonal (Ports & Adapters)

### 🎯 Enfoque

Aislar el dominio del mundo exterior mediante **puertos** (interfaces) y **adaptadores**.

### ✅ Fortalezas

* Muy efectiva para desacoplar infraestructura
* Facilita testing y reemplazo tecnológico
* Clara separación inside / outside

### ⚠️ Límites

* Asume generalmente **un único dominio central**
* No define reglas estrictas para múltiples núcleos independientes
* Los módulos internos pueden terminar acoplados entre sí

### 📌 Conclusión

Protege el dominio, pero **no define soberanía del dominio**.

---

## 3️⃣ Clean Architecture

### 🎯 Enfoque

Capas concéntricas con dependencias siempre dirigidas hacia el centro (casos de uso y entidades).

### ✅ Fortalezas

* Muy clara a nivel estructural
* Casos de uso explícitos
* Independencia de frameworks

### ⚠️ Límites

* El “core” tiende a crecer indefinidamente
* Subdominios distintos suelen compartir entidades
* No impone límites fuertes entre reglas de negocio independientes

### 📌 Conclusión

Separa capas, pero **no impone fronteras estrictas entre núcleos de negocio**.

---

## 4️⃣ Domain-Driven Design (DDD)

### 🎯 Enfoque

Modelar el negocio con **lenguaje ubicuo**, **Bounded Contexts** y diseño estratégico.

### ✅ Fortalezas

* Excelente para entender negocios complejos
* Define límites conceptuales claros
* Potencia la comunicación negocio–técnica

### ⚠️ Límites

* No define una arquitectura ejecutable concreta
* Puede convivir con múltiples estilos arquitectónicos
* Muchas implementaciones terminan mezclando infraestructura

### 📌 Conclusión

DDD define **qué modelar**, pero no impone **cómo aislarlo arquitectónicamente**.

---

## 5️⃣ La Diferencia Clave de BCA: Soberanía del Negocio

**Business Core Architecture (BCA)** introduce un concepto distinto:

> El negocio no solo debe estar encapsulado, debe ser **soberano**.

Un **Business Core** en BCA:

* No es una capa
* No es un módulo interno
* No es una librería compartida

Es un **activo autónomo**, con límites forzados.

---

## 6️⃣ Comparación Conceptual

| Arquitectura | Protege el Dominio | Múltiples Núcleos | Aislamiento Forzado |
| ------------ | ------------------ | ----------------- | ------------------- |
| Hexagonal    | ✅ Sí               | ❌ No              | ❌ Parcial           |
| Clean        | ✅ Sí               | ❌ No              | ❌ Parcial           |
| DDD          | ✅ Sí               | ⚠️ Conceptual     | ❌ Variable          |
| **BCA**      | ✅ Sí               | ✅ Sí              | ✅ Forzado           |

---

## 7️⃣ El Orchestrator: Composición sin Acoplamiento

En BCA, los Business Cores **no se conocen entre sí**.

La coordinación ocurre exclusivamente a través de un **Orchestrator**:

```text
[ Framework / App ]
          ↓
   [ Orchestrator ]
      ↓        ↓
[ Core A ]  [ Core B ]

(Core A y Core B no se conocen)
```

El Orchestrator:

* No contiene reglas de negocio
* No depende de frameworks
* Solo compone flujos entre Cores

---

## 8️⃣ Portabilidad como Prueba, no como Promesa

BCA define un criterio de validación explícito:

> **Si un Business Core no puede copiarse y pegarse en otro framework sin cambios, no es soberano.**

Esto **prohíbe explícitamente**:

* Anotaciones de frameworks (DI, ORM, HTTP)
* Tipos dependientes del runtime
* Conocimiento del sistema de build
* Dependencias técnicas externas

La portabilidad no es un beneficio secundario.

Es una **regla arquitectónica**.

---

## 💡 Idea Final

* Hexagonal y Clean enseñan a **proteger** el dominio
* DDD enseña a **entender** el negocio
* **BCA enseña a preservar el negocio en el tiempo**

> Cuando la tecnología muere, el negocio en BCA sobrevive intacto.

Ese es el objetivo último de **Business Core Architecture**.
