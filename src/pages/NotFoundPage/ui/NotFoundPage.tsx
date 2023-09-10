import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation('common');

  return (
    <section className={cls.root}>
      <h1 className={cls.heading}>{t('pageNotFound')}</h1>
    </section>
  );
};
