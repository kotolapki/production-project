import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'app/providers/StoreProvider';

export const Counter = () => {
  const { t } = useTranslation('counter');

  const value = useSelector(getCounterValue);
  const dispatch = useAppDispatch();

  const increase = () => {
    dispatch(counterActions.incremented());
  };

  const decrease = () => {
    dispatch(counterActions.decremented());
  };

  return (
    <div data-testid='counter'>
      <h1 data-testid='counter-value'>{value}</h1>
      <Button onClick={increase} data-testid='counter-increment-button'>
        {t('increase')}
      </Button>
      <Button onClick={decrease} data-testid='counter-decrement-button'>
        {t('decrease')}
      </Button>
    </div>
  );
};
