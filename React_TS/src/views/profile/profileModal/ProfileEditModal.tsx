import { rulesName, rulesNewPassword, rulesSurName } from './rules';

import { EGender, IProps } from '../consts/consts';

import { ProfileAvatar } from '../profileAvatar/ProfileAvatar';

import { DatePicker, Form, Modal, Radio, RadioChangeEvent, Space, Typography, Input } from 'antd';
import { useEffect, useState } from 'react';

import moment, { Moment } from 'moment';
import form from 'antd/lib/form';


export const ProfileEditModal = (props: IProps): JSX.Element => { 
  const { isModalVisible, initialState, onOk, onClose } = props;

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [birthDay, setBirthDay] = useState<Moment>(moment(new Date()));
  const [gender, setGender] = useState<EGender>(EGender.Male);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [disabledButton, setdisabled] = useState(true);

  useEffect(() => {
    if(initialState){
      setName(initialState.name);
      setSurname(initialState.surname ?? '');
      setGender(initialState.sex);
      initialState.birthday && setBirthDay(initialState.birthday);
      initialState.avatar && setImageUrl(initialState.avatar);
    }
  }, [initialState]);

  const currentPasswordProfile = '123';

  const handlesetdisabled = () => {
    setdisabled(false);
  };

  const handleAvatarChange = (url: string) => {
    setImageUrl(url);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  const handleGenderChange = (e: RadioChangeEvent) => {
    setGender(e.target.value);
  };

  const handeBirthDayChange = (value: Moment | null) => {
    value && setBirthDay(value);
  };

  const handleOk = () => {
    onOk({
      name: name,
      surname: surname,
      sex: gender,
      birthday: birthDay,
      avatar: imageUrl,
    });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };



  return(
    <Modal 
      title="Редактирование профиля" 
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel} 
      width={1000}
      cancelText="Отменить"
      okText="Сохранить"
      okType={'primary'}
      okButtonProps={{
        disabled: disabledButton,
      }}
    >
      <Form
        autoComplete="off"
      >
        <ProfileAvatar url={imageUrl} onChange={handleAvatarChange}/>
        <Space direction="vertical">
          <form.Item
            name="name"
            label="Имя"
            rules={rulesName}
            hasFeedback
          > 
            <Input onChange={handleNameChange} defaultValue={initialState?.name}/>
          </form.Item>

          <form.Item
            name="surName"
            label="Фамилия"
            rules={rulesSurName}
            hasFeedback
          > 
            <Input onChange={handleSurnameChange} defaultValue={initialState?.surname}/>
          </form.Item>
          <Radio.Group onChange={handleGenderChange} value={gender}>
            <Space direction="vertical">
              <Radio value={EGender.Male}>Мужской</Radio>
              <Radio value={EGender.Female}>Женский</Radio>
            </Space>
          </Radio.Group>
          <Space>
            <Typography.Text type="secondary">Дата рождения</Typography.Text>
            <DatePicker 
              value={moment(birthDay)} 
              onChange={handeBirthDayChange} 
              format="DD.MM.YYYY" 
              allowClear={false}
            />
          </Space>
          <Form.Item
            name="newPassword"
            label="Новый пароль"
            rules={rulesNewPassword}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="currentPassword"
            label="Текущий пароль"
            dependencies={[currentPasswordProfile]}
            rules={[
              {
                required: true,
                message: 'Введите текущий пароль!',
              },
              () => ({
                validator(_, value) {
                  if (currentPasswordProfile === value) {
                    handlesetdisabled();
                    return Promise.resolve();
                    
                  }
                  return Promise.reject(new Error('Вы ввели неправильный пароль!'));
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
};


