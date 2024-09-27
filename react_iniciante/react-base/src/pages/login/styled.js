import styled from "styled-components";

export const Title = styled.h1`
  color: ${props => props.isred? 'red' : 'blue'};

  small{
    font-size: 12pt;
    margin-left: 20px;
    color: #999;
  }
`

export const Paragrafo = styled.p`
  font-size: 80px
`

