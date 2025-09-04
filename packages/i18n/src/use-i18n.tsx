"use client";

import { createContext, useContext, type PropsWithChildren } from "react";

export interface I18NImplementation {
  t: (key: string, options?: Record<string, unknown>) => string;
  changeLanguage: (language: string) => void;
}

const I18NContext = createContext(null as unknown as I18NImplementation);

export function I18NProvider({
  children,
  implementation,
}: PropsWithChildren<{ implementation: I18NImplementation }>) {
  return (
    <I18NContext.Provider value={implementation}>
      {children}
    </I18NContext.Provider>
  );
}

export function useI18N() {
  return useContext(I18NContext);
}
