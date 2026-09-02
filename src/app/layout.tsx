// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header"; // Importando o cabeçalho criado [7]

export const metadata: Metadata = {
  title: "Nosso Portal Técnico em Next.js",
  description: "Trabalho prático desenvolvido na disciplina de Front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 text-slate-950 flex flex-col min-h-screen">
        {/* Cabeçalho fixo em todas as páginas */}
        <Header />
        
        {/* Conteúdo principal dinâmico das páginas */}
        <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
          {children}
        </main>

        {/* Rodapé fixo em todas as páginas */}
        <footer className="bg-slate-900 text-slate-400 text-center py-6 border-t border-slate-800">
          <p className="text-sm">
            © {new Date().getFullYear()} - Curso Técnico em Informática. Desenvolvido em Sala de Aula.
          </p>
        </footer>
      </body>
    </html>
  );
}