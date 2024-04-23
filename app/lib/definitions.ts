import { Prisma } from "@prisma/client";

export type Cliente = {
  id: number;
  nome: string | null;
  nomeFantasia: string | null;
  razaoSocial: string | null;
  cnpj_cpf: string | null;
  ie: string | null;
  telefone: string | null;
  endereco: string | null;
  complemento: string | null;
  cep: string | null;
  bairro: string | null;
  cidade: string | null;
  estado: string | null;
  diaEntrega: string | null;
  horarioEntrega: string | null;
  pedidos: Pedido[];
  produtos: Produto[];
};

export type Produto = {
  id: number;
  clienteId: number;
  nome: string;
  embalagem: string;
  porcao: string;
  infoNutri: string;
  ingredientes: string;
  validade: string;
  peso: number;
  unidade: string;
  precoPorPeso: number;
  ppp: number;
  precoTotal: number;
  items: Item[];
};

export type Pedido = {
  id: number;
  clienteId: number | null;
  dataAguardandoEntrega: Date | null;
  dataEntrega: Date | null;
  dataPPagamento: Date | null;
  dataPedido: Date | null;
  dataProduzir: Date | null;
  dataFinalizado: Date | null;
  dataEntregue: Date | null;
  dataPagamento: Date | null;
  lote: string | null;
  ocultarLote: boolean | null;
  numero: string | null;
  ordem: string | null;
  pesoTotal: number | null;
  acrescimoTotal: number | null;
  descontoTotal: number | null;
  precoTotal: number | null;
  qtdProdutos: number | null;
  qtdTotal: number | null;
  estado: string | null;
  pgtStatus: "pendente" | "pago" | string | null;
  pgtTipo: "A vista" | "A prazo" | string | null;
  obs: string | null;
  items: Item[];
};

export type Item = {
  id: number;
  pedidoId: number;
  produtoId: number;
  acrescimo: number;
  desconto: number;
  peso: number;
  qtd: number;
  preco: number;
  ppp: number;
  total: number;
};
