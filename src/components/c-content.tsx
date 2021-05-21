import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { Context } from "../context";

const { Header, Footer, Sider, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

export default function CContent({ children }: Props): ReactElement {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <Contents theme={state.theme}>{children}</Contents>
    </>
  );
}

const Contents = styled(Content)`
  height: calc(100vh - 80px);
  width: 100vw;
  background-color: ${({theme})=>theme.colorContent};
  box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
  transform: translateY(0);
  transition: transform 300ms 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0ms 300ms, background-color 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
`;
