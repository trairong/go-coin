import React, { ReactElement, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Col, Drawer, Layout, Menu, Row } from "antd";
import ViewSequentialIcon from "@2fd/ant-design-icons/lib/ViewSequential";
import MoonWaningCrescentIcon from "@2fd/ant-design-icons/lib/MoonWaningCrescent";
import LightbulbOnOutlineIcon from "@2fd/ant-design-icons/lib/LightbulbOnOutline";
import AccountIcon from "@2fd/ant-design-icons/lib/Account";
import BellIcon from "@2fd/ant-design-icons/lib/Bell";
import { Context } from "../context";
import Avatar from "antd/lib/avatar/avatar";

interface Props {}

const theme = {
  dark: {
    colorbuttonBuy: "#00e676",
    theme: {
      colorBackground: "#363535",
      colorFont: "#fff",
      colorPrimary: "#bb86fc",
      colorError: "#f50057",
      colorCard: "#212121",
      colorGraf: "#03dac5",
      colorContent: "#1d1c1c",
      colorScroll: "#212121",
    },
  },
  light: {
    colorbuttonBuy: "#00e676",
    theme: {
      colorBackground: "#fff",
      colorFont: "#03dac5",
      colorPrimary: "#03dac5",
      colorError: "#f50057",
      colorCard: "#212121",
      colorGraf: "#bb86fc",
      colorContent: "#ececec",
      colorScroll: "#999",
    },
  },
};

export default function CHeader({}: Props): ReactElement {
  const { state, dispatch } = useContext(Context);
  const [isTheme, setisTheme] = useState(true);
  const [visible, setVisible] = useState(false);

  const setTheme = (theme, istheme) => {
    setisTheme(istheme);
    dispatch({
      type: "SET_THEME",
      payload: {
        theme: theme.theme,
      },
    });
    dispatch({
      type: "SET_PRIMARY",
      payload: {
        primary: theme.colorbuttonBuy,
      },
    });
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {}, [isTheme]);

  return (
    <>
      <Headers theme={state.theme}>
        <Row style={{ height: "100%" }}>
          <Col span={6} style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: state.theme.colorPrimary,
              }}
            >
              GO COIN
            </span>
          </Col>
          <Col span={12} style={{ display: "flex", alignItems: "center" }}>
            <Menus />
          </Col>
          <Col
            span={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              type="link"
              style={{ margin: "10px 10px" }}
              icon={
                <BellIcon
                  style={{ fontSize: 30, color: state.theme.colorPrimary }}
                />
              }
            ></Button>
            <Button
              type="link"
              hidden={isTheme}
              style={{ margin: "10px 10px" }}
              onClick={() => setTheme(theme.dark, true)}
              icon={
                <MoonWaningCrescentIcon
                  style={{ fontSize: 30, color: state.theme.colorPrimary }}
                />
              }
            ></Button>
            <Button
              type="link"
              hidden={!isTheme}
              style={{ margin: "10px 10px" }}
              onClick={() => setTheme(theme.light, false)}
              icon={
                <LightbulbOnOutlineIcon
                  style={{ fontSize: 30, color: state.theme.colorPrimary }}
                />
              }
            ></Button>
            <Button
              type="link"
              style={{ margin: "10px 10px" }}
              onClick={showDrawer}
              icon={
                <AccountIcon
                  style={{ fontSize: 30, color: state.theme.colorPrimary }}
                />
              }
            ></Button>
            <Button
              type="link"
              style={{ margin: "10px 10px" }}
              icon={
                <ViewSequentialIcon
                  style={{ fontSize: 30, color: state.theme.colorPrimary }}
                />
              }
            ></Button>
          </Col>
        </Row>
      </Headers>
      <Drawer
        width={300}
        title={
          <>
            <ContentHeader theme={state.theme}>
              <Avatar
                size={{ xs: 80, sm: 80, md: 80, lg: 80, xl: 80, xxl: 100 }}
                src="images/profile.png"
              />
              <TitleName>TRAIRONG JAMPANIL</TitleName>
            </ContentHeader>
          </>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

const Menus = () => {
  const { state, dispatch } = useContext(Context);
  const [isMenu, setisMenu] = useState("1");

  const submitMenu = (item) => {
    setisMenu(item);
  };

  useEffect(() => {}, [isMenu]);
  return (
    <ContentMenu selectedKeys={[isMenu]} mode="horizontal" theme={state.theme}>
      <MenuItems key="1" onClick={() => submitMenu("1")}>
        ตลาดซื้อขาย
      </MenuItems>
      <MenuItems key="2" onClick={() => submitMenu("2")}>
        ถอนเงิน
      </MenuItems>
      <MenuItems key="3" onClick={() => submitMenu("3")}>
        ฝากเงิน
      </MenuItems>
      <MenuItems key="4" onClick={() => submitMenu("4")}>
        วิธีการสมัคร
      </MenuItems>
      <MenuItems key="5" onClick={() => submitMenu("5")}>
        บัญชีธนาคาร
      </MenuItems>
    </ContentMenu>
  );
};

const ContentMenu = styled(Menu)`
  display: flex;
  align-items: center;
  margin: -5px 10px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colorFont};
  font-size: 16px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colorBackground};
  border-bottom: 0px;
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,
  .ant-menu-item-active {
    border-bottom: 0px !important;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,
  .ant-menu-item {
    border-bottom: 0px !important;
  }
`;

const MenuItems = styled(Menu.Item)``;

const Headers = styled(Layout.Header)`
  height: 80px;
  background-color: ${({ theme }) => theme.colorBackground};
  /* border-bottom: solid 5px ${({ theme }) => theme.colorPrimary}; */
  transform: translateY(0);
  transition: transform 300ms 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0ms 300ms, background-color 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%),
    0 12.5px 10px rgb(0 0 0 / 6%), 0 39.3px 17.9px rgb(0 0 0 / 0%),
    0 41.8px 33.4px rgb(0 0 0 / 0%), 0 100px 80px rgb(0 0 0 / 0%);
  z-index: 4;
`;

const ContentHeader = styled.div`
  width: 100%;
  height: 180px;
  /* background-color: ${({ theme }) => theme.colorBackground}; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.8;
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%),
    0 12.5px 10px rgb(0 0 0 / 6%), 0 39.3px 17.9px rgb(0 0 0 / 0%),
    0 41.8px 33.4px rgb(0 0 0 / 0%), 0 100px 80px rgb(0 0 0 / 0%);
`;

const TitleName = styled.div`
  font-size: 18px;
  padding-top: 10px;
  color: white;
  font-weight: bold;
`;
