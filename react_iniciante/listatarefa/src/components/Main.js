import React, {Component} from 'react';

import {FaPlus} from 'react-icons/fa'

import  './Main.css'

export default class Main extends Component{
  /*constructor(props){
    super(props);
    this.state = {
        novaTarefa: '',
    }

    this.inputMudou = this.inputMudou.bind(this)
  }
  */
  state = {
    novaTarefa: '',
  };

  handleChange = (e) =>{
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  render(){

    const {novaTarefa} = this.state

    return (
      <div className='main'>
        <h1>Lista de Tarefa do</h1>

        <form action="#" className='form'>
          <input
          onChange={this.handleChange}
          type="text"
          placeholder='Insira o texto aqui'
          value= {novaTarefa}
          />
          <button type="submit">
            <FaPlus/>
          </button>
        </form>
      </div>
    )
  }
}
