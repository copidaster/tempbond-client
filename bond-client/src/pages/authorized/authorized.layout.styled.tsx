import { Layout } from 'antd';
import styled from 'styled-components';

const { Content: AntdContent, Footer: AntdFooter, Sider: AntdSider } = Layout;

export const Body = styled(Layout)`
  /* border: 1px solid blue; */
`;

export const Main = styled(Layout)`
  /* border: 1px solid red; */
  padding: 0 24px 24px;
  margin-top: 5px;
`;

export const Content = styled(AntdContent)`
  padding: 24px;
  margin: 0;
  height: auto;
  background: white;
  /* border: 1px solid green; */
`;

export const Footer = styled(AntdFooter)`
  text-align: center;
  color: white;
`;

export const Sider = styled(AntdSider)`
  padding: 16px;
  border-right: 1px solid rgba(234, 236, 240, 1);
`;
