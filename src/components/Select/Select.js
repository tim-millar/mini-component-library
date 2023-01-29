import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const { black, gray700, transparentGray15 } = COLORS;

const IconWrapper = () => <Icon id="chevron-down" size={24} />;

const LayoutWrapper = styled.div`
  display: inline-block;
  color: ${gray700};
  background-color: ${transparentGray15};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  position: relative;

  & div:first-of-type {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &:hover {
    color: black;
  }

  &:focus {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const HiddenSelect = styled.select`
  position: absolute;
  opacity: 0;
  width: 100%
  height: 100%;
`;

const CustomSelect = styled.div``;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <LayoutWrapper>
        <HiddenSelect value={value} onChange={onChange}>
          {children}
        </HiddenSelect>
        <IconWrapper />
        <CustomSelect>{displayedValue}</CustomSelect>
      </LayoutWrapper>
    </>
  );
};

export default Select;
