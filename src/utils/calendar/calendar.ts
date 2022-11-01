import dayjs from 'dayjs';
import dayjsObjectSupport from 'dayjs/plugin/objectSupport';
import { chunk } from 'utils/chunk';

dayjs.extend(dayjsObjectSupport);

function calendar() {
  const today = dayjs();
  const currentMonth = today.startOf('month');

  // the the number of the first day of the month
  const startDay = currentMonth.day();

  const days = Array.from(Array(currentMonth.daysInMonth() + startDay)).map((_, index) =>
    index >= startDay ? index - startDay + 1 : -1
  );

  return {
    weeks: chunk(days, 7),
  };
}

export default calendar;
