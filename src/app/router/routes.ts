import {
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
} from '@/shared/utils/consts'


import { NotFound } from '@/pages/NotFound';
import { Home } from '@/pages/Home';

export const routes = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: NOT_FOUND_ROUTE,
    Component: NotFound
  }
];

