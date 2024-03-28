# voting-system-signo-test
Teste para a vaga de Desenvolvedor

# O que vai ser utilizado

## Backend e Banco de Dados
- Node.js (Rodando o js no servidor)
- Typescript (Utilizado para deixar o codigo mais robusto, com menos erros e mais facil de debugar)
- Express (Framework para node com requisições http)
- Sequelize (ORM para conexao com o banco de dados MySQL)
- MySQL (Banco de dados)
- Mocha (testes)
- Arquitetura MSC (Model, Service e Controller)

## Frontend

- React.js (Biblioteca para front com Javascript ou Typescript)
- Axios (Realizar as requisições para o backend)
- HTML
- CSS
- Jest
- React Testing Library

## Outros

- Docker (Criar containers para isolar as aplicações)
- EsLint (Manter a formatação e as boas praticas do codigo)

## Para rodar o projeto:

Para rodar siga os comandos em ordem:

- `docker-compose up -d --build` Para criar os containers "Backend" e "db"
- `docker exec -it backend bash` Para entrar no terminal do container de maneira iterativa
- `npm run build` Para gerar o build em Javascript
- `npm run db:start` Para rodar as migrations e seeds, criando as tabelas do banco de dados