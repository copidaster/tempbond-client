import { Layout } from 'antd';
import styled from 'styled-components';

const { Content: AntdContent } = Layout;

export const Body = styled(Layout)``;

export const Main = styled(Layout)`
  padding: 0 24px 24px;
  margin-top: 5px;
`;

export const Content = styled(AntdContent)`
  padding: 24px;
  margin: 0;
  height: auto;
  background: white;
`;