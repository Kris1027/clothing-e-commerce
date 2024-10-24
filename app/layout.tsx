import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import TopBar from '@/app/_components/TopBar/TopBar';
import Divider from './_components/Divider/Divider';

const montserrat = Montserrat({
   weight: ['400', '500', '700'],
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'Clothing E-Commerce',
   description:
      'Premium clothing store offering curated collections for men and women. Discover trendy casual wear, business attire, and designer accessories.',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='pl'>
         <body className={montserrat.className}>
            <TopBar />
            <Divider />
            {children}
         </body>
      </html>
   );
}
