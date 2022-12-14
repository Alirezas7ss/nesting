import './globals.css'
import Head from "next/head";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html >
      <Head>
        <title>SoltanianPortfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <head></head>
      <body>{children}</body>
    </html>
  )
}
