# Sequelize x Express

Explore: Sequelize - Express - Migrations - Seed

Base on: [Sequelize + Express Starter Guide](https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465)

### Installation
**First of all** 
- Clone my repo
```sh
$ git clone https://github.com/nvlinh99/sequelize-express.git
$ npm install
```
**Next,**
- Config database
```sh
$ cd config/config.json

*** Edit development:
    "development": {
        "username": <your username>,
        "password": <your pwd>,
        "database": <your database name>,
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
* Field "dialect" you can use another database such as: mysql, mongodb,...
```
**And then,**
- Run app: 

```sh
$ npm start
```
**Finally,**
- Use Postman to test (GET/POST)
