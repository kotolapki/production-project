import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'app/providers/StoreProvider';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);

  const buttonText = authData ? t('links.logout') : t('links.login');

  const onAuthModalClose = () => {
    setIsAuthModalOpen(false);
  };

  const onAuthModalOpen = () => {
    if (authData) {
      dispatch(userActions.logout());
    } else {
      setIsAuthModalOpen(true);
    }
  };

  useEffect(() => {
    if (authData) {
      onAuthModalClose();
    }
  }, [authData]);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.INVERTED} to='/'>
          {t('links.main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to='/about'>
          {t('links.about')}
        </AppLink>
        <Button onClick={onAuthModalOpen}>{buttonText}</Button>
      </div>
      <LoginModal isOpen={isAuthModalOpen} onClose={onAuthModalClose} />
    </div>
  );
};
