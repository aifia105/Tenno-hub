"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { JSX, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const ReduxProviders = ({ children }: Props): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};
