// src/app/contato/page.tsx
export default function Contato() {
    return (
        <div className="max-w-md mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6 text-slate-800">Contato</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                    <input type="email" className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                    <textarea rows={4} className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                </div>
                <button type="button" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 rounded-lg transition-colors">
                    Enviar Mensagem
                </button>
            </form>
        </div>
    );
}