import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  --mainColor: var(--orange);
  --mainColorText: var(--primaryDark);

  svg {
    color: var(--mainColor);
  }

  span {
    width: 10rem;
    background: var(--mainColor);
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;

    transition: all 0.4s;

    position: absolute;
    bottom: calc(100% + 0.75rem);
    left: 50%;
    transform: translateX(-50%);

    color: var(--mainColorText);

    &::before {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-color: var(--mainColor) transparent;
      border-width: 0.375rem 0.375rem 0 0.375rem;
      border-style: solid;

      border-bottom-width: 0;
      content: '';
    }
  }
  svg {
    &:hover + span {
      opacity: 1;
      visibility: visible;
    }
  }
`;
