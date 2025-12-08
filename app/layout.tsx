import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Rubik } from 'next/font/google'
import { ThemeProvider } from '@mui/material'
import { theme } from '@/app/ui/theme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import MainLayout from '@/app/ui/MainLayout'

export const metadata: Metadata = {
  title: 'Bortexel',
  description: 'Наш сервер закрылся, но ты всё ещё можешь скачать карты прошлых сезонов.',
}

const rubik = Rubik({
  subsets: [ 'cyrillic', 'latin' ],
  variable: '--font-rubik',
})

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='ru' className={ `${ rubik.className } antialiased` }>
    <body>
    <AppRouterCacheProvider>
      <ThemeProvider theme={ theme }>
        <MainLayout>
          <main>
            { children }
          </main>
        </MainLayout>
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  )
}
