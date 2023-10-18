import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';

export const LoginForm = () => {
  const { t } = useTranslation('auth');

  return (
    <div className={cls.root}>
      <Input />
      <Input />
      <Button>{t('enter')}</Button>
    </div>
  );
};
