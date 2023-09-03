import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonThemeEnum } from "../Button/Button";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className = "" }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation("common");

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(cls.root, {}, [className])}
      theme={ButtonThemeEnum.CLEAR}
      onClick={toggleLanguage}
    >
      {t("lang")}
    </Button>
  );
};
