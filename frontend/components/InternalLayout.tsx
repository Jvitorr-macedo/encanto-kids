import Link from "next/link";
import { LogOut, Home, Grid } from "lucide-react";

export default function InternalLayout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    // bg-page vem do seu globals.css
    <div className="min-h-screen bg-page font-sans text-gray-600 pb-20">
      
      {/* Header Fixo */}
      <header className="bg-primary px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/admin/dashboard" className="text-white font-extrabold text-xl tracking-wide flex items-center gap-2 hover:opacity-80">
             <Home size={20}/> Encanto Kids
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-white/80 text-sm hidden md:block">Olá, <strong>Gestor(a)</strong></span>
          <Link href="/">
            <button className="bg-accent hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-sm">
              SAIR <LogOut size={16}/>
            </button>
          </Link>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto p-4 md:p-8 max-w-5xl animate-fade-in-up">
        <h1 className="text-primary text-2xl md:text-3xl font-extrabold text-center mb-8 opacity-90 drop-shadow-sm">
          {title}
        </h1>
        {children}
      </main>
    </div>
  );
}