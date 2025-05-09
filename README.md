# Angular 14  Nivel  Básico   (Parte 1)
## Introducción a Angular y Estructura SPA
Framework front-end  
Accelerate your essence  
Single Page Applications (SPA)

## Angular  
Está diseñado para crear Single Page Applications (SPA), donde el contenido cambia dinámicamente sin recargar toda la página. Angular organiza el código en componentes, servicios y módulos, lo que facilita el desarrollo escalable y mantenible.  
Accelerate your essence  
Angular fue creado por Misko Hevery en 2009 como AngularJS, un framework para apps web dinámicas. En 2016, se reescribió como Angular 2 en TypeScript, iniciando el Angular moderno. Angular 14 (2022) trajo mejoras como componentes independientes y formularios tipados. Es mantenido por Google y ampliamente usado en aplicaciones web escalables.

## ¿Cómo funciona Angular?  
### Componentes, Servicios, Módulos, Directivas, Pipes, Routing  
Accelerate your essence  
TypeScript como base  
Estructura basada en módulos  
Componentes como bloques de construcción  
Data Binding y DOM reactivo  
Routing (SPA)  
Servicios e Inyección de Dependencias  
Standalone Components (Novedad en Angular 14)  
Compilación Ahead-of-Time (AOT)

### Componentes  
Es la unidad básica  
Es la parte visible en pantalla o una funcionalidad específica  
Cada componente tiene: HTML (vista), CSS (estilo) y TypeScript (lógica)  
Ejemplo: Un componente Home que muestra la página de inicio.  
Analogía: Son como piezas de LEGO que juntas forman toda la aplicación.  

### Servicios  
Clases que contienen lógica de negocio o funciones reutilizables.  
No tienen interfaz visual (no son vistas).  
Se usan para:  
- Manejar llamadas HTTP  
- Compartir datos entre componentes  
- Realizar cálculos, validaciones, etc.  
Se inyectan a los componentes mediante inyección de dependencias.  
Analogía: Son como los “cerebros” o “ayudantes” invisibles que trabajan tras bambalinas.  

### Módulos  
Son agrupadores lógicos de componentes, servicios y otros elementos.  
Cada aplicación Angular tiene al menos un módulo raíz (AppModule).  
Puedes crear módulos de funcionalidades (UsersModule, DashboardModule, etc.) para organizar mejor.  
Permiten:  
- Cargar funcionalidades de manera modular  
- Optimizar la carga con Lazy Loading  
Analogía: Son como carpetas o cajones donde guardas piezas relacionadas.  

### Directivas  
Son instrucciones que modifican el comportamiento o la apariencia de elementos en el DOM.  
Hay 2 tipos principales:  
- Estructurales: Modifican el DOM (agregan, quitan elementos). Ej: *ngIf, *ngFor  
- Atributo: Cambian apariencia o comportamiento sin alterar la estructura. Ej: [ngClass], [ngStyle]  
Analogía: Son como "órdenes" que das a los elementos HTML para que se comporten de cierta forma  

### Pipe  
Son transformadores de datos para mostrar resultados de manera amigable en la vista.  
Usados en el template para:  
- Formatear fechas (date)  
- Convertir texto a mayúsculas (uppercase)  
- Aplicar formato de moneda (currency)  
También puedes crear pipes personalizados.  
🔹 Analogía: Son como "filtros" que aplicas antes de mostrar algo.  

### Routing  
Es el sistema de navegación entre vistas o componentes.  
Define rutas (/home, /contacto, /productos/1) y a qué componente corresponden.  
Permite cargar páginas diferentes sin recargar toda la aplicación (SPA).  
Usa el módulo RouterModule para su configuración.  
🔹 Analogía: Es como un GPS que te dice a qué parte de la app debes ir.  

### Estructura del proyecto  
src/ Código fuente principal de la aplicación  
src/app/ Contiene los componentes, servicios y módulos de la aplicación  
src/assets/ Recursos estáticos  
src/environments/ Configuraciones por ambiente  

