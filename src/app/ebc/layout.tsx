import { Metadata } from "next";
import * as React from "react";

import "../globals.css";

export const metadata: Metadata = {
  title: "Electronic Code Book",
  description: "This is the Electronic Code Book page",
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
