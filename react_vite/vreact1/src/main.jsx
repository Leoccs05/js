import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './templates/App'
import { MyThemeProvider } from './styles/MyThemeProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyThemeProvider>
    <App>Hello</App>
    </MyThemeProvider>
  </StrictMode>,
)


