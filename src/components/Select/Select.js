import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const { black, gray700, transparentGray15 } = COLORS;

const IconWrapper = () => <Icon id="chevron-down" size={24} />;

const SelectWrapper = styled.select`
  color: ${gray700};
  background-color: ${transparentGray15};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  appearance: none;

  &:hover {
    color: ${black};
  }

  &:focus {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const LayoutWrapper = styled.div`
  display: inline-block;
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
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <LayoutWrapper>
        <IconWrapper />
        <SelectWrapper value={value} onChange={onChange}>
          {children}
        </SelectWrapper>
      </LayoutWrapper>
    </>
  );
};

export default Select;
