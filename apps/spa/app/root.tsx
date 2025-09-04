import { Outlet, Scripts } from "react-router";
import { AppI18NProvider } from "./i18n/setup";

export default function App() {
  return (
    <html lang="en-US">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AppI18NProvider>
          <Outlet />
        </AppI18NProvider>
        <Scripts />
      </body>
    </html>
  );
}
