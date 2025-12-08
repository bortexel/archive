'use client'
import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f8f8f8',
      paper: '#ffffff',
    },
    primary: {
      main: '#ffb114',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#222222',
    },
  },
  typography: {
    fontFamily: 'var(--font-rubik)',
    h1: {
      fontSize: '4rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '20px',
    },
    body2: {
      fontSize: '18px',
    },
    button: {
      fontWeight: 500,
    },
    caption: {
      fontSize: '16px',
    },
  },
  shape: {
    borderRadius: 8,
  },
})
