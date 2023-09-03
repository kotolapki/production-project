import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { ThemeEnum } from "app/providers/ThemeProvider";
import { Button, ButtonThemeEnum } from "../Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(cls.root, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonThemeEnum.CLEAR}
    >
      {theme === ThemeEnum.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
