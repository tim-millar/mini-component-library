import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInputWrapper = styled.label`
  display: inline-block;
  position: relative;
  border: none;
  color: ${COLORS.gray700};
  font-weight: 700;
  height: 100%;

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  width: var(--width);
  border: none;
  color: inherit;
  font-weight: inherit;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const SmallInput = styled(Input)`
  height: ${24 / 16}rem;
  padding-left: 16px;
  border-bottom: 1px solid ${COLORS.black};
  font-size: ${14 / 16}rem;
  line-height: ${16 / 16}rem;
`;

const LargeInput = styled(Input)`
  height: ${36 / 16}rem;
  padding-left: 24px;
  border-bottom: 2px solid ${COLORS.black};
  font-weight: inherit;
  font-size: ${18 / 16}rem;
  line-height: ${21 / 16}rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  max-height: max-content;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === "small" ? 16 : 24;

  return (
    <IconInputWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      {size === "small" ? (
        <SmallInput
          placeholder={placeholder}
          style={{ "--width": `${width}px` }}
        />
      ) : (
        <LargeInput
          placeholder={placeholder}
          style={{ "--width": `${width}px` }}
        />
      )}
    </IconInputWrapper>
  );
};

export default IconInput;
