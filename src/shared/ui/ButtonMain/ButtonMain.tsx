import './ButtonMain.scss';

import type { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  noBorder?: boolean;
}

export default function Button(props: ButtonProps) {
  const { className = '', children, noBorder = false, ...otherProps } = props;
  const border = noBorder ? 'noBorder' : '';
  return (
    <button
      type="button"
      className={`${className} ${border} buttonMain`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
