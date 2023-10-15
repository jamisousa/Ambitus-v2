import { createContext, useContext, useState, ReactNode } from "react";

type DashContent = "events" | "event-details";

interface DashContextType {
  currentContent: DashContent;
  setCurrentContent: (theme: DashContent) => void;
}

const DashContext = createContext<DashContextType | undefined>(undefined);

export function DashContentProvider({ children }: { children: ReactNode }) {
  const [currentContent, setCurrentContent] = useState<DashContent>("events");

  return (
    <DashContext.Provider value={{ currentContent, setCurrentContent }}>
      {children}
    </DashContext.Provider>
  );
}

export function getDashContent() {
  const context = useContext(DashContext);
  if (!context) {
    throw new Error("Erro ao carregar conteúdo.");
  }
  return context;
}
