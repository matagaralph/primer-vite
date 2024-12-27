import {
  BaseStyles,
  ThemeProvider as PrimerProvider,
  theme,
} from '@primer/react';
import deepmerge from 'deepmerge';
import { type ReactNode } from 'react';

const customTheme = deepmerge(theme, {
  fonts: {
    normal: 'Inter-var,InterVariable, Inter, sans-serif',
  },
});

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <PrimerProvider theme={customTheme} preventSSRMismatch>
      <BaseStyles>{children}</BaseStyles>
    </PrimerProvider>
  );
}
