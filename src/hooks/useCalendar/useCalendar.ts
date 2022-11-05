import dayjs from 'dayjs';
import { useCallback, useMemo, useState } from 'react';
import { calendar } from 'utils/calendar';

import type { Dayjs } from 'dayjs';
import type { CurrentCalendarDate } from 'types/dates';

interface Calendar {
  /**
   * next month
   */
  next: () => void;
  /**
   * previous month
   */
  previous: () => void;
  /**
   * Set the current month and year
   */
  setCurrentDate: (currentDate: CurrentCalendarDate) => void;
  /**
   * The DayJS value for the currently visible month
   */
  currentMonth: Dayjs;
  /**
   * current month number
   */
  month: CurrentCalendarDate['month'];
  /**
   * The DayJS value for today
   */
  today: Dayjs;
  /**
   * Array of weeks containing an array of days padded by -1 for invalid days
   */
  weeks: number[][];
  /**
   * current year number
   */
  year: CurrentCalendarDate['year'];
}

interface UseCalendarOptions {
  month?: CurrentCalendarDate['month'];
  year?: CurrentCalendarDate['year'];
}

function useCalendar({
  month: monthOption = dayjs().month(),
  year: yearOption = dayjs().year(),
}: UseCalendarOptions = {}): Calendar {
  const [{ month, year }, setCurrentDate] = useState<CurrentCalendarDate>({
    month: monthOption,
    year: yearOption,
  });

  const { currentMonth, today, weeks } = useMemo(() => calendar({ month, year }), [month, year]);

  const handleSetCurrentDate = useCallback(
    (newCurrentDate: Partial<CurrentCalendarDate>) => {
      setCurrentDate({ month, year, ...newCurrentDate });
    },
    [month, setCurrentDate, year]
  );

  const handleNext = useCallback(() => {
    setCurrentDate({
      month: month === 11 ? 0 : month + 1,
      year: month === 11 ? year + 1 : year,
    });
  }, [month, setCurrentDate, year]);

  const handlePrevious = useCallback(() => {
    setCurrentDate({
      month: month === 0 ? 11 : month - 1,
      year: month === 0 ? year - 1 : year,
    });
  }, [month, setCurrentDate, year]);

  return {
    next: handleNext,
    previous: handlePrevious,
    setCurrentDate: handleSetCurrentDate,

    currentMonth,
    month,
    today,
    weeks,
    year,
  };
}

export default useCalendar;
