import * as React from 'react';
import * as S from './footer.styled';
import { Col, Divider, Row, Space, Typography } from 'antd';
import Logo from '../../../assets/footer-logo.svg';
import { Link } from 'react-router-dom';

const { Text } = Typography;

export const Footer = () => {
  return (
    <S.Footer>
      <Row>
        <Col span={8}>
          <Space direction="vertical">
            <img src={Logo} alt="Afac corp." />
            <Text>
              AFAC acknowledges the Aboriginal and Torres Strait Islander
              peoples as Traditional Custodians of Australia and Māori, as the
              Tāngata Whenua and Treaty of Waitangi partners in Aotearoa-New
              Zealand. We recognise their unique cultural and spiritual
              relationships to the land, waters and their rich contribution to
              society. We pay our respects to ancestors and Elders both past and
              present.
            </Text>
          </Space>
        </Col>
        <Col span={3} offset={7}>
          <Space direction="vertical">
            <Text>Account</Text>
            <Link to="">Dashboard</Link>
            <Link to="">Settings</Link>
            <Link to="">Collaboration group</Link>
          </Space>
        </Col>
        <Col span={3}>
          <Space direction="vertical">
            <Text>Quick Links</Text>
            <Link to="">Community</Link>
            <Link to="">Forum</Link>
            <Link to="">Member directory</Link>
            <Link to="">Organisation directory</Link>
            <Link to="">Resources</Link>
            <Link to="">Career Dashboard</Link>
          </Space>
        </Col>
        <Col span={3}>
          <Space direction="vertical">
            <Text>AFAC</Text>
            <Link to="">Website</Link>
            <Link to="">Terms & Conditions</Link>
            <Link to="">Events</Link>
            <Link to="">About us</Link>
            <Link to="">FAQ</Link>
            <Link to="">Contact</Link>
          </Space>
        </Col>
      </Row>
      <Row>
        <Divider
          style={{ background: '#344054', marginTop: 64, marginBottom: 32 }}
        />
      </Row>
      <Row justify="end">
        <Text>© 2017 AFAC. All rights reserved.</Text>
      </Row>
    </S.Footer>
  );
};
