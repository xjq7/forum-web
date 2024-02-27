import { PropsWithChildren } from 'react';
import Header from './header';
import S from './index.module.less';

interface Props {}

export default function Layout(props: PropsWithChildren<Props>) {
  const { children } = props;
  return (
    <div className={S.container}>
      <Header />
      <div className={S.content}>{children}</div>
    </div>
  );
}
