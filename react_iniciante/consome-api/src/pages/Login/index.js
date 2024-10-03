import React from 'react';
import {toast} from 'react-toastify'
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import {Form} from './styled'
import * as actions from '../../store/modules/auth/actions'

export default function Login(){
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = e =>{
    e.preventDefault()
    let formErros = false;

    if(isEmail(email)){
      formErros = true;
      toast.error('Email invalido')
    }

    if(password.length< 6 || password.length > 50){
      formErros = true;
      toast.error('Senha invalida ')
    }

    if(formErros) return

    dispatch(actions.loginFailure({email, password}))
  }

  return(
    <Container>
    <h1>Receba</h1>
    <Form onSubmit={handleSubmit}>
      <input type='text' value={email} onChange={e => setEmail(e.target)} placeholder='Seu Email'/>

      <input type='password' value={password} onChange={e => setPassword(e.target)} placeholder='Seu password'/>

      <button type="submit">Acessar</button>
    </Form>
    </Container>
  )
}
