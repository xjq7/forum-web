import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/article';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/article',
    element: <Article />,
  },
]);
