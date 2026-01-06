import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from "./theme";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme = {lightTheme}> 
      <CssBaseline/> 
    <App />
     </ThemeProvider>
  </StrictMode>,
)
