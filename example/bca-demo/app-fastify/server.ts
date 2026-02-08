import Fastify from "fastify";
import { quoteShipmentOrchestrator } from "./orchestrator/QuoteShipmentOrchestrator";

const fastify = Fastify({
  logger: true,
});

// Cambiamos (_, _) por (request, reply)
fastify.get("/check-business", async (request, reply) => {
  try {
    const result = quoteShipmentOrchestrator({
      currentHour: 14,
      isHoliday: false,
      distanceKm: 5,
    });

    console.log("Quote Result:", result);

    // En Fastify, si haces return de un objeto, lo envía como JSON automáticamente
    return {
      status: "success",
      data: result,
    };
  } catch (error) {
    // Ahora 'reply' sí existe porque lo pusimos arriba en los parámetros
    console.error("Error en el orquestador:", error);
    return reply.code(500).send({ error: "Internal Server Error" });
  }
});

const start = async () => {
  try {
    // Escuchamos en el puerto 3001
    await fastify.listen({ port: 3001, host: "0.0.0.0" });
    console.log("🚀 Fastify corriendo en http://localhost:3001");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();