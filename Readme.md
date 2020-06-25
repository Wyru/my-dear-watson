
# Teste Watson

  
## Configurando

Execute o comando ```npm install``` para instalar as dependências.

Crie um banco de dados em uma instância mySQL e configure a conexão em um arquivo ```.env``` usando como base o arquivo `.env.example`.
  

## Rodando Migrations

Basta executar o comando
```
npm run migrate
```
Caso esteja utilizando um MYSQL mais recente pode ser que a senha

do usuário esteja com um tipo de criptografia não suportadada pelo

driver do knex.js.

Para resolver este problema basta executar:

  

```

ALTER USER 'user'@'host' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;

```

  

Substituindo user, host e password pelos valores corretos.

  
  ## Executando no ambiente de desenvolvimento
  

    npm run dev

  

## Buildando

```
npm run build
```

## Executando a build da aplicação
```
npm start
```