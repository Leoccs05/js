import styled, { createGlobalStyle } from "styled-components";
import * as colors from '../config/colors'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor}
  }

  html, body, #root{
    height: 100%;
  }

  button{
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  button:hover{
    filter: brightness(45%)
  }

  a{
    text-decoration: none;
    color: ${colors.primaryColor}
  }

  ul{
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background-color: ${colors.successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background-color: ${colors.errorColor};
  }
`
export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0px 0px 10 rgba(0, 0, 0, 0.1);
`