## ¿Qué es Angular CLI?  
Angular CLI (Command Line Interface) es una herramienta oficial de Angular que se usa desde la terminal para crear, configurar y administrar proyectos Angular de forma rápida y eficiente.  

- Ahorra tiempo y evita errores al escribir código repetitivo  
- Aplica automáticamente buenas prácticas de estructura  
- Mantiene el proyecto consistente  
- Viene preparado para integrar testing, linting y optimización de builds  

### Ventajas  

### Comandos útiles  
`ng new nombre-proyecto`  
Crear un nuevo proyecto con una sola línea  

`ng serve`  
Levantar un servidor de desarrollo  

Generar componentes, servicios, módulos, etc.:  
- `ng generate component nombre`  
- `ng generate service nombre`  
- `ng generate module nombre`  
- `ng generate directive nombre`  
- `ng generate interface nombre`  
- `ng generate pipe nombre`  
- `ng generate guard nombre`  
- `ng generate enum nombre`  
- `ng generate class nombre`

Abreviados:  
- `ng g c nombre`  
- `ng g s nombre`  
- `ng g m nombre`  
- `ng g d nombre`  
- `ng g i nombre`  
- `ng g p nombre`  
- `ng g g nombre`  
- `ng g e nombre`  
- `ng g cl nombre`

`ng build --prod`  
Construir el proyecto para producción  

`ng test`  
Ejecutar pruebas

## Cuidemos el código
  
## Buenas prácticas  

- Usa componentes pequeños y reutilizables  
- Separa lógica en servicios  
- Aplica nombres claros y significativos  
- Organiza el código por módulos de funcionalidad  
- Evita lógica compleja en templates  
- Usa tipado estricto con TypeScript  
- No abuses de `any`, usa interfaces  
- Centraliza constantes y rutas  
- Usa pipes para formatear datos en la vista  
- Usa el `async` pipe para manejar observables  
- No mezcles responsabilidades en un solo componente  
- Comenta solo lo necesario y útil  
- Implementa guards para proteger rutas  
- Mantén actualizado tu angular.json y tsconfig.json  
- Prefiere @Input() y @Output() para comunicar componentes  

## Manos a la obra  
"@types/node": "^16.18.50"

## ¿Algo anda mal?  
### Errores comunes y soluciones  

- **TS2502**: Conflicto con @types/node recientes  
  - Solución: Fijar "@types/node": "^16.18.50" en package.json  
- **npm install se queda pegado**  
  - Solución: Ejecutar `npm install` manualmente  
- **ng: command not found**  
  - Angular CLI no está instalado globalmente  
  - Solución: `npm install -g @angular/cli`  
- **EACCES: permission denied**  
  - Solución: Usar `sudo` o revisar permisos  
- **Module not found: Can't resolve...**  
  - Solución: `rm -rf node_modules && npm install`  
- **Port 4200 is already in use**  
  - Solución: `--port=4300` o detener el proceso en 4200  
- **ng new se queda en "Successfully initialized git"**  
  - Solución: Cancelar y correr `npm install` manualmente  
- **Nombre de proyecto inválido**  
  - Solución: Usa solo minúsculas, números y guiones  
- **Cannot find module '@angular-devkit/build-angular'**  
  - Solución: `npm install @angular-devkit/build-angular --save-dev`  

## Consejos para evitar más problemas  
- Usa Node.js LTS estable (ej. 18.x o 20.x)  
- Verifica tu versión con `node -v`  
- Usa Angular CLI compatible con la versión del proyecto  
- Si usas varias versiones en distintos proyectos:  
  - `npm install -g @angular/cli@14` (global)  
  - `npm install @angular/cli@14 --save-dev` (local)  
  - `npx ng serve`  
- Fijar versiones en package.json en trabajo en equipo  
  - "@angular/core": "14.2.0",  
  - "@angular/cli": "14.2.5"  
- Si algo falla, revisar `node_modules`, `package-lock.json` y reinstalar:  
  - `rm -rf node_modules package-lock.json`  
  - `npm install`
