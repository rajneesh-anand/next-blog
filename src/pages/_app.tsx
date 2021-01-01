import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout pageTitle="Blog" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
