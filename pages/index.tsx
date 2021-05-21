import React, { useContext } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import CLayout from "../src/components/c-layout";
import CHeader from "../src/components/c-header";
import CContent from "../src/components/c-content";
import CFooter from "../src/components/c-footer";
import Dashbord from "../src/components/pages/dashbord";
import SwitchComponents from "../src/utils/switch-components";
import { Context } from "../src/context";

const { Header, Footer, Sider, Content } = Layout;

interface Props {}

export default function index(props: Props) {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <CLayout>
        <CHeader />
        <CContent>
          <SwitchComponents route={state.routMenu} />
        </CContent>
      </CLayout>
    </>
  );
}
