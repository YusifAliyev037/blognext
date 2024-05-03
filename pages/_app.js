import { store } from "@/redux/store";
import "@/styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return(
  <ChakraProvider>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ProgressBar height="4px"
        color="#fffd00"/>
    </QueryClientProvider>
    </Provider>
  </ChakraProvider>
)}
