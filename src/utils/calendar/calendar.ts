import dayjs from 'dayjs';
import dayjsObjectSupport from 'dayjs/plugin/objectSupport';
import { chunk } from 'utils/chunk';

import type { CurrentCalendarDate } from 'types/dates';

dayjs.extend(dayjsObjectSupport);

function calendar({ month, year }: CurrentCalendarDate) {
  const today = dayjs();
  const visibleMonth = dayjs({ day: 1, month, year }).startOf('month');

  // the the number of the first day of the month
  const startDay = visibleMonth.day();

  const days = Array.from(Array(visibleMonth.daysInMonth() + startDay)).map((_, index) =>
    index >= startDay ? index - startDay + 1 : -1
  );

  return {
    today,
    weeks: chunk(days, 7),
  };
}

export default calendar;
