import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "@/styles/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <SessionProvider>
  <ChakraProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </ChakraProvider>
 </SessionProvider>  
  );
}
