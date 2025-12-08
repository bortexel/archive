import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box
      sx={{
        maxWidth: { xs: '100%', md: '1024px' },
        margin: { xs: '16px', md: '128px auto' },
      }}
    >
      { children }
    </Box>
  )
}

export default MainLayout
