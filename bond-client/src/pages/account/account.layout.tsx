import * as React from 'react'

export const AccountLayout = (props: React.PropsWithChildren<{}>) => {
    return (
      <div>
        HELO
        {/* Header, Navigation, etc. */}
        <main>{props.children}</main>
        {/* Footer */}
      </div>
    );
  };