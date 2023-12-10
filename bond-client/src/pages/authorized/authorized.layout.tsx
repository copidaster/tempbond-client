import * as React from 'react';
import { Header } from './header/header';
import { Breadcrumb, Layout } from 'antd';
import { FilterPanel } from './pages/shop/filter-panel/filter-panel';
import * as S from './authorized.layout.styled';
import { Footer } from './footer/footer';

export const AuthorizedLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <S.Body>
      <Header />
      <Layout>
        <S.Sider>
          <FilterPanel />
        </S.Sider>
        <S.Main>
          <S.Content>{props.children}</S.Content>
        </S.Main>
      </Layout>
      <Footer />
    </S.Body>
  );
};
