## Ambiente
El ambiente en el que se realizó el sistema está descrito a continuación:
* Sistema Operativo Windows 10.
* Mongodb v4.0
* Java version "1.8.0_181"
* Python 3.7.5
* Node v8.9.4

## Instalación Dependencias
- Instalación Dependencias Flask
```sh
pip install bson
pip install flask
pip install flask_pymongo
pip install flask_cors
```
- Instalación dependencias React
```sh
>   npm install
```

## Ejecución
Ejecución de mongo DB siguiendo las instrucciones y ruta del manual de instalación para windows (https://docs.mongodb.com/v4.0/tutorial/install-mongodb-on-windows/)
```sh
>   "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"
```
Ejecución de la tarea programada que inserta los datos a la BD. Desde la carpeta .\Logger
```sh
>   java -jar dist\Logger.jar
```
Ejecución del Back-End desarrollado en Flask. Desde la carpeta .\Flask-BE
```sh
>   python main.py
```
Ejecución del Back-End desarrollado en React. Desde la carpeta .\webClient
```sh
>   npm start
```
La aplicación web quedará desplegada en: `localhost:3000/`

### Diagrama de componentes
![alt comp](https://i.ibb.co/pZNKCRd/component.png)
### Diagrama de despliegue
![alt deply](https://i.ibb.co/q9nVGh3/deployment.png)

#### Cliente web desplegado
![alt app](https://i.ibb.co/W6tws5Z/web.png)
***David Esteban Perdomo Cristancho***