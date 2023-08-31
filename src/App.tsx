import './App.css';

import viteLogo from '/vite.svg';
import { lazy, Suspense } from 'react';

import reactLogo from './assets/react.svg';
import { Loading } from './components/Loading';
import { sleep } from './util';

const LazyOnRender = lazy(() => sleep(1000).then(() => import('./components/FetchOnRender')));
const LazyAsRender = lazy(() => sleep(1000).then(() => import('./components/FetchAsRender')));
const LazyThenRender = lazy(() => sleep(1000).then(() => import('./components/FetchThenRender')));

function App() {
  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>OnRender</h1>
      <Suspense fallback={<Loading />}>
        <LazyOnRender />
      </Suspense>
      <br />
      <h1>ThenRender</h1>
      <Suspense fallback={<Loading />}>
        <LazyThenRender />
      </Suspense>

      <br />
      <h1>AsRender</h1>
      <Suspense fallback={<Loading />}>
        <LazyAsRender />
      </Suspense>
    </>
  );
}

export default App;
