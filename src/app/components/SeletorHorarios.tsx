"use client";

import { useState } from "react";

interface SeletorHorariosProps { prestadorNome: string; }

export default function SeletorHorarios({ prestadorNome }: SeletorHorariosProps) {
    const horariosDisponiveis = ["09:00", "10:30", "14:00", "15:30", "17:00"];
    const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);

    return (
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6">
            <h4 className="text-md font-bold text-slate-800 mb-3">Agendar com {prestadorNome}</h4>
            <p className="text-xs text-slate-500 mb-4">Selecione um dos horários disponíveis abaixo para agendamento:</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {horariosDisponiveis.map((hora) => (
                    <button key={hora}
                        onClick={() => setHorarioSelecionado(hora)}
                        className={`py-2 px-4 rounded-lg font-bold text-sm transition-all ${horarioSelecionado === hora ?
                            "bg-cyan-500 text-white shadow-md scale-105" :
                            "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"}`} > {hora}
                    </button>))}
            </div> {horarioSelecionado && (<p className="text-sm font-semibold text-emerald-600 flex items-center gap-1 animate-pulse">
                Você selecionou o horário das {horarioSelecionado} para o seu atendimento! </p>)}
        </div>
    );
}