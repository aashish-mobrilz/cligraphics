import React, { createContext, useContext, useState, useEffect } from 'react';
import { DesignDirection, DESIGN_DIRECTIONS, ThemeConfig } from '../types/theme';

interface DesignThemeContextType {
  direction: DesignDirection;
  setDirection: (direction: DesignDirection) => void;
  toggleDirection: () => void;
  config: ThemeConfig;
  isOptionA: boolean;
  isOptionB: boolean;
}

const DesignThemeContext = createContext<DesignThemeContextType | undefined>(undefined);

export const DesignThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [direction, setDirectionState] = useState<DesignDirection>(() => {
    const saved = localStorage.getItem('cligraphics_design_direction');
    return (saved === 'option-b' ? 'option-b' : 'option-a') as DesignDirection;
  });

  useEffect(() => {
    localStorage.setItem('cligraphics_design_direction', direction);
    // Add data attribute to root for styling hooks if needed
    document.documentElement.setAttribute('data-theme-direction', direction);
  }, [direction]);

  const setDirection = (newDir: DesignDirection) => {
    setDirectionState(newDir);
  };

  const toggleDirection = () => {
    setDirectionState((prev) => (prev === 'option-a' ? 'option-b' : 'option-a'));
  };

  const config = DESIGN_DIRECTIONS[direction];
  const isOptionA = direction === 'option-a';
  const isOptionB = direction === 'option-b';

  return (
    <DesignThemeContext.Provider
      value={{
        direction,
        setDirection,
        toggleDirection,
        config,
        isOptionA,
        isOptionB,
      }}
    >
      {children}
    </DesignThemeContext.Provider>
  );
};

export const useDesignTheme = (): DesignThemeContextType => {
  const context = useContext(DesignThemeContext);
  if (!context) {
    throw new Error('useDesignTheme must be used within a DesignThemeProvider');
  }
  return context;
};

