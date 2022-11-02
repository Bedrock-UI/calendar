import dayjs from 'dayjs';
import { useCalendar } from 'hooks/useCalendar';
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
  const { next, previous, month, weeks, year } = useCalendar();

  return (
    <>
      <button onClick={() => previous()}>Previous</button>

      <button onClick={() => next()}>Next</button>

      <BedrockCalendar
        {...props}
        className="calendar"
        month={month}
        weeks={weeks}
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
