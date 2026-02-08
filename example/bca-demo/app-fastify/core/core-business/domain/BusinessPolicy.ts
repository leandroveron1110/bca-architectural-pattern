export function canOperate(hour: number, isHoliday: boolean): boolean {
  if (isHoliday) return false;
  return hour >= 9 && hour <= 18;
}
