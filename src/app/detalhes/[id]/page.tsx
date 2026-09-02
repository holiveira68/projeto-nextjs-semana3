import { dadosFicticios } from "../../dados";
import Link from "next/link";
import SeletorHorarios from "../../components/SeletorHorarios";


interface PageProps {
    params: Promise<{ id: string }>;


}
export default async function DetalhePrestador({ params }: PageProps) {
    const { id } = await params;
    const prestador = dadosFicticios.find((ItemDados) => ItemDados.id === id);

    if (!prestador) {
        return <div className="p-8 text-center">Prestador não encontrado!</div>;

    }
    const mensagemAgendamento = `Olá! Vi o seu perfil de *${prestador.titulo}* no Guia
Comercial e gostaria de agendar uma consulta/serviço.`;
    const linkContato = `https://wa.me/${prestador.contato?.replace(/\D/g,
        '')}?text=${encodeURIComponent(mensagemAgendamento)}`;
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md border
border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src={prestador.imagem} alt={prestador.titulo}
                    className="rounded-xl w-full h-80 object-cover" />
                <div className="flex flex-col justify-between">
                    <div>
                        <span className="text-xs
text-indigo-600 uppercase font-bold tracking-wider">{prestador.categoria}</span>
                        <h1 className="text-3xl
font-extrabold text-slate-900 mt-2">{prestador.titulo}</h1>
                        <p className="text-slate-600
mt-4 leading-relaxed">{prestador.descricao}</p>
                        <div className="text-sm
text-slate-500 mt-6">Número de Contato cadastrado: <b>{prestador.contato}</b></div>
                    </div>
                    <Link href={linkContato} target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 block
                text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors
shadow-md">
                        Falar com Prestador / Agendar
                    </Link>
                </div>
            </div>
            <SeletorHorarios prestadorNome={prestador.titulo} />
        </div >
    );
}

 
import { Metadata } from "next";
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = dadosFicticios.find((p) => p.id === id);
  
  return {
    title: item ? `${item.titulo} | Detalhes` : "Item Não Encontrado",
    description: item ? item.descricao : "Explore nossos serviços e produtos técnicos.",
    openGraph: {
      title: item?.titulo,
      description: item?.descricao,
      images: [{ url: item?.imagem || "" }],
    },
  };
}