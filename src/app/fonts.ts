import { Inter, Libre_Baskerville } from 'next/font/google'

export const inter = Inter({ 
  subsets: ['latin'],
  display:'swap',
  variable: '--font-inter',
});

export const libre_baskerville = Libre_Baskerville({ 
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baskerville',
});

