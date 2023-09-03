import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { ReactNode } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...rest
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={classNames(cls.root, {}, [className, cls[theme]])}
      {...rest}
    >
      {children}
    </Link>
  );
};
