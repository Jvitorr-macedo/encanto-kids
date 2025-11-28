# 🏰 Encanto Kids - Sistema de Gestão Escolar

Este projeto é um sistema web desenvolvido como parte do Estágio Supervisionado do curso de ADS (UNIFIP), visando modernizar a gestão do Hotelzinho Encanto Kids.

## 📋 Sobre o Projeto
O sistema resolve o problema da descentralização de informações, permitindo que a escola gerencie alunos e pagamentos, enquanto os pais acompanham a rotina diária dos filhos via celular.

### Funcionalidades Principais
1.  **Autenticação Híbrida:** Tela de login única que valida CPF e direciona para perfis distintos (Gestor vs Responsável).
2.  **Dashboard Administrativa:** Visualização de KPIs financeiros (Inadimplência, Receita) e operacionais (Faltas).
3.  **Agenda Digital:** Visualização otimizada para mobile onde pais veem alimentação, sono e fotos.
4.  **Gestão Financeira:** Controle de mensalidades, status de pagamento e relatórios.

## 🚀 Tecnologias Utilizadas
- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4 (Zero-Config)
- **Ícones:** Lucide React
- **Prototipagem:** Figma

## 📂 Estrutura do Projeto

```bash
/frontend
├── /app                # Rotas e Páginas (App Router)
│   ├── /admin          # Área restrita (Dashboard, Financeiro)
│   ├── /agenda         # Área pública para pais
│   ├── /login          # Autenticação
│   └── layout.tsx      # Layout principal com SEO
├── /components         # Componentes Reutilizáveis (Cards, Header)
├── /data               # Camada de Dados (Simulação de BD)
└── /utils              # Funções auxiliares (Validação CPF, Formatação)
```

## 🛠️ Como Instalar e Rodar
Clone o repositório:

```bash
git clone [https://github.com/seu-usuario/encanto-kids.git](https://github.com/seu-usuario/encanto-kids.git)
```

Instale as dependências:

```bash
npm install
```
Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse http://localhost:3000 no seu navegador.

🔒 Segurança
O sistema implementa validação de CPF no front-end para evitar erros de entrada e utiliza renderização server-side (SSR) do Next.js para proteger rotas sensíveis e otimizar o carregamento.