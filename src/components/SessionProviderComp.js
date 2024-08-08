"use client";
import { SessionProvider } from "next-auth/react";

import React from "react";

const SessionProviderComp = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderComp;
