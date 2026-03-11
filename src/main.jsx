import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'; //! Emotion Theme
import { theme } from '@/constants'; //! Emotion Theme

import './index.css';

// import { App } from '@/components/App/App.jsx';
// import { AppCounter } from '@/components/App/AppCounter.jsx';
// import { AppFiltration1 } from '@/components/App/AppFiltration1.jsx';
// import { AppFiltration2 } from '@/components/App/AppFiltration2.jsx';
// import { AppFiltration3 } from '@/components/App/AppFiltration3.jsx';
// import { AppFiltration4 } from '@/components/App/AppFiltration4.jsx';
//! Aбсолютний шлях + Реекспорт
import {
  App,
  AppCounter,
  AppFiltration1,
  AppFiltration2,
  AppFiltration3,
  AppFiltration4,
} from '@/components/App';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/airplane-model-store3-state1">
      <ThemeProvider theme={theme}>
        {/* <App /> */}
        {/* <AppCounter />  */}
        {/* <AppFiltration1 /> */}
        {/* <AppFiltration2 /> */}
        {/* <AppFiltration3 /> */}
        <AppFiltration4 />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode >
);

