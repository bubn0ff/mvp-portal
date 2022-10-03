import { Props } from './types';

import ProfileCard from './profileCard/ProfileCard';

import Profile from '../profile/Profile';
import Buf from '../buf/Buf';
import Participants from '../participants/Participants';
import Calendar from '../calendar/Calendar';
import Kanban from '../kanban/Kanban';

import { FC } from 'react';

import { Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Dropdown, Button } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import { Route, Routes } from 'react-router-dom';
import { Footer } from 'antd/lib/layout/layout';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import OverviewFlow from '../roadmap/OverviewFlow';

const MainPage: FC<Props> = () => {
  const { Header, Content } = Layout;
  const role = useSelector((state: RootState) => state.userReducer.role);
  const isLogin = useSelector((state: RootState) => state.userReducer.isLogin);

  const menuItems: { label: string; path: string; id: number }[] = [
    { label: 'Главная', path: '/', id: 10 },
    { label: 'Участники', path: '/participants', id: 20 },
    { label: 'Канбан-доски', path: '/kanban', id: 30 },
    { label: 'Ученики', path: '/students', id: 40 },
    { label: 'Roadmap', path: '/roadmap', id: 50 },
  ];

  const studendsIds = [10, 20, 30];
  const mentorIds = [10, 20, 30, 40, 50];

  function getItems() {
    if (role === 'USER') {
      return menuItems
        .filter((item) => studendsIds.includes(item.id))
        .map((item) => {
          return {
            key: item.id,
            label: <Link to={item.path}>{item.label}</Link>,
          };
        });
    }
    if (role === 'MENTOR' || role === 'ADMIN' || role === 'SUPERVISOR') {
      return menuItems
        .filter((item) => mentorIds.includes(item.id))
        .map((item) => {
          return {
            key: item.id,
            label: <Link to={item.path}>{item.label}</Link>,
          };
        });
    }
  }

  function checkUrl() {
    if (window.location.pathname === '/') return ['10'];
    if (window.location.pathname === '/participants') return ['20'];
    if (window.location.pathname === '/students') return ['10'];
    if (window.location.pathname === '/kanban') return ['30'];
    if (window.location.pathname === '/roadmap') return ['50'];
  }

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        {isLogin ? (
          <div className="header-content">
            <Link className="logo" to="/" />

            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={checkUrl()}
              items={getItems()}
            />
            <div className="profile">
              <Dropdown overlay={<ProfileCard />} placement="bottomRight" arrow>
                <Avatar
                  style={{ backgroundColor: '#87d068' }}
                  icon={<UserOutlined />}
                />
              </Dropdown>
            </div>
          </div>
        ) : (
          <div className="header-content">
            <Link className="logo" to="/" />
            <div className="header-sign-in">
              <Button style={{ fontSize: '16px', border: 'none' }} ghost>
                <Link to="/auth">Sign in</Link>
              </Button>
            </div>
          </div>
        )}
      </Header>
      <Content>
        <div className="site-layout-content">
          <Routes>
            <Route path="/" element={<Buf />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/roadmap" element={<OverviewFlow />} />
          </Routes>
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default MainPage;
