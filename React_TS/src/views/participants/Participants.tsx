import './participants.css';
import { Props } from './types';

import React, { FC } from 'react';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import { Col, Divider, Row } from 'antd';
import Users from './usersData/Users';




const Participants: FC<Props> = () => {

  return (
    <Content className="Participants__content">
       <Title>Участники</Title>
       <Divider />
       <Row>
          <Col xs={24} md={{ span: 20, offset: 2}}>
            <Users />
          </Col>
       </Row>
    </Content>
  );
};

export default Participants;
