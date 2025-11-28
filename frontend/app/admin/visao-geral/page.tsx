import InternalLayout from "@/components/InternalLayout";
import { UserPlus, UserX, Users } from 'lucide-react';

export default function VisaoGeral() {
  return (
    <InternalLayout title="Visão Geral das Crianças">
      
      {/* Botão de Destaque Superior */}
      <div className="flex justify-end mb-6">
        <div className="bg-green-500 text-white px-6 py-2 rounded-full font-bold shadow-md flex items-center gap-2">
          <Users size={20} /> 50 Crianças ativas
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Coluna 1: Novos Cadastros */}
        <div className="space-y-4">
          <h3 className="text-purple-600 font-bold text-lg bg-purple-50 p-3 rounded-xl border border-purple-100 text-center">
            Novos cadastros
          </h3>
          
          {/* Card Criança Nova */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-l-4 border-l-purple-400 border-gray-100 flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
                <span className="text-xl">👧</span>
             </div>
             <div>
                <p className="font-bold text-gray-800">Luna Martins Silva</p>
                <p className="text-xs text-gray-500"><strong>Turno:</strong> Manhã</p>
                <p className="text-xs text-gray-500"><strong>Pacote:</strong> Mensal</p>
             </div>
          </div>
        </div>

        {/* Coluna 2: Faltas do Dia */}
        <div className="space-y-4">
          <h3 className="text-red-500 font-bold text-lg bg-red-50 p-3 rounded-xl border border-red-100 text-center">
             Faltas do dia
          </h3>

          {/* Card Falta */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-l-4 border-l-red-400 border-gray-100 flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center overflow-hidden">
                <span className="text-xl">👦</span>
             </div>
             <div>
                <p className="font-bold text-gray-800">Pedro Henrique</p>
                <p className="text-xs text-gray-500"><strong>Turno:</strong> Manhã</p>
                <p className="text-xs text-red-500 font-bold mt-1">Justificativa: N/A</p>
             </div>
          </div>
        </div>

        {/* Coluna 3: Gráfico de Pacotes */}
        <div className="bg-white p-6 rounded-3xl shadow-md border border-card-border flex flex-col items-center">
           <h3 className="text-primary font-bold text-lg mb-6">Pacotes Ativos</h3>
           
           {/* Gráfico Pizza CSS Puro */}
           <div className="relative w-48 h-48 rounded-full shadow-inner mb-6"
                style={{
                  background: `conic-gradient(
                    #A55EEA 0% 40%, 
                    #4BCFFA 40% 70%, 
                    #FFA502 70% 100%
                  )`
                }}>
              {/* Buraco do meio (Doughnut chart) */}
              <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                 <span className="font-bold text-gray-400 text-xs text-center">Distribuição<br/>de Planos</span>
              </div>
           </div>

           {/* Legenda */}
           <div className="w-full space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                 <span className="flex items-center gap-2"><div className="w-3 h-3 bg-[#A55EEA] rounded-full"></div> Integral</span>
                 <span className="font-bold">40%</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                 <span className="flex items-center gap-2"><div className="w-3 h-3 bg-[#4BCFFA] rounded-full"></div> Avulso</span>
                 <span className="font-bold">30%</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                 <span className="flex items-center gap-2"><div className="w-3 h-3 bg-[#FFA502] rounded-full"></div> Meio Período</span>
                 <span className="font-bold">30%</span>
              </div>
           </div>
        </div>

      </div>
    </InternalLayout>
  );
}