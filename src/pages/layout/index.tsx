import { PropsWithChildren } from 'react';
import Header from './header';

interface Props {}

export default function Layout(props: PropsWithChildren<Props>) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
}
