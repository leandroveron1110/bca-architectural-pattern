# Principios de Business Core Architecture (BCA)

Este documento define los principios fundamentales y no negociables de Business Core Architecture (BCA). Su objetivo no es describir una implementación particular, sino establecer las reglas que determinan cuándo un sistema puede considerarse BCA y cuándo no.

> **BCA no es un estilo flexible ni una guía opcional.** Es una arquitectura con límites explícitos, verificables y forzados.

---

### 🧭 Principio 1 – El Negocio es un Activo Soberano
La lógica de negocio es el activo más valioso de un sistema. En BCA:
* El negocio no pertenece a una aplicación.
* El negocio no pertenece a un framework.
* El negocio no pertenece a la infraestructura.
* El negocio existe por sí mismo y debe poder sobrevivir al cambio tecnológico.

📌 **Regla:** Si una decisión técnica obliga a modificar el negocio, la arquitectura ha fallado.

---

### 🧠 Principio 2 – El Business Core es una Unidad Autónoma
Un Business Core es una unidad de negocio completa y autocontenida. Cada Business Core:
* Tiene su propio dominio.
* Define sus propias reglas.
* Expone sus propios Inputs y Signals.
* Evoluciona sin coordinación con otros Cores.

📌 **Regla:** Un Core no necesita conocer la existencia de ningún otro Core.

---

### 🚫 Principio 3 – Prohibición de Dependencias entre Cores
En BCA, los Business Cores nunca se comunican entre sí. Esto implica:
* No imports entre Cores.
* No modelos compartidos.
* No eventos directos.
* No referencias cruzadas.

📌 **Regla:** Si dos Cores se conocen, no son soberanos.

---

### 🧩 Principio 4 – Orquestación Externa Obligatoria
Toda coordinación entre Business Cores ocurre fuera de ellos. El **Orchestrator** es el único componente autorizado a:
* Invocar múltiples Cores.
* Componer flujos de aplicación.
* Traducir resultados entre dominios.

El Orchestrator:
* No contiene reglas de negocio.
* No define políticas.
* No toma decisiones de dominio.

📌 **Regla:** El Orchestrator coordina, pero no decide.

---

### 🧱 Principio 5 – Independencia Tecnológica Absoluta
Un Business Core es agnóstico a la tecnología. Por definición, un Core:
* No importa frameworks.
* No usa anotaciones técnicas.
* No conoce HTTP, DB, queues, ni runtimes.
* No depende de configuraciones de build.

📌 **Regla:** Si el Core conoce la tecnología, deja de ser Core.

---

### 🔁 Principio 6 – Portabilidad como Criterio de Validez
En BCA, la portabilidad no es un beneficio, es una prueba. Un Business Core válido:
* Puede copiarse y pegarse.
* Puede ejecutarse en otro framework.
* No requiere cambios.

📌 **Regla:** Si no puede copiarse sin modificarse, no es soberano.

---

### 🧪 Principio 7 – Reglas Verificables
BCA no se basa en intención, sino en verificación. Preguntas obligatorias:
1. ¿Este Core importa algo técnico?
2. ¿Este Core conoce a otro Core?
3. ¿Este flujo vive fuera del Core?

Si alguna respuesta es **SÍ**, BCA se ha violado.

---

### 🧬 Principio 8 – Evolución Independiente
Cada Business Core debe poder cambiar reglas internas, ser reemplazado completamente o ser eliminado sin romper otros Cores ni el sistema completo.

📌 **Regla:** Si cambiar un Core obliga a modificar otro, los límites son incorrectos.

---

### 🏛️ Principio 9 – Arquitectura antes que Frameworks
* La arquitectura se define antes del framework.
* El framework se adapta al Core.
* El Core nunca se adapta al framework.

📌 **Regla:** El framework es una herramienta, no una decisión arquitectónica.

---

### 🧠 Principio 10 – Claridad por sobre Conveniencia
BCA prioriza los límites explícitos, la separación radical y la **duplicación consciente** por sobre el DRY mal aplicado, la reutilización técnica o la comodidad de las herramientas (*tooling*).

📌 **Regla:** La claridad arquitectónica es más importante que la optimización técnica.

---

## 🚫 Cuándo NO es BCA
Un sistema **NO** es BCA si:
* Tiene un único Core inflado.
* Comparte entidades entre dominios.
* Usa el framework dentro del negocio.
* Orquesta desde el dominio.
* Prioriza el *tooling* sobre la soberanía.

---

### 🧭 Cierre
Business Core Architecture no busca ser popular. Busca ser correcta en el tiempo. Las tecnologías cambian, los frameworks mueren; el negocio debe sobrevivir.

**Esa es la razón de ser de BCA.**