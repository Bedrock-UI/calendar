import dayjs from 'dayjs';
import dayjsObjectSupport from 'dayjs/plugin/objectSupport';
import { chunk } from 'utils/chunk';

import type { CurrentCalendarDate } from 'types/dates';

dayjs.extend(dayjsObjectSupport);

function calendar({ month, year }: CurrentCalendarDate) {
  const today = dayjs();
  const currentMonth = dayjs({ day: 1, month, year }).startOf('month');

  // the the number of the first day of the month
  const startDay = currentMonth.day();

  const days = Array.from(Array(currentMonth.daysInMonth() + startDay)).map((_, index) =>
    index >= startDay ? index - startDay + 1 : -1
  );

  return {
    currentMonth,
    today,
    weeks: chunk(days, 7),
  };
}

export default calendar;
