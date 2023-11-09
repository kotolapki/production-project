import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useEffect } from 'react';
import { userActions } from 'entities/User';
import { useAppDispatch } from './providers/StoreProvider';

const App = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [
        theme ?? '',
      ])}
    >
      <>
        <Navbar />
        <div className='page-content'>
          <Sidebar />
          <AppRouter />
        </div>
      </>
    </div>
  );
};

export default App;
