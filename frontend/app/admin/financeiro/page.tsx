import InternalLayout from "@/components/InternalLayout";
import { Download, CreditCard, QrCode, TrendingUp, AlertCircle } from 'lucide-react';

export default function Financeiro() {
  return (
    <InternalLayout title="Gestão Financeira">
      
      {/* Resumo do Mês */}
      <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-card-border text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
         
         <h2 className="text-gray-500 text-sm font-bold uppercase mb-2 tracking-wide">Total Recebido (Outubro)</h2>
         <p className="text-4xl md:text-5xl font-extrabold text-green-600 my-4">R$ 32.450,00</p>
         
         <div className="flex justify-center gap-4 mt-6">
            <button className="flex items-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-6 py-3 rounded-xl font-bold transition">
               <TrendingUp size={18} /> Ver projeção
            </button>
            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold transition">
               <Download size={18} /> Exportar
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Lista de Últimos Pagamentos */}
        <div>
          <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
            <QrCode size={20} className="text-primary"/> Últimos Recebimentos
          </h3>
          <div className="space-y-3">
             {[
               { nome: "Luna Martins", valor: "850,00", data: "Hoje, 14:30", metodo: "PIX" },
               { nome: "Sofia Luz", valor: "1.200,00", data: "Ontem, 09:15", metodo: "Boleto" },
               { nome: "Theo Oliveira", valor: "450,00", data: "22/10, 16:40", metodo: "Cartão" },
             ].map((item, i) => (
               <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex justify-between items-center shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-4">
                     <div className="bg-green-100 text-green-600 p-3 rounded-full font-bold text-xs">
                        {item.metodo}
                     </div>
                     <div>
                        <p className="font-bold text-gray-800 text-sm">{item.nome}</p>
                        <p className="text-xs text-gray-400">{item.data}</p>
                     </div>
                  </div>
                  <span className="font-bold text-green-600 text-sm">+ R$ {item.valor}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Lista de Pendências */}
        <div>
          <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
            <AlertCircle size={20} className="text-red-500"/> Pendências
          </h3>
          <div className="space-y-3">
             {[
               { nome: "Pedro Rocha", valor: "1.500,00", vencimento: "Venceu há 5 dias" },
               { nome: "Ana Clara", valor: "850,00", vencimento: "Vence hoje" },
             ].map((item, i) => (
               <div key={i} className="bg-white p-4 rounded-2xl border border-red-100 flex justify-between items-center shadow-sm opacity-90">
                  <div className="flex items-center gap-4">
                     <div className="bg-red-50 text-red-500 p-3 rounded-full">
                        <AlertCircle size={20} />
                     </div>
                     <div>
                        <p className="font-bold text-gray-800 text-sm">{item.nome}</p>
                        <p className="text-xs text-red-500 font-bold">{item.vencimento}</p>
                     </div>
                  </div>
                  <button className="text-xs bg-white border border-red-200 text-red-500 px-3 py-1 rounded-lg font-bold hover:bg-red-50">
                    Cobrar
                  </button>
               </div>
             ))}
          </div>
        </div>

      </div>
    </InternalLayout>
  );
}