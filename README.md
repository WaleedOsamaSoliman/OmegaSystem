
# (OMEGA) ERP system for pharmacies

A brief description of what this project does and who it's for



## Installation

Install client Requirments

```bash
    cd ./client
    npm install
    npm run build
```
    
Install Server Requirments

```bash
    cd ./server
    npm install
```
    
Install SQL Server 

- download  the latest version of :
[ Mariadb ](https://mariadb.org/download/)
- install it 
- run the server
  

# Create the Database Structure 
```bash
    cd ./server/config
```
- edit settings.js file  and set your mysql server user and password 
```bash
    cd ./server/init
    node createDatabaseTables.js
```
# Run the Application : 

```bash
    cd ./server
    node server.js
```
    
