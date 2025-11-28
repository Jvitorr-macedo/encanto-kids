import InternalLayout from "@/components/InternalLayout";
import Link from "next/link";
import { Users, DollarSign, AlertCircle, PlusCircle, Calendar, FileText, LayoutDashboard } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <InternalLayout title="Painel Gerencial">
      
      {/* --- Ações Rápidas (LINKS ATIVOS) --- */}
      <section className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Link para Lista de Crianças */}
        <Link href="/admin/criancas" className="bg-primary hover:bg-purple-600 text-white p-4 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center justify-center gap-2 font-bold group">
            <Users size={28} className="group-hover:scale-110 transition"/>
            <span className="text-sm">Alunos</span>
        </Link>

        {/* Link para Financeiro */}
        <Link href="/admin/financeiro" className="bg-accent hover:bg-orange-500 text-white p-4 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center justify-center gap-2 font-bold group">
            <DollarSign size={28} className="group-hover:scale-110 transition"/>
            <span className="text-sm">Financeiro</span>
        </Link>

        {/* Link para Visão Geral (Dashboards) */}
        <Link href="/admin/visao-geral" className="bg-secondary hover:brightness-90 text-white p-4 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center justify-center gap-2 font-bold group">
            <LayoutDashboard size={28} className="group-hover:scale-110 transition"/>
            <span className="text-sm">Visão Geral</span>
        </Link>

        {/* Link para Menu Administrativo (Tarefas) */}
        <Link href="/admin/menu" className="bg-gray-700 hover:bg-gray-800 text-white p-4 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center justify-center gap-2 font-bold group">
            <FileText size={28} className="group-hover:scale-110 transition"/>
            <span className="text-sm">Menu / Tarefas</span>
        </Link>
      </section>

      {/* ... (O restante do código dos Cards de KPI e Alertas continua igual) ... */}
       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-card-border flex items-center justify-between">
          <div>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">Crianças Ativas</p>
            <h3 className="text-4xl font-extrabold text-primary mt-1">42</h3>
            <p className="text-xs text-green-500 font-bold mt-1">+3 novos este mês</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-2xl text-primary">
            <Users size={32} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-card-border flex items-center justify-between">
          <div>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">Receita Mensal</p>
            <h3 className="text-3xl font-extrabold text-gray-700 mt-1">R$ 45k</h3>
            <p className="text-xs text-orange-500 font-bold mt-1">R$ 12k pendente</p>
          </div>
          <div className="bg-green-50 p-4 rounded-2xl text-green-600">
            <DollarSign size={32} />
          </div>
        </div>

        <Link href="/notificacoes" className="bg-white p-6 rounded-3xl shadow-sm border border-red-100 flex items-center justify-between hover:bg-red-50 transition cursor-pointer">
          <div>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">Notificações</p>
            <h3 className="text-3xl font-extrabold text-danger mt-1">5</h3>
            <p className="text-xs text-danger/70 font-bold mt-1">Clique para ver</p>
          </div>
          <div className="bg-red-50 p-4 rounded-2xl text-danger">
            <AlertCircle size={32} />
          </div>
        </Link>
      </section>
      
    </InternalLayout>
  );
}