/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import ProgressWrapper from "./ProgressWrapper";
import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const { primary } = COLORS;

const Bar = styled.div`
  --radius: ${(props) => (props.value === 100 ? "4px" : "0px")};

  width: ${(props) => props.value}%;
  height: 100%;
  background-color: ${primary};
  border-radius: 4px var(--radius) var(--radius) 4px;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressWrapper value={value} size={size}>
      <VisuallyHidden id="progresslabel">Progress Bar</VisuallyHidden>
      <Bar value={value} aria-labelledby="progresslabel" />
    </ProgressWrapper>
  );
};

export default ProgressBar;
