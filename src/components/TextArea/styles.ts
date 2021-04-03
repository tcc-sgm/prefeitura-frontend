import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  height:200px;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) => props.isErrored &&
    css`
      border-color: #c53030;
    `
  }

  ${(props) => props.isFocused &&
    css`
      color: #326DDC;
    `
  }

  ${(props) => props.isFilled &&
    css`
      color: #326DDC;
    `
  }

  textArea {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    height:150px;
    line-height:1.5;
    font-size:15pt;
    resize: none;

    &::placeholder {
      font-size:19px;
      color: #636360
    }
    &::-webkit-scrollbar {
      width: 20px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background:  #636360;
      box-shadow: inset 0 0 5px grey; 
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      margin:1%;
      background: #ff9000;
      border-radius:10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #ff9000;
      border-radius:10px;
    }

  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
