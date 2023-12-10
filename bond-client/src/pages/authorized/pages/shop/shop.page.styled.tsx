import styled from 'styled-components';
import { Layout, Pagination as AntdPagination } from 'antd';

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

export const Pagination = styled(AntdPagination)`
  .custom-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .custom-pagination .ant-pagination-prev {
    order: 1;
  }

  .custom-pagination .ant-pagination-item {
    order: 2;
  }

  .custom-pagination .ant-pagination-next {
    order: 3;
  }
`;