import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: block;
  align-items: stretch;
  margin-top: 60px;
`;

export const Content = styled.div`

  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;

  width: 100%;

  margin: 70px auto;
  height: 480px;
  max-width: 400px;
  background: #40424D;
  border-radius: 60px;
`;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${ appearFromBottom } 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')}
      }
    }

  }

  > a {
    color: #FFF;
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#326DDC')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background-size: cover;
`;
