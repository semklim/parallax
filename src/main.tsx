/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '@/app/style/index.scss';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/app/App';

const rootElement = ReactDOM.createRoot(document.getElementById('root')!);

rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
