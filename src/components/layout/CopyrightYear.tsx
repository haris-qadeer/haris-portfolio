"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => undefined;
}

function getYear() {
  return String(new Date().getFullYear());
}

function getServerYear() {
  return "";
}

export function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);
  return <span suppressHydrationWarning>{year}</span>;
}
