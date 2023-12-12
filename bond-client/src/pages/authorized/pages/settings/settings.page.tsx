import * as React from "react";

//A.G TASK
export const SettingsPage = (props: React.PropsWithChildren) => {
  return (
    <div>
      <div>list of settings</div>
      {props.children}
    </div>
  );
};
