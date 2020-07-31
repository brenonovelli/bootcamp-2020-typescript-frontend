import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1rem;
  border-radius: 0.625rem;
  border: 0.125rem solid var(--primaryDark);
  background: var(--primaryDark);

  transition: 0.2s all;

  & + div {
    margin-top: 0.5rem;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;

    color: var(--textColor);

    &::placeholder {
      color: var(--textColorShade50);
    }
  }

  > svg {
    margin-right: 1rem;
    color: var(--textColorShade50);
    transition: 0.2s all;
  }

  ${props =>
    props.isFilled &&
    css`
      border-color: transparent;
      > svg {
        color: var(--orange);
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--orange);
      > svg {
        color: var(--orange);
      }
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--errorColor);
    `}
`;

export const Error = styled(Tooltip)`
  height: 1.125rem;
  margin-left: 1rem;

  --mainColor: var(--errorColor);
  --mainColorText: var(--textColor);
`;
