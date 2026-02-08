import { CheckBusinessInput } from '../input/CheckBusinessInput';
import { BusinessSignal } from '../signal/BusinessSignal';
import { canOperate } from '../domain/BusinessPolicy';

export function checkBusinessService(
  input: CheckBusinessInput,
): BusinessSignal {
  if (!canOperate(input.currentHour, input.isHoliday)) {
    return {
      type: 'BUSINESS_REJECTED',
      reason: 'Business is closed',
    };
  }

  return { type: 'BUSINESS_ACCEPTED' };
}
