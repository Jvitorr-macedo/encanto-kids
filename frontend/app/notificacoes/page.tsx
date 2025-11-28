import InternalLayout from "@/components/InternalLayout";
import Link from "next/link";
import { Bell, Clock, AlertTriangle, XCircle, MessageCircle, CheckCircle, ArrowLeft } from 'lucide-react';

export default function Notificacoes() {
  return (
    <InternalLayout title="Notificações e Avisos">
      
      <div className="max-w-2xl mx-auto space-y-4">
        
        {/* Botão Voltar (Adicionado para facilitar a navegação) */}
        <div className="mb-4">
            <Link href="/admin/dashboard" className="text-gray-500 hover:text-primary flex items-center gap-2 font-bold transition text-sm">
            <ArrowLeft size={18} /> Voltar para o Painel
            </Link>
        </div>
        
        {/* Aviso Geral (Roxo) */}
        <div className="bg-white border-l-4 border-l-primary rounded-xl p-4 shadow-sm flex items-start gap-3 animate-fade-in-up">
           <div className="bg-purple-50 p-2 rounded-full text-primary mt-1">
             <Bell size={20} />
           </div>
           <div>
             <h4 className="font-bold text-gray-800">Dia do brinquedo amanhã!</h4>
             <p className="text-sm text-gray-600">Traga seu brinquedo favorito. Lembre-se de identificar com o nome.</p>
             <span className="text-[10px] text-gray-400 mt-1 block">Há 2 horas</span>
           </div>
        </div>

        {/* Lembrete Financeiro (Laranja) */}
        <div className="bg-white border-l-4 border-l-accent rounded-xl p-4 shadow-sm flex items-start gap-3 animate-fade-in-up delay-75">
           <div className="bg-orange-50 p-2 rounded-full text-accent mt-1">
             <Clock size={20} />
           </div>
           <div>
             <h4 className="font-bold text-gray-800">Lembrete: Pagamento</h4>
             <p className="text-sm text-gray-600">O pagamento de outubro vence em 2 dias. Evite multas.</p>
             <Link href="/admin/financeiro">
                <button className="mt-2 text-xs bg-accent text-white px-3 py-1 rounded-md font-bold hover:bg-orange-600 transition">
                Pagar Agora
                </button>
             </Link>
           </div>
        </div>

        {/* Reunião (Roxo) */}
        <div className="bg-white border-l-4 border-l-primary rounded-xl p-4 shadow-sm flex items-start gap-3 animate-fade-in-up delay-100">
           <div className="bg-purple-50 p-2 rounded-full text-primary mt-1">
             <Bell size={20} />
           </div>
           <div>
             <h4 className="font-bold text-gray-800">Reunião de pais</h4>
             <p className="text-sm text-gray-600">No dia 30/10 às 18h. Contamos com sua presença.</p>
           </div>
        </div>

        {/* Pendência (Vermelho) */}
        <div className="bg-white border-l-4 border-l-red-500 rounded-xl p-4 shadow-sm flex items-start gap-3 opacity-75 animate-fade-in-up delay-150">
           <div className="bg-red-50 p-2 rounded-full text-red-500 mt-1">
             <XCircle size={20} />
           </div>
           <div>
             <h4 className="font-bold text-gray-800 line-through">Pagamento de setembro: Pendente</h4>
             <p className="text-sm text-gray-500">Regularizado em 05/10.</p>
           </div>
        </div>

        {/* Pagamento Realizado (Verde) */}
        <div className="bg-white border-l-4 border-l-green-500 rounded-xl p-4 shadow-sm flex items-start gap-3 animate-fade-in-up delay-200">
           <div className="bg-green-50 p-2 rounded-full text-green-500 mt-1">
             <CheckCircle size={20} />
           </div>
           <div>
             <h4 className="font-bold text-gray-800">Pagamento de setembro: Pago</h4>
             <p className="text-sm text-gray-600">Obrigado!</p>
           </div>
        </div>

        {/* Botão de Ação Inferior */}
        <div className="flex justify-center mt-8 pb-8">
           <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition flex items-center gap-2 transform hover:-translate-y-1">
              <MessageCircle size={20} /> Falar com a equipe
           </button>
        </div>

      </div>

    </InternalLayout>
  );
}