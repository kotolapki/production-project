import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className = "" }: SidebarProps) => {
  const [hasCollapsed, setHasCollapsed] = useState(false);

  const onToggle = () => {
    setHasCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.root, { [cls.collapsed]: hasCollapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
