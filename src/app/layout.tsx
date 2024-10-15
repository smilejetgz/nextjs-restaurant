import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/features/ui/components/Header';
import Footer from '@/features/ui/components/Footer';
import { ThemeProvider } from '@/features/ui/components/ThemeProvider';
import ClientProviders from '@/features/shared/components/ClientProviders';
import { Toaster } from '@/features/shadcn/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col">
            <ClientProviders>
              <Header />
              <main className="flex flex-1 flex-col gap-4 bg-stone-200 p-4 dark:bg-stone-700 md:gap-8 md:p-10">
                {children}
              </main>
              <Footer></Footer>
            </ClientProviders>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
