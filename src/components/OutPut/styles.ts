import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 6px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  
  label {
    font-size: 15pt;
    font-weight:bold;
    text-align: left;
    padding-left: 0px;
    width: 150px;
  }

  output {
    font-size: 13pt;
    flex: 1;
    text-align: left;
    border: 0;
    color: #FFF;
  }

`;

