// src/app/components/Header.tsx
import Link from 'next/link'; // Importação oficial do Next.js para links [9, 10]
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-slate-900 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo / Nome do Projeto */}
                <Link href="/" className="inline-flex items-center text-xl font-bold tracking-wider hover:text-cyan-400 transition-colors">
                    <Image src="/LogoBrabus.png" alt="Logo" width={100} height={100} /> BRABUS BARBER PROJECT
                    
                </Link>

                {/* Links de Navegação */}
                <nav className="flex gap-6">
                    <Link href="/" className="hover:text-cyan-400 transition-colors">
                        Início
                    </Link>
                    <Link href="/sobre" className="hover:text-cyan-400 transition-colors">
                        Quem Somos
                    </Link>
                    <Link href="/contato" className="hover:text-cyan-400 transition-colors">
                        Contato
                    </Link>
                </nav>
            </div>
        </header>
    );
}

