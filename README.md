# Hostsite Comsentimento

## Sobre o Projeto
### Funcionalidades:
- CRUD de editais
- Autenticação, salvando o token na localStorage
- Controle de rotas autenticadas
- Hostsite demonstrativo
- Modais, utilizando React Portals
- Responsividade

### Layout
O layout do projeto foi desenvolvido através da plataforma [Figma](figma.com). [Clique aqui](https://www.figma.com/file/bQKq3SW4YSvhSMBF0i5cD7/Hostsite---Comsentimento) e acesse o protótipo.

### Tecnologias
- [React](https://pt-br.reactjs.org/docs/getting-started.html)
  - Guia de estilo [AirBnB Standards](https://github.com/airbnb/javascript)
  - Padronização de commits: [Conventional Commits](https://www.conventionalcommits.org/en/)

### Bibliotecas
- [React Router v6](https://reactrouter.com/docs/en/v6)
- [Styled Components](https://styled-components.com/docs)
- [EsLint](https://eslint.org/docs/latest/)
- [PropTypes](https://www.npmjs.com/package/prop-types)

## Implantação/Execução

### Requisitos

- É necessário que tenha instalado [Yarn](https://yarnpkg.com/) para rodar o projeto.

**Clone o projeto com o comando abaixo e acesse a pasta**
```bash

$ git clone https://github.com/LeandroFilie/tech-test-comsentimento.git

$ cd tech-test-comsentimento
```

**Siga os passos a seguir**

```bash

# Instalar todas as dependências

$ yarn

```
**Crie um arquivo <code>.env</code> na raiz do projeto e preencha com o token gerado após a criação de seu usuário**
```bash
REACT_APP_AUTHORIZATION_HEADER=coloquei_aqui_sua_chave
```
**Após criar o arquivo, siga os passos abaixo:**

```bash

# Iniciar a aplicação em um servidor web

$ yarn start

```
Acesse o App pelo seu navegador pelo endereço: `http://localhost:3000`

<br>

## Live Demo
Para acessar de forma online: acesse o link: [https://tech-test-comsentimento-leandrofilie.vercel.app/](https://tech-test-comsentimento-leandrofilie.vercel.app/)
