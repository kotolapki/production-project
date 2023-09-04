import { lazy } from 'react';

export const AsyncMainPage = lazy(async () => await import('./MainPage'));
