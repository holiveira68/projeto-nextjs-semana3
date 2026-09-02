// src/app/page.tsx
import { dadosFicticios } from "./dados";
import Link from "next/link"; // Import do Next.js para navegação rápida [9, 10]


export default function Home() {
  return (
    <div>
      {/* Banner Inicial da Página */}
      <section className="text-center bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-12 px-4 rounded-2xl mb-12 shadow-md">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Bem-vindo ao Nosso Portal de Vendas e Serviços
        </h1>
        <p className="text-lg text-slate-100 max-w-2xl mx-auto">
          Explore as melhores opções personalizadas feitas especialmente pelos alunos do Ensino Técnico.
        </p>
      </section>

      {/* Grid de Itens */}
      <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">
        Nossas Propostas em Destaque
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dadosFicticios.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow flex flex-col"
          >
            {/* Imagem do Card */}
            <img
              src={item.imagem}
              alt={item.titulo}
              className="w-full h-48 object-cover"
            />

            {/* Conteúdo do Card */}
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-2 block">
                {item.categoria}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.titulo}
              </h3>
              <p className="text-sm text-slate-600 mb-4 flex-grow line-clamp-3">
                {item.descricao}
              </p>

              {/* Informação condicional por tipo de projeto */}
              {item.preco && (
                <div className="text-xl font-extrabold text-slate-900 mb-4">
                  R$ {item.preco.toFixed(2)}
                </div>
              )}
              {item.contato && (
                <div className="text-sm font-semibold text-emerald-600 mb-4">
                  Contato: {item.contato}
                </div>
              )}
              {item.autor && (
                <div className="text-sm italic text-slate-500 mb-4">
                  Publicado por: {item.autor}
                </div>
              )}

              {/* Link para o detalhe (Será desenvolvido na Semana 2) */}
              <Link
                href={`/detalhes/${item.id}`}
                className="block text-center bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}