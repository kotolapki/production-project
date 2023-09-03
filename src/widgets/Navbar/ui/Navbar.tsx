import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = "" }: NavbarProps) => {
  const { t } = useTranslation("common");

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.INVERTED} to="/">
          {t("links.main")}
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to="/about">
          {t("links.about")}
        </AppLink>
      </div>
    </div>
  );
};
