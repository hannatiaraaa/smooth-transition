import React from 'react';
import type { TColor } from '@/types/theme.type';

type Props = {
  color?: TColor;
};

const ChevronRight = ({ color }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='8'
      height='15'
      viewBox='0 0 8 15'
      fill='none'
    >
      <path
        d='M1 14L7 7.5L1 1'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ChevronRight;
