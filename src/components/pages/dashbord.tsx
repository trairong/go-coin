import React, { ReactElement, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Pie } from "@ant-design/charts";
import { Button, Col, Row } from "antd";
import { Context } from "../../context";
interface Props {
  
}

const Dashbord: React.FC = () => {
  const { state, dispatch } = useContext(Context);
  const [isBTN, setisBTN] = useState(false);
  
  

  var data = [
    {
      type: "จันทร์",
      value: 27,
    },
    {
      type: "อังคาร",
      value: 25,
    },
    {
      type: "พุธ",
      value: 18,
    },
    {
      type: "พฤหัสบดี",
      value: 15,
    },
    {
      type: "ศุกร์",
      value: 10,
    },
    {
      type: "เสาร์",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    height: 300,
    innerRadius: 0.64,
    label: {
      type: "inner",
      offset: "-50%",
      content: ({ percent }) => `${percent * 100}%`,
      style: {
        fill: "#fff",
        fontSize: 14,
        textAlign: "center",
      },
    },
    statistic: null,
  };

  const submitBTN = (is_btn) => {
    setisBTN(is_btn);
  };
  return (
    <>
      <Contents theme={state.theme}>
        <Row gutter={16}>
          <Col span={24}>
            <Colbuy theme={state.theme}>
              <Row>
                <Col span={16}></Col>
                <Col span={8}>
                  <Row>
                    <Col span={12}>
                      <Button
                        type={isBTN ? "primary" : "default"}
                        block
                        style={{ borderRadius: 0 }}
                        onClick={() => submitBTN(true)}
                      >
                        ซื้อ
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button
                        type={!isBTN ? "primary" : "default"}
                        block
                        style={{ borderRadius: 0 }}
                        onClick={() => submitBTN(false)}
                      >
                        ขาย
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Colbuy>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={16}>
            <ColContents theme={state.theme}>
              <Headers theme={state.theme}>ราคาตลาด</Headers>
            </ColContents>
          </Col>
          <Col span={8}>
            <ColContents theme={state.theme}>
              <Headers theme={state.theme}>พอร์ตโฟลิโอ</Headers>
              <Pie {...config} />
            </ColContents>
          </Col>
        </Row>
        
      </Contents>
    </>
  );
};
export default Dashbord;

const Contents = styled.div`
  height: 100%;
  width: 100vw;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    border-radius: 0px;
    box-shadow: 0px 0px 5px #000000;
    background-color: #ececec;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colorScroll};
  }
`;

const Headers = styled.div`
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colorPrimary};
  /* border-bottom: solid 5px ${({ theme }) => theme.colorPrimary}; */
`;

const Colbuy = styled(Col)`
  height: 400px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colorBackground};
  box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
  transform: translateY(0);
  transition: transform 300ms 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0ms 300ms, background-color 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
`;
const ColContents = styled.div`
  height: 500px;
  border-radius: 0px;
  background-color: ${({ theme }) => theme.colorBackground};
  box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
  transform: translateY(0);
  transition: transform 300ms 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0ms 300ms, background-color 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
`;
const ColSaRub = styled.div`
  border-radius: 0px;
  background-color: ${({ theme }) => theme.colorBackground};
  box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
  transform: translateY(0);
  transition: transform 300ms 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0ms 300ms, background-color 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
`;
