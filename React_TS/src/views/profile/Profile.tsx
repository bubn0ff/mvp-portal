import './profile.css';

import { ProfileEditModal } from './profileModal/ProfileEditModal';

import { EGender, IInitialState, initialState } from './consts/consts';

import { EditTwoTone } from '@ant-design/icons';
import { Avatar, Button, Layout, Space, Typography } from 'antd';

import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useParams } from 'react-router';
import { fetchUserById } from '../participants/usersData/data';

const currentUserId = 9 

/** Основной компонент. */
const Profile = (): JSX.Element => {
  const { Content } = Layout;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profileData, setProfileData] = useState<IInitialState>();

  const {id} = useParams()

  const isCurrentUser = id && id === currentUserId.toString()

  useEffect(() => {
    if(id){
      const userData = fetchUserById(Number(id))
      setProfileData({
        name: userData?.name || '',
        surname: userData?.surname || '',
        sex: userData?.sex || EGender.Male,
        birthday: userData?.birthday,
        avatar: userData?.avatar,
        signUpDate: userData?.signUpDate,
        lastVisitDate: userData?.lastVisitDate,
      })
      return
    }
    setProfileData(initialState);
  }, []);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (data: IInitialState) => {
    setProfileData(data);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
      <Content className="profile__content">
      <div>
        <span className="profile__name-page">Профиль</span>
        {isCurrentUser && <Button type="primary" onClick={showModal} icon={<EditTwoTone />} >Редактировать</Button>} 
      </div>
      <div className="profile__ava">
        <Avatar src={profileData?.avatar} size={150}/>
      </div>
      <Space direction="vertical">
        <Space>
          <Typography.Text type="secondary">Имя</Typography.Text>
          <Typography.Text>{profileData?.name}</Typography.Text>
        </Space>
        <Space>
          <Typography.Text type="secondary">Фамилия</Typography.Text>
          <Typography.Text>{profileData?.surname}</Typography.Text>
        </Space>
        <Space>
          <Typography.Text type="secondary">Пол</Typography.Text>
          <Typography.Text>{profileData?.sex}</Typography.Text>
        </Space>
        <Space>
          <Typography.Text type="secondary">Дата рождения</Typography.Text>
          <Typography.Text><Moment format="DD.MM.YYYY" >{profileData?.birthday }</Moment></Typography.Text>
        </Space>
        <Space>
          <Typography.Text type="secondary">Дата регистрации</Typography.Text>
          <Typography.Text><Moment format="DD.MM.YYYY" >{profileData?.signUpDate }</Moment></Typography.Text>
        </Space>
        <Space>
          <Typography.Text type="secondary">Дата последнего посещения</Typography.Text>
          <Typography.Text><Moment format="DD.MM.YYYY" >{profileData?.lastVisitDate }</Moment></Typography.Text>
        </Space>
      </Space>
      {isModalVisible && (
        <ProfileEditModal 
          isModalVisible={isModalVisible} 
          initialState={profileData}
          onOk={handleOk}
          onClose={closeModal}
        />
      )}
    </Content>
  )
};
export default Profile;
