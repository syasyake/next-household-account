import '../common/styles/globals.css'
import Layout from '../components/layouts/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}