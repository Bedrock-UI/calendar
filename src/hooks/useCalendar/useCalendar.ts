import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { calendar } from 'utils/calendar';

interface CurrentDate {
  day: number;
  month: number;
  year: number;
}

function useCalendar() {
  const { weeks } = useMemo(() => calendar(), []);

  return {
    weeks,
  };
}

export default useCalendar;
