import * as React from 'react';
import { Header } from './header/header';
import { Layout } from 'antd';
import { FilterPanel } from './pages/shop/filter-panel/filter-panel';
import * as S from './authorized.layout.styled';
import { Footer } from './footer/footer';
const { Sider } = Layout;

export const AuthorizedLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <S.Body>
      <Header />
      <Layout>
        <Sider
          width={336}
          style={{
            padding: 36,
            borderRight: '1px solid rgba(234, 236, 240, 1)',
          }}
        >
          <FilterPanel />
        </Sider>
        <S.Main>
          <S.Content>{props.children}</S.Content>
        </S.Main>
      </Layout>
      <Footer />
    </S.Body>
  );
};
