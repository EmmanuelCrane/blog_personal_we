'use client'
import { useState } from 'react'
import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core';

import Navigation from "@/components/globals/Navigation";
import FooterSocial from '@/components/globals/Footer';
import ButtonTheme from '@/components/globals/ButtonTheme';
import ButtonAffix from '@/components/globals/ButtonAffix';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toogleColorSchema = ( value?: ColorScheme ) => setColorScheme( value || ( colorScheme === 'dark' ? 'light' : 'dark' ) );

  return (
    <html lang="en">
      <body>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toogleColorSchema}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ colorScheme }}
          >
            <AppShell
              header={
                <Navigation links={[
                  {
                    link: "/",
                    label: "Home"
                  },
                  {
                    link: "/playlist",
                    label: "Videos"
                  },
                  {
                    link: "/blog",
                    label: "Articulos"
                  },
                ]}>
                  <ButtonTheme/>
                </Navigation>
              }
              footer={
                <FooterSocial />
              }
            >
              {children}
              <ButtonAffix />
            </AppShell>
          </MantineProvider>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
/**
 * pnpm install @mantine/core @mantine/hooks @mantine/nprogress @mantine/tiptap @tabler/icons-react @tiptap/react @tiptap/extension-link @tiptap/starter-kit @mantine/prism @mantine/notifications @mantine/form @mantine/next @emotion/server @emotion/react
 */