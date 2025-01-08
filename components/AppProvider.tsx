import {
  BaseStyles,
  ThemeProvider as PrimerProvider,
  theme,
} from '@primer/react';
import deepmerge from 'deepmerge';
import { type ReactNode } from 'react';

type Theme = typeof theme;

const customTheme = deepmerge<Theme>(theme, {
  fonts: {
    normal: 'Inter-var,InterVariable, Inter, sans-serif',
    mono: '',
  },
});

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <PrimerProvider colorMode='light' theme={customTheme} preventSSRMismatch>
      <BaseStyles>{children}</BaseStyles>
    </PrimerProvider>
  );
}
