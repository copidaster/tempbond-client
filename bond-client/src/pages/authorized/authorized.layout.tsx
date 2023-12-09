import * as React from 'react'
import { Header } from './header/header';

export const AuthorizedLayout = (props: React.PropsWithChildren<{}>) => {
    return (
      <div>
        <Header/>
        {/* Header, Navigation, etc. */}
        <main style={{
            padding: '6px 36px'
        }}>{props.children}</main>
        {/* Footer */}
      </div>
    );
  };