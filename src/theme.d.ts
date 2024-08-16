import { Palette, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    primaryCustom: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
    };
    secondaryCustom: {
      100: string;
      200: string;
      300: string;
      400: string;
    };
  }

  interface PaletteOptions {
    primaryCustom?: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
    };
    secondaryCustom?: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
    };
  }
}
