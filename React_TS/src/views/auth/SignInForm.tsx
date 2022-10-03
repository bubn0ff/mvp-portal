import { FC, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Props } from './types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/UserSlice';

import data from '../../accets/users/users.json';

const SignInForm: FC<Props> = () => {
  const dispatch = useDispatch();
  const { setRole } = userSlice.actions;
  const { setIsLogin } = userSlice.actions;
  const [users] = useState(data.users);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    const password = values.password;
    const email = values.email;
    const user = users.find(
      (user) => user.password === password && user.email === email,
    );
    if (user) {
      dispatch(setRole(user.role));
      navigate('/');
      dispatch(setIsLogin());
    }
  };
  return (
    <div className="auth-form-wrapper">
      <div className="auth-form">
        <div className="auth-form_title">Sign in</div>
        <Form
          name="normal_login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
