

export default function LoadingDetalhes() {
    return (<div className="max-w-4xl mx-auto py-12 px-4 animate-pulse">
        {/* Esqueleto do Banner */}
        <div className="h-64 bg-slate-200 rounded-2xl mb-8 w-full">
        </div>
        {/* Esqueleto do Título */}
        <div className="h-8 bg-slate-300 rounded mb-4 w-2/3">
        </div>
        {/* Esqueleto do Texto */}
        <div className="space-y-3"> <div className="h-4 bg-slate-200 rounded w-full">
        </div>
            <div className="h-4 bg-slate-200 rounded w-5/6">
            </div>
            <div className="h-4 bg-slate-200 rounded w-4/5">
            </div>
        </div>
        {/*Esqueleto do Botão */}
        <div className="h-12 bg-slate-300 rounded-lg mt-8 w-48">
        </div>
    </div>
    );
}