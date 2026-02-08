import { quoteShipmentOrchestrator } from "./orchestrator/QuoteShipmentOrchestrator";

/**
 * En BCA, un Orchestrator o un script simple simplemente
 * coordina el flujo de datos entre los Cores.
 */
async function runDemo() {
  console.log("--- 🚀 BCA Node.js Pure Runner ---");

  const result = quoteShipmentOrchestrator({
    currentHour: 14,
    isHoliday: false,
    distanceKm: 5,
  });

  console.log("Quote Result:", result);
}

runDemo();
