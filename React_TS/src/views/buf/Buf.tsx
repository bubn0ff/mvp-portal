import { Props } from './types';

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Buf: FC<Props> = () => {
  const isLogin = useSelector((state: RootState) => state.userReducer.isLogin);
  return (
    <div className="main-page-content">
      {/* Здесь тавтология, потом переделаю */}
      {!isLogin ? (
        <div></div>
      ) : (
        <div className="main-page-content">
          <div className="main-page-window">Контент</div>
          <div className="main-page-window">Календарь</div>
        </div>
      )}
    </div>
  );
};

export default Buf;
