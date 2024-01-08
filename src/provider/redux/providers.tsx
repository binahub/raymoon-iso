'use client';

import { Provider } from 'react-redux';
import { store } from './store';

interface IProps {
  children: React.ReactNode;
}

const ReduxWrapper = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxWrapper;
