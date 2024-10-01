import React from "react";
import {FaHome, FaSignInAlt, FaUserAlt} from 'react-icons/fa'
import { useSelector } from "react-redux";

import {Nav} from './styled'
import {Link} from 'react-router-dom'


export default function Header(){
    const botaoClicado = useSelector(state => state.exampleReducer.botaoClicado)

  return(
    <Nav>
      <Link to="/">
        <FaHome size={24}/>
      </Link>
      <Link to="/login">
        <FaUserAlt size={24}/>
      </Link>
      <Link to="/joaoAmorzao">
        <FaSignInAlt size={24}/>
      </Link>
      {botaoClicado ? 'Clicado' : 'Não Clicado'}
    </Nav>
  )
}
