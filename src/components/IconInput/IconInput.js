import React, { useState } from "react";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const LayoutWrapper = styled.div`
  position: relative;
  padding-left: 36px;
  width: ${({ width }) => width}px;
  font-weight: 700;
  color: ${COLORS.gray700};

  ${(props) =>
    props.focusInput &&
    `
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  `}
`;

const InputWrapper = styled.input`
  height: 100%;
  width: ${({ width }) => width - 37}px;
  appearance: none;
  border: none;
  font-weight: 700;
  color: ${COLORS.gray700};

  &:focus,
  &:focus-visible {
    outline: none;
  }

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  ${LayoutWrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;

  ${LayoutWrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const LargeLayoutWrapper = styled(LayoutWrapper)`
  height: ${36 / 16}rem;
  border-bottom: 2px solid ${COLORS.black};
  font-size: ${18 / 16}rem;
  line-height: ${21 / 16}rem;
`;

const LargeInputWrapper = styled(InputWrapper)`
  font-size: ${18 / 16}rem;
  line-height: ${21 / 16}rem;
`;

const LargeIconWrapper = styled(IconWrapper)`
  width: 24px;
  height: 24px;
`;

const LargeIconInput = ({
  label,
  icon,
  width = 271,
  size,
  placeholder = "Search...",
  toggleFocus,
  focusInput,
}) => {
  return (
    <OutsideClickHandler onOutsideClick={() => toggleFocus(false)}>
      <LargeLayoutWrapper
        width={width}
        focusInput={focusInput}
        onClick={toggleFocus}
      >
        <VisuallyHidden htmlFor="search">{label}</VisuallyHidden>
        <LargeIconWrapper>
          <Icon id={icon} size={24} />
        </LargeIconWrapper>
        <LargeInputWrapper
          id="search"
          width={width}
          placeholder={placeholder}
        />
      </LargeLayoutWrapper>
    </OutsideClickHandler>
  );
};

const SmallLayoutWrapper = styled(LayoutWrapper)`
  height: ${28 / 16}rem;
  border-bottom: 1px solid ${COLORS.black};
  font-weight: 700;
  color: ${COLORS.gray700};
`;

const SmallIconWrapper = styled(IconWrapper)`
  width: 18px;
  height: 18px;
`;

const SmallInputWrapper = styled(InputWrapper)`
  font-size: ${14 / 16}rem;
  line-height: ${16 / 16}rem;
`;

const SmallIconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder = "Search...",
  toggleFocus,
  focusInput,
}) => (
  <OutsideClickHandler onOutsideClick={() => toggleFocus(false)}>
    <SmallLayoutWrapper
      width={width}
      focusInput={focusInput}
      onClick={toggleFocus}
    >
      <VisuallyHidden htmlFor="search">{label}</VisuallyHidden>
      <SmallIconWrapper>
        <Icon id={icon} size={18} />
      </SmallIconWrapper>
      <SmallInputWrapper width={width} placeholder={placeholder} />
    </SmallLayoutWrapper>
  </OutsideClickHandler>
);

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const [focusInput, setFocusInput] = useState(false);
  const toggleFocus = (toggle = true) => {
    setFocusInput((toggleInput) => toggle && !toggleInput);
  };

  if (size === "small") {
    return (
      <SmallIconInput
        icon={icon}
        width={width}
        toggleFocus={toggleFocus}
        focusInput={focusInput}
      />
    );
  }
  return (
    <LargeIconInput
      icon={icon}
      width={width}
      toggleFocus={toggleFocus}
      focusInput={focusInput}
    />
  );
};

export default IconInput;
