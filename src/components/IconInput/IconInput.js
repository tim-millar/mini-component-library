import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const LayoutWrapper = styled.div`
  position: relative;
  border-bottom: 2px solid ${COLORS.black};
  padding-left: 36px;
  height: ${36 / 16}rem;
  width: 271px;
  font-size: ${18 / 16}rem;
  font-weight: 700;
  color: ${COLORS.gray700};
  line-height: ${21 / 16}rem;
`;
const InputWrapper = styled.input`
  height: 100%;
  width: ${271 - 37}px;
  appearance: none;
  border: none;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 24px;
  height: 24px;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <LayoutWrapper>
      <IconWrapper>
        <Icon id={icon} size={24} />
      </IconWrapper>
      <InputWrapper placeholder="Search..." />
    </LayoutWrapper>
  );
};

export default IconInput;
