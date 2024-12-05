import React, { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  cols?: number;
  gap?: string;
  className?: string;
}

const Grid = ({ children, cols, gap = '4', className = '' }: Props) => {
  return (
    <div className={`grid grid-cols-${cols} gap-${gap} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
