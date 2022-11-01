import React from 'react';
import BedrockCalendar from './Calendar';

import type { Props } from './Calendar.types';

export default {
  title: 'Calendar',
  component: BedrockCalendar,
  argTypes: {},
  args: {},
};

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const Calendar = (props: Props) => (
  <BedrockCalendar
    {...props}
    className="calendar"
    renderDay={({ day, valid }) => {
      if (!valid) {
        return null;
      }

      return <h2>{day}</h2>;
    }}
    renderHeader={({ day }) => <h2>{DAYS_OF_WEEK[day]}</h2>}
  />
);
