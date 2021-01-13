import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/css/modal-video.min.css";
import "../assets/css/font-awesome.min.css";
import "swiper/swiper-bundle.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/custom.css";
import "reflect-metadata";
import { AuthProvider } from "../contexts/auth/auth.provider";
import { IntlProvider } from "react-intl";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <IntlProvider locale="en" defaultLocale="en">
        <Component {...pageProps} />
      </IntlProvider>
    </AuthProvider>
  );
}

export default App;
