import { createContext, useContext, useState, ReactNode } from "react";

type DashContent = "events" | "event-details";

type DashContextType = {
  currentContent: DashContent;
  setCurrentContent: (content: DashContent) => void;
  currentEvent: any;
  setCurrentEvent: (event: any) => void;
};

const DashContext = createContext<DashContextType | undefined>(undefined);

export function DashContentProvider({ children }: { children: ReactNode }) {
  const [currentContent, setCurrentContent] = useState<DashContent>("events");
  const [currentEvent, setCurrentEvent] = useState<string>("");
  return (
    <DashContext.Provider
      value={{
        currentContent,
        setCurrentContent,
        currentEvent,
        setCurrentEvent,
      }}
    >
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
