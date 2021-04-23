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

  ## Migrations: o que são?
  - Sistema de versionamento para o banco de dados

  ## Repositórios: o que são?
  - Estrutura(classe) que será responsável por fazer toda manipulação de dados na aplicação

  ## Tipos de parâmetros:
  - Route Params => Parâmetros de rotas
  - Query Params => Filtros e buscas
  - Body Params => Inserções, passar objetos dentro da requisição(json)

  ## Services: o que são?
  - Armazenam a regra de negócio para isolar bem cada serviço

  ## O que é Websocket?
  ### Entendendo protocolo HTTP:
  > Lado cliente: toda vez que o cliente precisa de uma resposta do servidor, ele envia uma requisição e fica aguardando por uma resposta.
  - Como acontece a comunicação?
  > Lado servidor: toda vez que uma nova requisição é aberta pelo cliente, uma nova __conexão__ é aberta entre o cliente e o servidor
  - A conexão é fechada quando o servidor envia a resposta.
  - O servidor não consegue ficar enviando informações, nem saber qual é o cliente que está conectado, pois as conexões são fechadas.
  - Este processo se torna __custoso__
  ### Entendendo protocolo WS / Websocket
  > Cliente: se conecta ao servidor
  - Como acontece a comunicação?
  > Servidor: hosteia uma nova conexão 
  - Porém, essa conexão só é fechada quando o cliente __desconectar__
  - Podemos enviar mensagens para todos sockets, todos que estiverem conectados, sem problema nenhum
  - Costumeiramente usado para __chats__ onde mensagens vão e vem com frequência

  ### Socket.io



