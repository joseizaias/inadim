# NomdeJS-Mongodb-ReactJS

A aplicação se divide me 3 partes:
-> Back-end: NodeJS + Express (API)
-> Banco de Dados: MongoDB
-> Front-end: React JS

O banco de dados será populado na primeira execução da aplicação.

# Montando o Ambiente de Execução com Docker

É necessário a instalação prévia do Docker e do Docker-compose.

Em seguida:

-> Baixe os arquivos da aplicação numa pasta.

-> vá para a pasta "_PACOTE" e

-> execute os seguintes comandos em sequência e sempre aguardando o término do anterior:

1o - **docker-compose   build   --no-cache**

2o - **docker-compose  up  -d**

Após o término da execução dos comandos acima, teremos a aplicação em Reat JS levantada em:

=> http://localhost:3000

O Back-end em Node JS, usará a porta: 3033

e o MongoDB usará sua porta padrão: 27017
