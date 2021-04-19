# Trilha Node.js

## O que é NODE?
- Criado por __Ryan Dahl__
- Motivado por resolver uma tarefa de fazer upload de arquivos dentro do Flicker e queria ver uma barra de progresso para saber quanto já tinha ido
- Verificou que o navegador não fazia isso
- Tinha que requisitar para um servidor web
- Queria uma linguagem que não tivesse seu processo __bloqueado__
### Como funciona?
- __Non-blocking IO__: Processo de entrada e saída não bloqueante
- Quando o usuário enviar uma requisição e o node estiver processando, poderia vir outra requisição e também ser processada sem problemas
- __Event loop__ repassa as requests para as __threads__, conforme as requests forem chegando
- Não é necessário que a primeira request termine para que a segunda termine
- Processamento mais rápido, não é necessário esperar que a requisição seja atendida para poder iniciar outra requisição

## O que é uma API?
- Faz a comunicação do __Cliente__(HTML, CSS(front, mobile)) com o __Servidor__(Backend, acesso ao BD, regras de negócio, autenticação, etc..) e do __Servidor__ para o __Cliente__
  - Exemplo:
  - __Cliente__ envia uma requisição __POST__ para rota __/users__
  - __Backend__ processa a informação, verifica a rota e informações que o cliente mandou
  - __Backend__ retorna uma resposta para o __Cliente__
  - Resposta do __Backend__ costuma ser um __JSON__ (Javascript Object Notation)
  > Podemos compartilhar as informações do back-end(api) entre outros clientes
  > Dessa forma, para variás aplicações front-end, podemos usar o mesmo back-end, sem problema algum
  > Simplifica o desenvolvimento, pois se para cada front-end precisassemos de um back-end, a mesma regra de negócio aparecia repetidamente

