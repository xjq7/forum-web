import { Button } from 'antd';
import S from './index.module.less';

const menus = new Array(6).fill(0);

export default function Header() {
  return (
    <div className={S.container}>
      <div className={S.content}>
        <div className={S.menus}>
          {menus.map((menu) => {
            return (
              <div className={S.menu}>
                <Button type="text">菜单{menu}</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
