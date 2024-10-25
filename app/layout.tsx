'use client'

import "./globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>DapDap TON Connect Demo</title>
      </head>
      <body className=" bg-black">
      <TonConnectUIProvider manifestUrl="https://indigo-giant-barnacle-872.mypinata.cloud/ipfs/QmbQiEqpowNuQHPDSXZQcakoiWTb3YDZb76VQC8mRLKqW7">
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}