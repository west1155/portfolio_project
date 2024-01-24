import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Blog, BlogDesktop} from "./layouts/blog/BlogDesktop";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <BlogDesktop />

);

reportWebVitals();
