import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between bg-white">
        <Sidebar />
        <div className="container p-4">
        <Navbar />
        <div>{children}</div>
        </div>
        </div>
        </body>
    </html>
  )
}
