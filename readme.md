## Sistema de Gestão de Pedidos

> Projeto Prático desenvolvido para a disciplina de **Desenvolvimento de Serviços e APIs**.

## Sobre o projeto

Este projeto consiste no desenvolvimento de uma **API REST** utilizando **Node.js e Express**, com o objetivo de atender aos requisitos de um sistema simples de gerenciamento de pedidos como parte de uma Avaliação Prática. 

A API permite realizar operações completas de cadastro, consulta, atualização e remoção de pedidos, seguindo os princípios REST e aplicando boas práticas de organização em camadas, como separação entre controller (app.js), service, repository e validação.

A aplicação manipula pedidos contendo informações como código identificador gerado automaticamente, data e hora do registro, CPF e nome do cliente, nome do produto, preço e situação do pedido, que pode assumir os valores “aberto”, “pago” ou “finalizado”. Além disso, foram implementadas validações de regras de negócio para garantir a integridade dos dados, como obrigatoriedade de CPF com 9 dígitos numéricos, nome do cliente e produto com tamanho mínimo, e preço positivo.

Para executar o projeto, é necessário ter o Node.js instalado. Após baixar o código (**### 1.**), basta instalar as dependências com o comando npm install (**### 3.**) e iniciar o servidor com node app.js (**### 4.**). A aplicação ficará disponível no endereço http://localhost:3000. A API pode ser testada utilizando o Insomnia ou qualquer outro cliente HTTP, permitindo realizar requisições para todos os endpoints disponíveis.

## Comandos para execução no terminal (bash)

### 0. Iniciar o projeto

npm init -y

### 1. Clonar o repositório

git clone https://github.com/juliassaraiva/DSA2026-1-Avaliacao_pratica.git

### 2. Acessar a pasta do projeto

cd DSA2026-1-Avaliacao_pratica

### 3. Instalar as dependências

npm install express

### 4. Executar a aplicação

node app.js

## 5. Envio Github

## 5.A - Verifica as mundanças

git status

## 5.B - Adiciona os arquivos alterados

git add . 

## 5.C - Cria um commit 

git commit -m "Atualiza README e documentação final"

## 5.D - Envia para o Github (branche master, neste caso)

git push origin master


## Endpoints disponíveis

Os principais endpoints incluem:
- criação de pedidos (POST /pedidos);
- listagem de pedidos com filtro opcional por situação (GET /pedidos);
- consulta de pedido por código (GET /pedidos/:codigo);
- atualização da situação do pedido (PATCH /pedidos/:codigo), e;
- exclusão de pedidos (DELETE /pedidos/:codigo). 

Durante os testes, também foram considerados cenários de erro, como envio de dados inválidos, garantindo que a API retorne mensagens. 

O projeto foi desenvolvido utilizando **JavaScript, Node.js e Express**, com foco na aplicação de conceitos de **APIs RESTful**, validação de dados e organização de código. 

## Evidências do testes

Seguem prints dos testes realizados no Insomnia abaixo. Outrossim, o projeto da API Pedidos foi disponibilizado no repositório no GitHub - https://github.com/juliassaraiva/DSA2026-1-Avaliacao_pratica.git - , incluindo este **README** para documentação.



![alt text](Prova_26.05.2026_delete_pedido_1.png)
![alt text](Prova_26.05.2026_get.png)
![alt text](Prova_26.05.2026_get_com_filtro_situacao.png)
![alt text](Prova_26.05.2026_get_pedido_1.png)
![alt text](Prova_26.05.2026_get_situacao_abe.png)
![alt text](Prova_26.05.2026_patch_pedido_1.png)
![alt text](Prova_26.05.2026_post.png)
![alt text](Prova_26.05.2026_post_erro1.png)
![alt text](Prova_26.05.2026_post_erro2.png)
![alt text](Prova_26.05.2026_post_erro3.png)


## Observação: 
    > Professor, por gentileza, desconsiderar os arquivos dj.js e pedido_repository.js, pois eu já estava desenvolvendo a atividade para conectar com o banco de dados criado no pgadmin. 