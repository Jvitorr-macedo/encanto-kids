import InternalLayout from "@/components/InternalLayout";
import Link from "next/link"; // Importante
import { 
  AlertCircle, FileText, CheckSquare, PlusCircle, 
  DollarSign, Calendar, Bell, ChevronRight 
} from 'lucide-react';

export default function MenuAdmin() {
  return (
    <InternalLayout title="Menu Administrativo">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ... (COLUNA 1: Lembretes - Código igual ao anterior) ... */}
        <div className="bg-purple-50/50 rounded-3xl p-6 border border-purple-100">
          <h3 className="text-primary font-extrabold text-xl mb-6 text-center">Lembretes</h3>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-card-border mb-4 relative overflow-hidden">
             {/* ... conteúdo do card ... */}
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 border-2 border-white shadow-sm overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luna" alt="Avatar" />
               </div>
               <div>
                 <h4 className="font-bold text-gray-800 text-sm">Luna Martins Silva</h4>
                 <p className="text-xs text-gray-500"><strong>Turno:</strong> Manhã</p>
               </div>
            </div>
            <div className="mt-3 bg-orange-100 text-orange-600 px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-orange-200">
               <AlertCircle size={16} /> Documento pendente
            </div>
          </div>
        </div>

        {/* ... (COLUNA 2: Tarefas - Código igual ao anterior) ... */}
        <div className="bg-purple-50/50 rounded-3xl p-6 border border-purple-100">
           <h3 className="text-primary font-extrabold text-xl mb-6 text-center">Tarefas Administrativas</h3>
           <div className="bg-white p-4 rounded-2xl shadow-sm border border-card-border">
              {/* ... conteúdo do card ... */}
              <div className="flex gap-4 mb-4">
                 <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 border-2 border-white shadow-sm overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia" alt="Avatar" />
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-800 text-sm">Sofia Luz</h4>
                    <p className="text-xs text-gray-500"><strong>Turno:</strong> Tarde</p>
                 </div>
              </div>
              <div className="space-y-2">
                 <button className="w-full bg-accent text-white py-2 rounded-lg text-xs font-bold hover:bg-orange-600 transition flex justify-center items-center gap-2">
                    <FileText size={14}/> Enviar boleto
                 </button>
              </div>
           </div>
        </div>

        {/* COLUNA 3: Ações Rápidas (COM LINKS AGORA) */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg">
           <h3 className="text-primary font-extrabold text-xl mb-6 text-center">Ações Rápidas</h3>
           
           <div className="space-y-4">
              <Link href="/admin/criancas" className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-xl shadow-md transition transform hover:-translate-y-1 flex items-center justify-between">
                 <span className="flex items-center gap-3"><PlusCircle size={20}/> Gerenciar Crianças</span>
                 <ChevronRight size={18} className="opacity-70"/>
              </Link>

              <Link href="/admin/financeiro" className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-xl shadow-md transition transform hover:-translate-y-1 flex items-center justify-between">
                 <span className="flex items-center gap-3"><DollarSign size={20}/> Relatórios Financeiros</span>
                 <ChevronRight size={18} className="opacity-70"/>
              </Link>

              <Link href="/agenda" className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-xl shadow-md transition transform hover:-translate-y-1 flex items-center justify-between">
                 <span className="flex items-center gap-3"><Calendar size={20}/> Ver Agenda (Pais)</span>
                 <ChevronRight size={18} className="opacity-70"/>
              </Link>

              <Link href="/notificacoes" className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-xl shadow-md transition transform hover:-translate-y-1 flex items-center justify-between">
                 <span className="flex items-center gap-3"><Bell size={20}/> Ver Notificações</span>
                 <ChevronRight size={18} className="opacity-70"/>
              </Link>
           </div>
        </div>

      </div>
    </InternalLayout>
  );
}