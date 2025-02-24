"use client";
import { SessionProvider } from "next-auth/react";

export default function Layout({
  children,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}