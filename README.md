<h1 align="center">Desafio PubFuture</h3>

### Descrição do Projeto
<p>Solução para auxiliar no controle das finanças pessoais,
realizado para a terceira etapa do processo seletivo do programa PubFuture</p>

### Tecnologias

<h3>
    <a href="https://nodejs.org/pt-br/">NodeJS</a>
</h3>
<p>Ambiente server-side para executar a aplicação</p>

<h3>
    <a href="https://www.sqlite.org/">SQLite</a>
</h3>
<p >Uma base de dados simples e de fácil implementação</p>

<h3>
    <a href="https://github.com/mapbox/node-sqlite3">SQLite3</a>
</h3>
<p>Lib adicionada para o uso do SQLite no NodeJS</p>

<h3>
    <a href="https://sequelize.org/">Sequelize</a>
</h3>
<p >ORM (Object-Relational Mapper) para NodeJS usado para realizar o mapeamento das models para o banco de dados</p>

<h3>
    <a href="https://github.com/facebook/jest">Jest</a>
</h3>
<p >Lib usada para realizar os testes unitários</p>

<h3>
    <a href="https://eslint.org/">ESLint</a>
</h3>
<p >Lib usada para identar automáticamente o código</p>

### Features

Receitas
- [x] Cadastrar receitas
- [x] Editar receitas
- [x] Remover receitas
- [x] Listar receitas
- [x] Listar total de receitas

Despesas
- [x] Cadastrar despesas
- [x] Editar despesas
- [x] Remover despesas
- [x] Listar despesas
- [x] Listar total de despesas

Contas
- [x] Cadastrar conta
- [x] Editar conta
- [x] Remover conta
- [x] Listar conta
- [x] Transferir saldo entre contas
- [x] Listar saldo total

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/pt-br/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/CrislaineTamires/desafiopubfuture

# Acesse a pasta do projeto no terminal/cmd
$ cd desafiopubfuture

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3333>
```