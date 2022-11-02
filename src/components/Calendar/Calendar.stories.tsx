import dayjs from 'dayjs';
import React, { useState } from 'react';
import BedrockCalendar from './Calendar';

import type { Props } from './Calendar.types';

interface CurrentDate {
  month: number;
  year: number;
}

export default {
  title: 'Calendar',
  component: BedrockCalendar,
  argTypes: {},
  args: {},
};

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const Calendar = (props: Props) => {
  const [{ month, year }, setCurrentDate] = useState<CurrentDate>({
    month: dayjs().month(),
    year: dayjs().year(),
  });

  return (
    <>
      <button
        onClick={() => {
          setCurrentDate({
            month: month === 0 ? 11 : month - 1,
            year: month === 0 ? year - 1 : year,
          });
        }}
      >
        Previous
      </button>

      <button
        onClick={() => {
          setCurrentDate({
            month: month === 11 ? 0 : month + 1,
            year: month === 11 ? year + 1 : year,
          });
        }}
      >
        Next
      </button>

      <BedrockCalendar
        {...props}
        className="calendar"
        month={month}
        year={year}
        renderDay={({ day, valid }) => {
          if (!valid) {
            return null;
          }

          return <h2>{day}</h2>;
        }}
        renderHeader={({ day }) => <h2>{DAYS_OF_WEEK[day]}</h2>}
      />
    </>
  );
};
