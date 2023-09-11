import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { AppError } from 'widgets/AppError';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <ErrorBoundary fallback={<AppError />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>,
  );
}
