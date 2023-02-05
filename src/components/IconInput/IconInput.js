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
  width: ${({ width }) => width}px;
  font-size: ${18 / 16}rem;
  font-weight: 700;
  color: ${COLORS.gray700};
  line-height: ${21 / 16}rem;
`;

const InputWrapper = styled.input`
  height: 100%;
  width: ${({ width }) => width - 37}px;
  appearance: none;
  border: none;
  font-size: ${18 / 16}rem;
  font-weight: 700;
  color: ${COLORS.gray700};
  line-height: ${21 / 16}rem;

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

const LargeIconInput = ({
  label,
  icon,
  width = 271,
  size,
  placeholder = "Search...",
}) => (
  <LayoutWrapper width={width}>
    <IconWrapper>
      <Icon id={icon} size={24} />
    </IconWrapper>
    <InputWrapper width={width} placeholder={placeholder} />
  </LayoutWrapper>
);

const SmallLayoutWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 36px;
  height: ${28 / 16}rem;
  width: ${({ width }) => width}px;
  font-size: ${14 / 16}rem;
  font-weight: 700;
  color: ${COLORS.gray700};
  line-height: ${16 / 16}rem;
`;

const SmallIconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 18px;
  height: 18px;
`;

const SmallInputWrapper = styled.input`
  height: 100%;
  width: ${({ width }) => width - 37}px;
  appearance: none;
  border: none;
  font-size: ${14 / 16}rem;
  font-weight: 700;
  color: ${COLORS.gray700};
  line-height: ${16 / 16}rem;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const SmallIconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder = "Search...",
}) => (
  <SmallLayoutWrapper width={width}>
    <SmallIconWrapper>
      <Icon id={icon} size={18} />
    </SmallIconWrapper>
    <SmallInputWrapper width={width} placeholder={placeholder} />
  </SmallLayoutWrapper>
);

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  if (size === "small") {
    return <SmallIconInput icon={icon} width={width} />;
  }
  return <LargeIconInput icon={icon} width={width} />;
};

export default IconInput;
