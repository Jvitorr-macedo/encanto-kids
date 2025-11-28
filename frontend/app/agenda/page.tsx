import InternalLayout from "@/components/InternalLayout";
import { CheckCircle, Utensils, Smile, Music, Paperclip, Send } from 'lucide-react';

export default function Agenda() {
  return (
    <InternalLayout title="Agenda Diária - 24/10/2025">
      <div className="max-w-2xl mx-auto space-y-4">
        
        {/* Card: Presença */}
        <div className="bg-white border border-green-200 rounded-2xl p-1 shadow-sm">
           <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3">
              <CheckCircle className="text-green-500" size={24} />
              <div>
                <p className="font-bold text-green-700 text-lg">Presença Confirmada</p>
                <p className="text-xs text-green-600">Entrada: 07:30 • Saída: 17:00</p>
              </div>
           </div>
        </div>

        {/* Card: Alimentação */}
        <div className="bg-white border border-card-border rounded-2xl p-5 shadow-sm">
           <div className="flex items-center gap-2 mb-2 text-primary font-bold text-lg">
             <Utensils size={20} /> Alimentação
           </div>
           <p className="text-gray-600 ml-7 border-l-2 border-purple-100 pl-3">
             <strong className="block text-gray-800">Almoço:</strong> Sopa de legumes, arroz e frango grelhado.
             <strong className="block text-gray-800 mt-2">Lanche:</strong> Salada de frutas e suco de laranja natural.
           </p>
        </div>

        {/* Card: Comportamento */}
        <div className="bg-white border border-card-border rounded-2xl p-5 shadow-sm">
           <div className="flex items-center gap-2 mb-2 text-primary font-bold text-lg">
             <Smile size={20} /> Comportamento
           </div>
           <p className="text-gray-600 ml-7">
             Brincou bastante e interagiu com os colegas. Tirou uma soneca tranquila de 45min após o almoço.
           </p>
        </div>

        {/* Card: Atividades */}
        <div className="bg-white border border-card-border rounded-2xl p-5 shadow-sm">
           <div className="flex items-center gap-2 mb-2 text-primary font-bold text-lg">
             <Music size={20} /> Atividades
           </div>
           <div className="ml-7 flex gap-2 flex-wrap">
              <span className="bg-purple-100 text-primary text-xs font-bold px-3 py-1 rounded-full">Musicalização</span>
              <span className="bg-secondary/20 text-secondary-dark text-xs font-bold px-3 py-1 rounded-full text-black">Pintura a dedo</span>
           </div>
        </div>

        {/* Galeria de Fotos */}
        <div className="bg-white border border-card-border rounded-2xl p-5 shadow-sm">
           <h3 className="text-primary font-bold mb-3 flex items-center gap-2">
             <Paperclip size={20}/> Fotos do Dia
           </h3>
           <div className="flex gap-3 overflow-x-auto pb-2">
             {[1, 2, 3].map((item) => (
               <div key={item} className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-xl overflow-hidden relative border-2 border-white shadow-md">
                  {/* Placeholder cinza simulando foto */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs">Foto {item}</div>
               </div>
             ))}
           </div>
        </div>

        {/* Input Pais */}
        <div className="mt-8 bg-white p-4 rounded-3xl shadow-lg border border-gray-100">
          <label className="text-gray-700 font-bold mb-2 block ml-1">Recadinho para a Tia:</label>
          <div className="flex gap-2">
            <input 
              type="text"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Ex: Amanhã a vovó vem buscar..."
            />
            <button className="bg-primary text-white p-3 rounded-xl hover:bg-purple-600 transition">
              <Send size={20} />
            </button>
          </div>
        </div>

      </div>
    </InternalLayout>
  );
}