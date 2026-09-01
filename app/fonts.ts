import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';

/**
 * Space Grotesk for display, Plus Jakarta Sans for text.
 *
 * Space Grotesk's slightly irregular letterforms keep the strict modular grid
 * from reading as corporate; Jakarta is a neutral, highly legible companion for
 * running copy.
 *
 * Loaded through next/font, which self-hosts the files and removes the
 * render-blocking request to fonts.googleapis.com.
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const fontVariables = `${spaceGrotesk.variable} ${jakarta.variable}`;
