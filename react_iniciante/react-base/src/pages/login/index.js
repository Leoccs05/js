import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import {Title, Paragrafo} from './styled'

import axios from '../../services/axios';
import * as exampleAction from '../../store/modules/example/actions'


export default function Login(){
  // para o localhost
  /*React.useEffect(()=> {
    async function getData(){
      const response = await axios.get('/users');
      const {data} = response;
        console.log(data);
    }

    getData()
  }, [])*/

  const dispatch = useDispatch()
  function handleClick(e){
    e.preventDefault()

    dispatch(exampleAction.clicaBotaoRequest())
  }

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get();
      const { data } = response;
      console.log(data);
    }
    getData();
  }, []);

  return(
    <Container>
    <Title isred='false'>
      Login
      <small>Oie</small>
    </Title>
    <Paragrafo>Lorem ipsum</Paragrafo>
    <a href='https://www.youtube.com/shorts/L7_HtA1piEE'>Link aqui</a>
    <br></br>
    <button type="button" onClick={handleClick}>Enviar</button>
    </Container>
  )
}
