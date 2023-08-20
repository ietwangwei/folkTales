import Head from "next/head";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};



export default function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Header username="Wei" description="A frontend developer"></Header>
      {children}
    </div>
  );
}
