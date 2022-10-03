import "^styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { BoundryProvider } from "^views/Errors";
import { QUERY_CONFIG } from "^services/constant";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient(QUERY_CONFIG));
  return (
    <BoundryProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </BoundryProvider>
  );
}

export default MyApp;
