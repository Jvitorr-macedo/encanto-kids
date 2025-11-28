export interface Responsavel {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
}

export interface Crianca {
  id: number;
  nome: string;
  idade: number;
  responsavelId: number; // Chave estrangeira simulada
  foto: string;
  turno: 'Manhã' | 'Tarde' | 'Integral';
  pacote: 'Mensal' | 'Avulso';
  status: 'Ativo' | 'Inativo';
}

export interface Financeiro {
  id: number;
  criancaId: number; // Chave estrangeira simulada
  mesReferencia: string;
  valor: number;
  status: 'Pago' | 'Pendente' | 'Atrasado';
  vencimento: string;
  metodo?: string;
}

// DADOS MOCKADOS 

export const responsaveis: Responsavel[] = [
  { id: 1, nome: "Ana Martins", cpf: "123.456.789-00", telefone: "(83) 99999-9999", email: "ana@email.com" },
  { id: 2, nome: "Carlos Rocha", cpf: "111.222.333-44", telefone: "(83) 98888-8888", email: "carlos@email.com" },
];

export const criancas: Crianca[] = [
  { id: 1, nome: "Luna Martins Silva", idade: 4, responsavelId: 1, turno: 'Manhã', pacote: 'Mensal', status: 'Ativo', foto: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=200' },
  { id: 2, nome: "Pedro Rocha", idade: 2, responsavelId: 2, turno: 'Integral', pacote: 'Mensal', status: 'Ativo', foto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro' },
];

export const financeiro: Financeiro[] = [
  { id: 101, criancaId: 1, mesReferencia: 'Outubro/2025', valor: 850.00, status: 'Pago', vencimento: '2025-10-05', metodo: 'PIX' },
  { id: 102, criancaId: 2, mesReferencia: 'Outubro/2025', valor: 1200.00, status: 'Pendente', vencimento: '2025-10-05' },
];

//  FUNÇÕES DE MANIPULAÇÃO

export const getCriancaPorId = (id: number) => criancas.find(c => c.id === id);
export const getFinanceiroPorCrianca = (criancaId: number) => financeiro.filter(f => f.criancaId === criancaId);