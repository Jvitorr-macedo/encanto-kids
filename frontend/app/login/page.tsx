"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { User, Lock, ArrowRight, ShieldCheck, Baby, ArrowLeft, AlertCircle } from "lucide-react";
import { validarCPF } from "@/utils/validations"; // Importando a validação

export default function Login() {
  const [step, setStep] = useState<'form' | 'selection'>('form');
  const [cpf, setCpf] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    // ATIVIDADE 7: TESTE E VALIDAÇÃO DE INPUT
    if (!validarCPF(cpf)) {
      setErro("CPF inválido! Por favor verifique os dígitos.");
      return; 
    }

    setStep('selection');
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans">
      
      {/* LADO ESQUERDO */}
      <div className="md:w-1/2 bg-secondary flex flex-col items-center justify-center p-10 text-white text-center relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-white p-4 rounded-full mb-8 shadow-xl w-52 h-52 flex items-center justify-center animate-bounce-slow">
            <Image src="/logo.png" alt="Logo Encanto Kids" width={180} height={180} className="object-contain" priority />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">Encanto Kids</h1>
          <p className="text-lg md:text-xl max-w-md font-medium opacity-90 leading-relaxed">
            Acesse sua conta e acompanhe tudo sobre o hotelzinho do seu pequeno.
          </p>
        </div>
      </div>

      {/* LADO DIREITO */}
      <div className="md:w-1/2 bg-[#9B59B6] flex items-center justify-center p-6 md:p-12 relative">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-md shadow-2xl transition-all duration-500">
          
          {step === 'form' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-700">Bem-vindo(a)!</h2>
                <p className="text-gray-400 mt-2">Insira seus dados para continuar.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2 ml-1">CPF</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-4 text-gray-400" size={20} />
                    <input 
                      type="text" 
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      placeholder="000.000.000-00" 
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl outline-none transition-all ${erro ? 'border-red-500 focus:border-red-500' : 'border-gray-100 focus:border-primary'}`}
                    />
                  </div>
                  {/* Exibição de erro de validação */}
                  {erro && (
                    <div className="flex items-center gap-1 text-red-500 text-xs mt-2 font-bold animate-pulse">
                      <AlertCircle size={12} /> {erro}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-2 ml-1">SENHA</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
                    <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-primary focus:bg-white outline-none transition-all"/>
                  </div>
                </div>

                <button type="submit" className="w-full bg-accent hover:bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer">
                  ENTRAR AGORA <ArrowRight size={20} />
                </button>
              </form>
            </div>
          )}

          {step === 'selection' && (
            <div className="animate-fade-in-up">
              <button onClick={() => setStep('form')} className="mb-6 text-gray-400 hover:text-primary flex items-center gap-1 text-sm font-bold">
                <ArrowLeft size={16} /> Voltar
              </button>
              <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Quem é você?</h2>
              <div className="space-y-4">
                <Link href="/admin/dashboard" className="block w-full">
                  <div className="p-4 border-2 border-gray-100 rounded-2xl hover:border-primary hover:bg-purple-50 transition flex items-center gap-4 group">
                    <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition"><ShieldCheck size={28} /></div>
                    <div className="text-left"><h3 className="font-bold text-gray-800">Gestão Escolar</h3><p className="text-xs text-gray-500">Acesso administrativo</p></div>
                  </div>
                </Link>
                <Link href="/agenda" className="block w-full">
                  <div className="p-4 border-2 border-gray-100 rounded-2xl hover:border-accent hover:bg-orange-50 transition flex items-center gap-4 group">
                    <div className="bg-accent/10 p-3 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition"><Baby size={28} /></div>
                    <div className="text-left"><h3 className="font-bold text-gray-800">Responsável</h3><p className="text-xs text-gray-500">Ver agenda e avisos</p></div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}