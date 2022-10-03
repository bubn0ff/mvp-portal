import { Props } from './types';

import { FC } from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../../redux/UserSlice';

const ProfileCard: FC<Props> = () => {
  const { setLogout } = userSlice.actions;
  const dispatch = useDispatch();
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Profile" bordered={false} style={{ width: 300 }}>
        <p>Profile content</p>
        <p>Profile content</p>
        <p>Profile content</p>
        <Button type="primary">
          <Link className="logo" to="/profile">
            Profile
          </Link>
        </Button>
        <Button
          href="/auth"
          onClick={() => dispatch(setLogout())}
          style={{ marginLeft: '20px' }}
          type="primary"
        >
          Log out
        </Button>
      </Card>
    </div>
  );
};

export default ProfileCard;
