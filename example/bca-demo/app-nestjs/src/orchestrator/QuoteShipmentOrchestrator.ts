/**
 * Business Core Architecture (BCA)
 *
 * Copyright 2026 Leandro Verón
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BusinessPort } from "../core/core-business/port/BusinessPort";
import { PricingPort } from "../core/core-pricing/port/PricingPort";


export function quoteShipmentOrchestrator(request: {
  currentHour: number;
  isHoliday: boolean;
  distanceKm: number;
}) {
  const business = BusinessPort.run({
    currentHour: request.currentHour,
    isHoliday: request.isHoliday,
  });

  if (business.type === 'BUSINESS_REJECTED') {
    return business;
  }
  return PricingPort.run({
    distanceKm: request.distanceKm,
    minimumPrice: 1500,
    ranges: [
      { fromKm: 2, toKm: 4, pricePerKm: 800 },
      { fromKm: 4, toKm: 10, pricePerKm: 500 },
      { fromKm: 10, toKm: 20, pricePerKm: 450 },
      { fromKm: 20, toKm: 30, pricePerKm: 400 },
    ],
  });
}
