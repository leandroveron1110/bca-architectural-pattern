# Glosario de Business Core Architecture (BCA)

Este glosario define **los términos oficiales de Business Core Architecture (BCA)**.

Su objetivo es **eliminar ambigüedades**, evitar reinterpretaciones y asegurar que todas las discusiones, implementaciones y enseñanzas de BCA utilicen **un lenguaje común y preciso**.

> En BCA, el lenguaje no es decorativo: **define límites arquitectónicos**.

---

## Business Core

Unidad **autónoma y soberana** de lógica de negocio.

Un Business Core:

* encapsula reglas, decisiones y comportamiento del negocio
* no conoce frameworks, infraestructura ni aplicaciones
* no se importa ni se comparte con otros Cores
* expone su funcionalidad únicamente a través de su **Port público**

Un Business Core **no es**:

* una capa
* un módulo técnico
* un microservicio
* una librería reutilizable

---

## Soberanía del Negocio

Principio fundamental de BCA que establece que la lógica de negocio es un **activo independiente**, no subordinado a decisiones técnicas.

La soberanía implica que:

* el negocio no se adapta al framework
* el negocio no depende del tooling
* el negocio sobrevive a cambios tecnológicos

Si una decisión técnica obliga a modificar el Core, la soberanía ha sido violada.

---

## Port Público (Public Port)

Contrato explícito que define **las capacidades que ofrece un Business Core**.

Características:

* es la única puerta de entrada al Core
* recibe **Inputs**
* emite **Signals**
* oculta completamente la implementación interna

Nada externo puede importar:

* Domain
* Services
* Policies
* Specifications

Solo el Port es visible.

---

## Input

Representa una **intención de negocio**.

Un Input:

* es inmutable
* utiliza lenguaje del dominio
* no representa transporte (HTTP, CLI, RPC)
* no contiene datos técnicos

Ejemplos:

* `CreateShipment`
* `CalculatePrice`
* `OpenBusinessDay`

---

## Signal

Representa un **hecho o resultado de negocio**.

Un Signal:

* expresa una decisión tomada por el Core
* no conoce quién lo consume
* no es una respuesta técnica
* puede representar éxito o error de negocio

Ejemplos:

* `ShipmentCreated`
* `PriceCalculated`
* `BusinessDayRejected`

---

## Ports Requeridos (Required Ports)

Interfaces declaradas por el Business Core cuando necesita interactuar con el mundo exterior.

Características:

* son definidas por el Core
* son implementadas por infraestructura
* no contienen lógica de negocio

Ejemplos:

* Clock
* Repository
* DistanceCalculator
* MessagePublisher

---

## Domain

Conjunto de conceptos, reglas y comportamientos que representan el **corazón del negocio**.

En BCA, el Domain es **composicional**, no monolítico.

Incluye:

* Entidades
* Value Objects
* Políticas
* Especificaciones

El Domain no conoce:

* infraestructura
* persistencia
* frameworks

---

## Domain Composicional

Modelo de dominio construido a partir de **piezas pequeñas, explícitas y combinables**, evitando clases gigantes y lógica implícita.

Busca:

* claridad conceptual
* testabilidad
* reglas explícitas

---

## Policy (Política)

Regla de decisión del negocio.

Una Policy:

* expresa un criterio
* devuelve una decisión clara
* no ejecuta efectos secundarios

Ejemplo:

* `CanDeliverPolicy`

---

## Specification (Especificación)

Regla de validación **componible**.

Las Specifications:

* pueden combinarse (AND / OR / NOT)
* evitan condicionales complejos
* representan condiciones del negocio

Ejemplo:

* `DistanceAllowedSpecification`

---

## Service

Componente que **orquesta reglas del Domain**.

Un Service:

* coordina Policies y Specifications
* no contiene reglas propias
* no conoce infraestructura

---

## Orchestrator

Componente responsable de **componer uno o más Business Cores** para ejecutar un flujo de aplicación.

Características:

* conoce únicamente los Ports públicos
* no contiene reglas de negocio
* no depende de frameworks
* define el flujo, no las decisiones

---

## Infraestructura Reactiva

Conjunto de componentes técnicos que reaccionan a **Signals** y traducen decisiones de negocio en efectos técnicos.

La infraestructura:

* implementa Ports Requeridos
* persiste datos
* envía mensajes
* interactúa con sistemas externos

Nunca toma decisiones de negocio.

---

## Aplicación / Framework

Capa técnica encargada de:

* recibir entradas técnicas (HTTP, CLI, eventos)
* traducirlas a Inputs
* invocar al Orchestrator
* presentar resultados

No contiene lógica de negocio.

---

## Portabilidad Radical

Criterio de validación de BCA.

Un Business Core es portátil si:

* puede copiarse y pegarse en otro framework
* no requiere cambios
* no introduce dependencias técnicas

Si la portabilidad falla, el Core no es soberano.

---

## Regla de Oro de BCA

> El negocio debe sobrevivir al cambio tecnológico.

Todo lo demás es reemplazable.

---

## Nota Final

Este glosario es **normativo**.

Cualquier término usado en BCA debe respetar estas definiciones.

Cambiar el significado de un término es cambiar la arquitectura.

**Business Core Architecture (BCA)**

Autor: Leandro Verón
