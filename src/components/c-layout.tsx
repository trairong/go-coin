import React, { ReactElement } from "react";
import styled from "styled-components";
import { Layout } from "antd";

interface Props {
  children: React.ReactNode;
}

export default function CLayout({ children }: Props): ReactElement {
  return (
    <>
      <Layouts>{children}</Layouts>
    </>
  );
}

const Layouts = styled(Layout)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
