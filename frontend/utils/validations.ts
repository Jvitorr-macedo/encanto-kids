// Função para validar formato de CPF (Simulação de validação)
export const validarCPF = (cpf: string): boolean => {
  // Remove caracteres não numéricos
  const limpo = cpf.replace(/[^\d]+/g, '');
  
  if (limpo === '') return false;
  // Elimina CPFs inválidos conhecidos
  if (limpo.length !== 11 || 
      limpo === "00000000000" || 
      limpo === "11111111111") 
      return false;
      
  return true;
};

// Função para formatar moeda (R$)
export const formatarMoeda = (valor: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
};