import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TrainingProvider } from '@/lib/context/training-context';
import { UserProvider } from '@/lib/context/user-context';
import { AppNav } from '@/components/app-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Inicial — Treinamento Jurídico',
  description: 'Plataforma de treinamento para redação jurídica. Evolua sua escrita de peças processuais.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <UserProvider>
          <TrainingProvider>
            <AppNav />
            {children}
          </TrainingProvider>
        </UserProvider>
      </body>
    </html>
  );
}
