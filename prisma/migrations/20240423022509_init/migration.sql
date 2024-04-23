-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "nomeFantasia" TEXT,
    "razaoSocial" TEXT,
    "cnpj_cpf" TEXT,
    "ie" TEXT,
    "telefone" TEXT,
    "endereco" TEXT,
    "complemento" TEXT,
    "cep" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "diaEntrega" TEXT,
    "horarioEntrega" TEXT,
    "hash" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "clienteId" INTEGER,
    "nome" TEXT NOT NULL,
    "embalagem" TEXT,
    "porcao" TEXT,
    "infoNutri" TEXT,
    "ingredientes" TEXT,
    "validade" TEXT,
    "peso" TEXT,
    "unidade" TEXT,
    "precoPorPeso" INTEGER,
    "ppp" INTEGER,
    "precoTotal" INTEGER,
    "hash" TEXT,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "clienteId" INTEGER,
    "dataAguardandoEntrega" TIMESTAMP(3),
    "dataEntrega" TIMESTAMP(3),
    "dataPPagamento" TIMESTAMP(3),
    "dataPedido" TIMESTAMP(3),
    "dataProduzir" TIMESTAMP(3),
    "dataFinalizado" TIMESTAMP(3),
    "dataEntregue" TIMESTAMP(3),
    "dataPagamento" TIMESTAMP(3),
    "lote" TEXT,
    "ocultarLote" BOOLEAN NOT NULL DEFAULT false,
    "numero" TEXT,
    "ordem" TEXT,
    "pesoTotal" INTEGER,
    "acrescimoTotal" INTEGER,
    "descontoTotal" INTEGER,
    "precoTotal" INTEGER,
    "qtdProdutos" INTEGER,
    "qtdTotal" INTEGER,
    "estado" TEXT,
    "pgtStatus" TEXT,
    "pgtTipo" TEXT,
    "obs" TEXT,
    "hash" TEXT,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "produtoId" INTEGER,
    "desconto" INTEGER,
    "acrescimo" INTEGER,
    "peso" INTEGER,
    "qtd" INTEGER,
    "preco" INTEGER,
    "ppp" INTEGER,
    "total" INTEGER,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
