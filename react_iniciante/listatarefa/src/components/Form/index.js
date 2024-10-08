import React from 'react'
import PropTypes from 'prop-types'
import {FaPlus} from 'react-icons/fa'

import './From.css'

export default function Form({handleSubmit, handleChange, novaTarefa}) {
  return (
    <form onSubmit={handleSubmit} action="#" className='form'>

      <input
        onChange={handleChange}
        type="text"
        placeholder='Insira o texto aqui'
        value={novaTarefa}
      />

      <button type="submit">
        <FaPlus />
      </button>
      
    </form>
  )
}

Form.propTypes={
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}
