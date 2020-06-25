
# Teste Watson

  
## Configurando

Execute o comando ```npm install``` para instalar as dependências.

Crie um banco de dados em uma instância mySQL e configure a conexão em um arquivo ```.env```, na pasta raiz do projeto, usando como base o arquivo `.env.example`.
  

## Rodando Migrations

Basta executar o comando
```
npm run migrate
```
Caso esteja utilizando a versão 8 do mySQL irá ocorrer um erro dizendo que o cliente não suporta o tipo de autenticação. Para saber mais sobre o problema clique  [aqui](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server).
  
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
