import {
  QueryClientProvider,
  QueryClient,
  useIsFetching,
} from "@tanstack/react-query";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { isDev } from "@constants/env";
import ms from "ms";
import { Loading } from "@shared/components/Loading";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: ms("3s"),
    },
  },
});

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      <QueryClientWrapper>{children}</QueryClientWrapper>
      {isDev ? <ReactQueryDevtools /> : null}
    </QueryClientProvider>
  );
}

function QueryClientWrapper({ children }: { children: ReactNode }) {
  const totalFetching = useIsFetching();
  const shouldShowLoading = totalFetching > 0;

  return (
    <>
      <Loading visible={shouldShowLoading} />
      {children}
    </>
  );
}
