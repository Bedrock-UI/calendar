import React from 'react';
import BedrockCalendar from './Calendar';

import type { Props } from './Calendar.types';

export default {
  title: 'Calendar',
  component: BedrockCalendar,
  argTypes: {},
  args: {},
};

export const Calendar = (props: Props) => <BedrockCalendar {...props} />;
