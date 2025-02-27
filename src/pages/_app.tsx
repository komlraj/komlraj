import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/home-page.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp; 