// import loginFormBG from '../../images/login-bg.png';
import styled from 'styled-components';

const LoginCard = styled.div `
  margin: 40px auto 0;
  display: flex;
  width: 520px;	
  border-radius: 5px;	
  background-color: #FFFFFF;	
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.28);
  padding: 40px 40px 54px;

  &>div {
    float: left;
    width: 100%;
  }

  .sign-in-text {
    font-size: 26px;
    text-align: center;
    margin: 10px auto 10px !important;
    color: #414141;
  }
  
  p{
    font-size: 16px;
    color: rgb(114, 114, 114);
    margin-bottom: 5px;
  }
`;

export {
    LoginCard
};
