import { useCallback, useMemo, useState } from 'react';
import { calendar } from 'utils/calendar';

import type { Dayjs } from 'dayjs';
import type { CurrentCalendarDate } from 'types/dates';

interface Calendar {
  /**
   * Represents the month and year that are currently represented in the calendar
   */
  calendarDate: CurrentCalendarDate;
  /**
   * Update the month and year that the calendar should render
   */
  setCalendarDate: (calendarDate: CurrentCalendarDate) => void;
  /**
   * The DayJS value for today
   */
  today: Dayjs;
  /**
   * Array of weeks containing an array of days padded by -1 for invalid days
   */
  weeks: number[][];
}

interface UseCalendarOptions {
  month: CurrentCalendarDate['month'];
  year: CurrentCalendarDate['year'];
}

function useCalendar({ month, year }: UseCalendarOptions) {
  const { today, weeks } = useMemo(() => calendar({ month, year }), [month, year]);

  return {
    today,
    weeks,
  };
}

export default useCalendar;
