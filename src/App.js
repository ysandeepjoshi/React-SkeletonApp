import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import './App.css';

const App = () => {
  return (
  <BrowserRouter>
  <ThemeProvider theme={theme}>
  <MainRouter/>
  </ThemeProvider>
  </BrowserRouter>
  )}

export default App;
