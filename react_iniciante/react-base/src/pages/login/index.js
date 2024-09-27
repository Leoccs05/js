import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import {Title, Paragrafo} from './styled'

//import axios from '../../services/axios';

export default function Login(){
  /*React.useEffect(()=> {
    async function getData(){
      const response = await axios.get('./alunos');
      const {data} = response;
      console.log(data)
    }

    getData()
  }, [])*/

  return(
    <Container>
    <Title isRed={false}>
      Login
      <small>Oie</small>
    </Title>
    <Paragrafo>Lorem ipsum</Paragrafo>
    <a href='https://www.youtube.com/shorts/L7_HtA1piEE'>Link aqui</a>
    <br></br>
    <button type="button">Enviar</button>
    </Container>
  )
}
