import * as React from 'react'
import styled from "styled-components";
import Back from "../../assets/back.svg";
import Logo from "../../assets/logo.svg";

const AccountLayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .content {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .img {
    width: 55%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const AccountLayout = (props: React.PropsWithChildren<{}>) => {
  return (
    <AccountLayoutStyled>
      <div className="content">
        <main>
          <img src={Logo} alt="Afac corp." />
          {props.children}
        </main>
      </div>
      <div className="img">
        <img src={Back} alt="Afac corp." />
      </div>
    </AccountLayoutStyled>
  );
};