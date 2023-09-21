import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonThemeEnum {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeEnum;
  children: ReactNode;
}

export const Button = ({
  className = '',
  children,
  theme,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(cls.root, {}, [className, theme ? cls[theme] : ''])}
      {...rest}
    >
      {children}
    </button>
  );
};
