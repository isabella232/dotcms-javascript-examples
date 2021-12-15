import { LinksFunction, LiveReload, Meta, Outlet, Links } from "remix";

import styles from "./tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

function Document({
  children,
  title = `DotCMS Demo`
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
