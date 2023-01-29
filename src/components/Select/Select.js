import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";

const { black, gray700, transparentGray15 } = COLORS;

const IconWrapper = styled.div`
  pointer-events: none;
`;

const SelectWrapper = styled.select`
  color: ${gray700};
  background-color: ${transparentGray15};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  appearance: none;
  -webkit-appearance: none;

  &:hover {
    color: ${black};
  }

  &:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const LayoutWrapper = styled.div`
  width: max-content;
  position: relative;

  & > div {
    position: absolute;
    top: 10px;
    right: 10px;

    &:hover {
      color: ${black};
    }
  }
`;

const Select = ({ label, value, onChange, children }) => {
  return (
    <LayoutWrapper>
      <IconWrapper>
        <Icon id="chevron-down" size={24} />
      </IconWrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
    </LayoutWrapper>
  );
};

export default Select;
