import InternalLayout from "@/components/InternalLayout";
import Link from "next/link";
import { Search, Filter, ChevronRight } from 'lucide-react';

export default function ListaCriancas() {
  const criancas = [
    { id: 1, nome: "Luna Martins", idade: "4 anos", status: "Ativo", pagto: "Em dia", img: "bg-purple-200" },
    { id: 2, nome: "Pedro Rocha", idade: "2 anos", status: "Pendente", pagto: "Atrasado", img: "bg-blue-200" },
    { id: 3, nome: "Sofia Almeida", idade: "5 anos", status: "Ativo", pagto: "Em dia", img: "bg-pink-200" },
  ];

  return (
    <InternalLayout title="Gestão de Crianças">
      
      {/* Busca e Filtro */}
      <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input type="text" placeholder="Buscar aluno..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"/>
        </div>
        <button className="bg-gray-100 p-2 rounded-xl text-gray-600 hover:bg-gray-200">
           <Filter size={24} />
        </button>
      </div>

      {/* Tabela */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
        <table className="w-full text-left">
            <thead className="bg-purple-50 text-gray-500 text-sm uppercase">
              <tr>
                <th className="p-4">Nome</th>
                <th className="p-4 hidden md:table-cell">Status</th>
                <th className="p-4 hidden md:table-cell">Pagamento</th>
                <th className="p-4 text-center">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {criancas.map((c) => (
                // Envolvemos a linha inteira (ou a célula) em um Link
                <tr key={c.id} className="hover:bg-gray-50 transition cursor-pointer group">
                  <td className="p-4">
                    <Link href="/admin/criancas/perfil" className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${c.img} flex items-center justify-center font-bold text-gray-700`}>
                        {c.nome.charAt(0)}
                        </div>
                        <div>
                        <p className="font-bold text-gray-800 group-hover:text-primary transition">{c.nome}</p>
                        <p className="text-xs text-gray-400 md:hidden">{c.status}</p>
                        </div>
                    </Link>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.pagto === 'Em dia' ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-700'}`}>
                      {c.pagto}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <Link href="/admin/criancas/perfil">
                        <button className="text-primary hover:bg-purple-100 p-2 rounded-full transition">
                        <ChevronRight size={20} />
                        </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </InternalLayout>
  );
}