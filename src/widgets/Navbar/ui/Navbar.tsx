import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { t } = useTranslation('common');

  const onAuthModalClose = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.INVERTED} to='/'>
          {t('links.main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to='/about'>
          {t('links.about')}
        </AppLink>
        <Button onClick={() => setIsAuthModalOpen(true)}>
          {t('links.login')}
        </Button>
      </div>
      <LoginModal isOpen={isAuthModalOpen} onClose={onAuthModalClose} />
    </div>
  );
};
