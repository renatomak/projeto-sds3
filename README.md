# DSVendas - Dashboard para análise de dados

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/renatomak/projeto-sds3/blob/main/LICENSE)

## Sobre o projeto

Esta é uma aplicação full stack web construída na Semana Spring React - SDS 4.0 da DevSuperior.
A aplicação tem o Backend criado em Spring Boot, Java e o Banco de Dados Relacional Postgresql.
O Frontend é feito com React, typescript e Bootstrap.
O principal objetivo da aplicação é possibilitar a análise detalhada dos dados inseridos no Banco de Dados. É possível analisar a porcentagem e quantidade de vendas de cada vendedor.

<img alt="layout" title="#video da aplicação" src="asserts/video_dsvendas.gif" />

## Itens obrigatórios:

- [x] Criar projetos backend e frontend;
- [x] Salvar os projeto no Github;
- [x] Montar o visual estático do frontend;
- [x] Publicar o frontend no Netlify;
      Implementar o backend
- [x] Modelo de domínio
- [x] Estruturar o backend no padrão camadas
- [x] Consulta paginada de vendas
- [x] Consultas agrupadas para gráficos
- [x] Implantação na nuvem (Heroku)
- [x] Integrar backend e frontend

## Layout

<h1 align="center">
  <img alt="layout" title="#layout Home" src="asserts/home.png" />
  <img alt="layout" title="#layout Dashboard" src="asserts/dashboard.png" />
</h1>

## Modelo conceitual

<h1 align="center">
   <img alt="layout"  title="#DiagramaEER"  src="asserts/modelo-relacional.png" />
</h1>

# Tecnologias utilizadas

## Back end

<img src="https://spring.io/images/logo-spring-tools-gear-3dbfa4e3714afa9d58885422ec7ac8e5.svg" alt="spring" width="40" height="40" style="max-width:100%;" /> &nbsp; &nbsp; &nbsp; &nbsp;
<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png" alt="java" width="40" height="40" style="max-width:100%;" /> &nbsp; &nbsp; &nbsp; &nbsp;
<img src="https://cdn.icon-icons.com/icons2/3053/PNG/512/postman_macos_bigsur_icon_189815.png" alt="postman" width="40" height="40" style="max-width:100%;" /> &nbsp; &nbsp; &nbsp; &nbsp;
<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png" alt="postgresql" width="40" height="40" style="max-width:100%;" /> &nbsp; &nbsp; &nbsp; &nbsp;

## Front end

<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/html_original_wordmark_logo_icon_146478.png" alt="html" width="40" height="40" style="max-width:100%;" /> &nbsp; &nbsp; &nbsp; &nbsp;
<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png" alt="bootstrap" width="40" height="40" style="max-width:100%;" /> &nbsp; &nbsp; &nbsp; &nbsp;
<img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_official_icon_130107.png" alt="typescript" width="40" height="40" style="max-width:100%;" /> &nbsp; &nbsp; &nbsp; &nbsp;
<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" alt="react" width="40" height="40" style="max-width:100%;" /> &nbsp; &nbsp; &nbsp; &nbsp;

## Implantação em produção

<img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netlify_logo_icon_169924.png" alt="netlify" width="40" height="40" style="max-width:100%;" /> &nbsp; &nbsp; &nbsp; &nbsp;
<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/heroku_plain_wordmark_logo_icon_146480.png" alt="heroku" width="40" height="40" style="max-width:100%;" /> &nbsp; &nbsp; &nbsp; &nbsp;

# Como executar o projeto localmente

1º - Clone o [Repositório](https://github.com/renatomak/projeto-sds3) do projeto no GitHub

Pré-requisitos:
npm / yarn
Spring Tool Suite

## Backend

2. inicie o servidor na ferramenta [Spring_Tool_Suite](https://spring.io/tools)

## Frontend

2. Entre na pasta frontend
3. Instale as dependências - npm install ou yarn install
4. Inicie o projeto - npm start ou yarn start

## Acesse:

Aplicação: [DSVendas](https://dsvendas-marques.netlify.app/)

API: [API-DSVendas](https://sds3-renatomak.herokuapp.com/)

### Os endpoints disponíveis são:

[sellers](https://sds3-renatomak.herokuapp.com/sellers)

#### Exemplo de retorno:

<img alt="layout"  title="#sellers"  src="asserts/sellers.png" />

[Sales_pagination](https://sds3-renatomak.herokuapp.com/sales?page=1&sort=date,desc)

#### Exemplo de retorno:

<img alt="layout"  title="#sellers"  src="asserts/pagination.png" />

[Amount_by_seller](https://sds3-renatomak.herokuapp.com/sales/amount-by-seller)

#### Exemplo de retorno:

<img alt="layout"  title="#sellers"  src="asserts/amount_by_seller.png" />

[Success_by_seller](https://sds3-renatomak.herokuapp.com/sales/success-by-seller)

#### Exemplo de retorno:

<img alt="layout"  title="#sellers"  src="asserts/success_by_seller.png" />

## Proximos Passos

- Criar os endpoints: create, update e delete.
