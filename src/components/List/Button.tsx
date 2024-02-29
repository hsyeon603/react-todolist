import * as React from 'react';

interface ButtonProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
}

function Button({ title, onClick, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
}

export default Button;
