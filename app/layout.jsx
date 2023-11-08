import StyledComponentsRegistry from '@/lib/AntdRegistry';
import AntdConfig from '@/lib/AntdConfig';
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const dynamicParams = true

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'РСТ МЕТРОЛОГИЯ',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AntdConfig>
          <StyledComponentsRegistry>
            <Navbar/>
              {children}
            <Footer/>
          </StyledComponentsRegistry>
        </AntdConfig>
      </body>
    </html>
  )
}
