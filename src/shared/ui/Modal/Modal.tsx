import { ReactNode, useEffect, useState } from 'react';
import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isLazy?: boolean;
}

export const Modal = ({
  children,
  isOpen,
  onClose,
  isLazy = false,
}: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme } = useTheme();

  const mods = {
    [cls.opened]: isOpen,
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  if (isLazy && !isMounted) {
    return null;
  }

  return (
    <Portal container={document.body}>
      <div className={classNames(cls.root, mods, [theme ?? ''])}>
        <div className={cls.overlay} onClick={onClose}>
          <div className={cls.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
