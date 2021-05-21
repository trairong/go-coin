import React, { ReactElement } from "react";
import styled from "styled-components";
import { Layout } from "antd";

interface Props {}

export default function CFooter({}: Props): ReactElement {
  return (
    <>
      <Layout.Footer>Footer</Layout.Footer>
    </>
  );
}
