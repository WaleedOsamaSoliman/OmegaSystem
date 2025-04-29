
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
# ScreenShots for Completed Parts :
[![screenshot.png](https://i.postimg.cc/SN1c57FQ/omega1.png)](https://postimg.cc/0bm6KSyh)
[![omega2.png](https://i.postimg.cc/6pG4mkfz/omega2.png)](https://postimg.cc/qN47tZYC)
[![omega3.png](https://i.postimg.cc/q7shk2Y3/omega3.png)](https://postimg.cc/p9dXC5PW)
[![omega4.png](https://i.postimg.cc/fyJR0dH5/omega4.png)](https://postimg.cc/D43T9S3b)
