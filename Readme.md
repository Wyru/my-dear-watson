# Teste Watson

## Configurando
Configure a conexão com o banco de dados no arquivo src/knexfile.js

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



## Buildando
```
npm run build
```

## Rodando a Aplicação
```
npm start
```