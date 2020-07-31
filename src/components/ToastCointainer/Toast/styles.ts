import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    --bgColor: var(--infoColorLighten50);
    --textColor: var(--infoColor);
  `,
  success: css`
    --bgColor: var(--successColorLighten50);
    --textColor: var(--successColor);
  `,
  error: css`
    --bgColor: var(--errorColorLighten40);
    --textColor: var(--errorColor);
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 22.5rem;

  position: relative;
  padding: 1rem 2rem 1rem 1rem;
  border-radius: 0.625rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  ${props => toastTypeVariations[props.type || 'info']}

  display: flex;

  & + div {
    margin-top: 0.5rem;
  }

  background: var(--bgColor);
  color: var(--textColor);

  > svg {
    margin: 0.25rem 0.75rem 0 0;
  }

  div {
    flex: 1;

    p {
      font-size: 0.875rem;
      margin-top: 0.25rem;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
