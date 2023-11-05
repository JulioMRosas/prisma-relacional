import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UserContextProvider } from '@/provider/userProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tablotas Relacionales',
  description: 'Prisma relations example',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen bg-[#f3f3f3]`}>
        <Header/>
        <UserContextProvider>
          {children}
        </UserContextProvider>
        <Footer/>
      </body>
    </html>
  )
}
