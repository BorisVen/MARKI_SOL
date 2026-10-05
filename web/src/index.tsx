import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// GitHub Pages serves the production web build under /idenity; the local dev
// server lives at the root.
const routerBasename =
    process.env.NODE_ENV !== 'production'
        ? '/'
        : '/idenity';

const restoreGitHubPagesPath = () => {
    const params = new URLSearchParams(window.location.search);
    const redirectedPath = params.get('p');
    if (!redirectedPath) return;

    params.delete('p');
    const nextSearch = params.toString();
    const nextPath = redirectedPath.startsWith('/') ? redirectedPath : `/${redirectedPath}`;
    const nextUrl = `${nextPath}${nextSearch ? `?${nextSearch}` : ''}${window.location.hash}`;
    window.history.replaceState(null, '', nextUrl);
};

restoreGitHubPagesPath();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter basename={routerBasename}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
