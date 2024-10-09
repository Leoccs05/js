import * as Styled from './styles'
import P from 'prop-types'

export const App =({children}) => {
  return <Styled.container>
  {children}
  </Styled.container>
}

App.propTypes={
  children: P.node.isRequired
}

