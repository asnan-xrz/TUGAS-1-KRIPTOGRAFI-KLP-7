import { Metadata } from "next";
import * as React from "react";

import "../globals.css";

export const metadata: Metadata = {
  title: "Cipher Block Chaining",
  description: "This is the Cipher Block Chaining page",
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
