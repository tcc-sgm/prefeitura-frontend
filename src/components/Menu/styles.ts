import styled from 'styled-components';

export const Container = styled.div`
  
  margin:auto;
  nav {
    color: #326DDC;
    border-color: #326DDC;    
   
    ul {
      padding:0px;
      margin:0px;
      list-style:none;
      text-align: right;
      margin-left:auto;
     
      li {
        display: inline-block;
        padding-left: 5px;
        
        a {
          float:none;
          text-align:center;
          width:150px;
          padding: 5px 10px;
          display: inline-block;
          font-size:11pt;
          background-color:#312E38;
          color: #FFF;
          text-decoration: none;
          border-bottom: 5px solid #312E38;
        }
        
        a:hover {
          background-color:#6A696C;
          color: #FFF;
          border-bottom: 5px solid  #326DDC;
        }
      }
    }
  }
`;
