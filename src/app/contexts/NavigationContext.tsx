import { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  isMainNavDropdownOpen: boolean;
  setIsMainNavDropdownOpen: (isOpen: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isMainNavDropdownOpen, setIsMainNavDropdownOpen] = useState(false);

  return (
    <NavigationContext.Provider value={{ isMainNavDropdownOpen, setIsMainNavDropdownOpen }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
