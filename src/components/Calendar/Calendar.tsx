import React from 'react';
import { DAYS_OF_WEEK } from 'constants/constants';
import { useCalendar } from 'hooks/useCalendar';

import type { Props } from './Calendar.types';

function Calendar({ renderDay, renderHeader, ...props }: Props) {
  const { weeks } = useCalendar();

  return (
    <table {...props}>
      <thead>
        <tr>
          {DAYS_OF_WEEK.map((day) => (
            <th key={day}>{renderHeader({ day })}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {weeks.map((days, weekIndex) => (
          <tr key={weekIndex}>
            {days.map((day, dayIndex) => (
              <td key={`${weekIndex}${dayIndex}`}>{renderDay({ day, valid: day !== -1 })}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Calendar;
