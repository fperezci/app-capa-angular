# Angular 14

## Instalación

### Node 16
Consideremos que podemos trabajar con varias versiones de node, por esto necesitamos utilizar nvm (node version manager)​
- Node 16 LTS (Windows/macOS/Linux):​
- 👉 https://nodejs.org/dist/latest-v16.x/​
Descargamos el .msi​ e instalamos

### Opcional macOS/Linux instalar NVM (Node Version Manager)
Instalar NVM (macOS/Linux)​
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash​
Importante, se debe reinicia la terminal, para que luego se puede utilizar​.
Si lo realizas desde una terminal de VS (visual studio), debes cerrar las terminales y el VS, y volver abrir el VS

Verificamos la instalación 
- nvm -v

#### Instalamos Node con NVM
Ahora instalaremos node con nvm ​
- nvm install 16​

Versiones de node compatibles con angular 14​
14.x, 16.x o 18.x (LTS)

#### Indicamos la versión de Node a NVM
Indicamos a NVM que utilizamos la version que instalamos​
- nvm use 16​
- nvm ls (conocer las versiones de node instaladas)​

Verificamos la instalación de node​
- node –v​
- npm –v​
​
### Instalamos Angular con Node
Instalamos angular 14​
- npm install –g @angular/cli@14​
​
Verificamos la versión de angular ​
- ng version

## Creación de Proyecto Angular
- ng new nombre-proyecto

## Importante
Ir a tsconfig.json y seccion "angularCompilerOptions", ingresamos​
- "skipLibCheck": true​

## levantamos el servidor​
- ng serve