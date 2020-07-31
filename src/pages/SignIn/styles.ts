import styled, { keyframes } from 'styled-components';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 0.5s ease-in-out;

  form {
    margin: 5rem 0;
    width: 21rem;
    text-align: center;

    h1 {
      margin-bottom: 1.5rem;
    }

    a {
      color: var(--textColor);
      display: block;
      margin-top: 1.5rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: var(--textColorShade20);
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;

    color: var(--orange);
    text-decoration: none;

    transition: color 0.2s;

    svg {
      margin-right: 1rem;
      transition: margin ease-in-out 0.2s;
    }

    &:hover {
      color: var(--orangeShade20);

      svg {
        margin: 0 0.5rem;
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
