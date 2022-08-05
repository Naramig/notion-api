# Notion-API

## Description
Сервис имеет CRUD заметок. Авторизация через JWT
## Requirements
* NodeJS
* Postgres
## Config
* PORT - port of the HTTP server
* HOST - host of the Postgres DB
* USER - user of the Postgres DB
* PASSWORD - password of the Postgres DB
* DB - database name
* TOKEN_SECRET - secret for JWT authentication
## Local run
### Running with CLI:
```$ npm start```<br>

Be sure to pass necessary env variables or prepare your env somehow. For example create a conf-file file in your working directory and use this command to export the variables to the environment:
```
$ set -o allexport
$ source conf-file
$ set +o allexport
```
### Docker
You can run a service in docker container by running ```./restart.sh```<br>
Or you can use docker compose ([link](https://github.com/Naramig/testAppDocumentation))
