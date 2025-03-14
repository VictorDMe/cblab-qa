# Teste Técnico QA Coco Bambu 2025

## Identificação de Fluxos Importantes

### Pedido para Retirada
- **Impacto:** Se esse fluxo for interrompido, o usuário não consegue concluir a compra, o que pode levar à frustração e fazer com que ele desista ou vá direto para a concorrência. De qualquer forma, é ruim para o negócio.

### Voucher
- **Impacto:** A quebra do fluxo de compra de um voucher impede a finalização do pedido, tornando a experiência frustrante e afastando o usuário.

### Pedido para Delivery
- **Impacto:** Se o fluxo de entrega for interrompido, o usuário pode abandonar a compra e buscar alternativas mais ágeis.

## Teste de Automação UI

O projeto com a automação realizada está disponível [neste link](#).

### Como Executar os Testes no Modo Interface

1. Instale as dependências:
    ```sh
    npm install
    ```

2. Execute os testes:
    ```sh
    npx cypress open --env "email=[email],password=[senha],cpf=[cpf],phone=[telefone]"
    ```

### Cenário de Voucher

- **Motivo da Escolha:** O cenário de Voucher foi escolhido por ser o mais propenso a apresentar problemas.
- **Resultado:** Não foi possível validar com sucesso, pois não foi possível obter a tela de confirmação da compra.
- **Problemas Encontrados:** 
  - Tela de erro no pagamento por PIX.
  - A escrita dos testes se tornou bastante custosa e suscetível a quebras a médio e longo prazo, à medida que a aplicação for evoluindo. Isso se deve porque a maioria dos elementos não possui identificadores como ID ou data-cy, tornando a automação mais frágil e difícil de manter.

Referência: [Cypress Best Practices](https://docs.cypress.io/app/core-concepts/best-practices#How-It-Works)

### Teste de API
O repositório do teste de API pode ser encontrado aqui.

**Ferramentas Utilizadas**
- Postman
- Newman

Como Executar os Testes de API
Instale o Newman globalmente:

Como executar os testes:
1. Instale o newman
```sh
    $ npm install -g newman
```
2. Rode os testes:
```sh
    $ newman run CBLab.postman_col
```