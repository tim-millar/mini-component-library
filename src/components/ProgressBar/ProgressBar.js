/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const { primary, transparentGray15, transparentGray35 } = COLORS;

const BaseProgressWrapper = styled.div.attrs((props) => ({
  role: "progressbar",
  "aria-valuenow": props.value,
}))`
  background-color: ${transparentGray15};
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${transparentGray35};
  width: 370px;
`;

const LargeProgressWrapper = styled(BaseProgressWrapper)`
  height: 24px;
  padding: 4px;
  border-radius: 8px;
`;

const MediumProgressWrapper = styled(BaseProgressWrapper)`
  height: 12px;
`;

const SmallProgressWrapper = styled(BaseProgressWrapper)`
  height: 8px;
`;

const ProgressWrapper = ({ size, value, children }) => {
  if (size === "large") {
    return (
      <LargeProgressWrapper value={value}>{children}</LargeProgressWrapper>
    );
  } else if (size === "small") {
    return (
      <SmallProgressWrapper value={value}>{children}</SmallProgressWrapper>
    );
  }
  return (
    <MediumProgressWrapper value={value}>{children}</MediumProgressWrapper>
  );
};

const Bar = styled.div`
  --radius: ${(props) => (props.value === 100 ? "4px" : "0px")};

  width: ${(props) => props.value}%;
  height: 100%;
  background-color: ${primary};
  /* border-radius: 4px var(--radius) var(--radius) 4px; */
  /* use overflow hidden to add radius at 100% */
  border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressWrapper value={value} size={size}>
      <VisuallyHidden id="progresslabel">Progress Bar: {value}%</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} aria-labelledby="progresslabel" />
      </BarWrapper>
    </ProgressWrapper>
  );
};

export default ProgressBar;
