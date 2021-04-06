import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: block;
  align-items: stretch;
`;

export const Content = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;

  width: 100%;
  max-width: 700px;
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
    min-width:340px;
    width: 100%;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')}
      }
    }

  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Box = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 700px;
  min-height: 300px;
  padding: 20px;
  background-color: #232129;
  border-radius: 25px;
  text-align: justify;
`;

export const BoxText = styled.div`
   h1 {
     color: #326DDC;
     padding-bottom: 20px;
   }

   h2 {
     padding-bottom: 10px;
     font-size: 11pt;
   }

   h3 {
     text-indent: 25px;
     line-height: 1.8;
     font-size: 10pt;
   }

`;

export const Background = styled.div`
  flex: 1;
  background-size: cover;
`;
