import { Signika, Montserrat} from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});

export const signika = Signika({
  subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-signika',
});