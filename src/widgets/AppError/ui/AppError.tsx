import { useTranslation } from 'react-i18next';
import cls from './AppError.module.scss';
import { Suspense } from 'react';

export const AppError = () => {
  const { t } = useTranslation('common');

  return (
    <Suspense>
      <section className={cls.root}>
        <h1 className={cls.heading}>{t('appError')}</h1>
      </section>
    </Suspense>
  );
};
