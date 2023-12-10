import { Layout } from 'antd';
import * as React from 'react';
import { Footer } from './footer/footer';
import { Header } from './header/header';

export const AuthorizedLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <Layout>
      <Header />
      {props.children}
      <Footer />
    </Layout>
  );
};
