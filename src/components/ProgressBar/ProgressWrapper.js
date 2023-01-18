/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const { transparentGray15, transparentGray35 } = COLORS;

const BaseProgressWrapper = styled.div.attrs((props) => ({
  role: "progressbar",
  "aria-valuenow": props.value,
}))`
  background-color: ${transparentGray15};
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${transparentGray35};
`;

const LargeProgressWrapper = styled(BaseProgressWrapper)`
  width: 370px;
  height: 24px;
  padding: 4px;
  border-radius: 8px;
`;

const MediumProgressWrapper = styled(BaseProgressWrapper)`
  width: 370px;
  height: 12px;
`;

const SmallProgressWrapper = styled(BaseProgressWrapper)`
  width: 370px;
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

export default ProgressWrapper;
