import InternalLayout from "@/components/InternalLayout";
import { FileText, Clock, Calendar, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export default function PerfilCrianca() {
  return (
    <InternalLayout title="Perfil da Criança">
      
      {/* Botão Voltar */}
      <div className="mb-6">
        <Link href="/admin/criancas" className="text-gray-500 hover:text-primary flex items-center gap-2 font-bold transition">
          <ArrowLeft size={20} /> Voltar para lista
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-purple-100 max-w-2xl w-full relative overflow-hidden">
          
          {/* Detalhe visual de fundo */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-50 to-transparent opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Foto da Criança */}
            <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 overflow-hidden bg-gray-200">
               {/* Substitua o src pela foto real ou url */}
               <img 
                 src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=200&auto=format&fit=crop" 
                 alt="Foto da Criança" 
                 className="w-full h-full object-cover"
               />
            </div>

            <h2 className="text-3xl font-extrabold text-primary mb-1">Luna Martins Silva</h2>
            <p className="text-gray-400 font-bold mb-8">4 anos • Turma: Maternal II</p>

            {/* Grid de Informações */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Turno</p>
                <p className="text-gray-800 font-bold flex items-center gap-2">
                  <span className="text-accent">☀️</span> Manhã
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Horário</p>
                <p className="text-gray-800 font-bold flex items-center gap-2">
                  <Clock size={16} className="text-gray-400"/> 07h30 - 12h00
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Pacote</p>
                <p className="text-gray-800 font-bold flex items-center gap-2">
                  <Calendar size={16} className="text-gray-400"/> Mensal
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Status Pagamento</p>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold flex w-fit items-center gap-1">
                  <CheckCircle size={14}/> ATIVO
                </span>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 col-span-1 md:col-span-2">
                 <p className="text-xs text-gray-500 font-bold uppercase mb-1">Saldo de Horas</p>
                 <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 mt-2">
                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: '45%' }}></div>
                 </div>
                 <p className="text-xs text-gray-500 text-right">20 horas restantes</p>
              </div>

            </div>

            {/* Botão Contrato */}
            <button className="bg-[#9B59B6] hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition flex items-center gap-2 w-full md:w-auto justify-center">
               <FileText size={20}/> Visualizar Contrato (PDF)
            </button>

          </div>
        </div>
      </div>
    </InternalLayout>
  );
}