import type { DetailedHTMLProps, ReactNode, TableHTMLAttributes } from 'react';

type TableProps = DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;

interface Day {
  day: number;
  /**
   * returns true if the day is valid (ie. not a placeholder array element)
   */
  valid: boolean;
}

interface Header {
  day: number;
}

export interface Props extends TableProps {
  /**
   * month to render
   */
  month: number;
  /**
   * year to render
   */
  year: number;
  /**
   * Nested array of weeks and days to render
   */
  weeks: number[][];
  renderDay: (day: Day) => ReactNode;
  renderHeader: (header: Header) => ReactNode;
}
