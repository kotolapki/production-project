import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'app/providers/StoreProvider';

export const LoginForm = () => {
  const { t } = useTranslation('auth');

  const dispatch = useAppDispatch();

  const { username, password, error, isLoading } = useSelector(getLoginState);

  const isSubmitDisabled = isLoading || !username || !password;

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value));
  };

  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const onLoginClick = () => {
    dispatch(loginByUsername({ username, password }));
  };

  return (
    <div className={cls.root}>
      {error && <p>{error}</p>}
      <Input
        onChange={onChangeUsername}
        placeholder={t('username')}
        value={username}
      />
      <Input
        onChange={onChangePassword}
        placeholder={t('password')}
        value={password}
      />
      <Button onClick={onLoginClick} disabled={isSubmitDisabled}>
        {t('enter')}
      </Button>
    </div>
  );
};
