import '../styles/globals.scss';
import PropTypes from 'prop-types';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat();

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};
