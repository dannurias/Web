## Descripción del sitio

El sitio es un sitio de compras de artículos del anime Jojo's Bizarre Adventure


## Componentes del Proyecto

El proyecto está organizado en componentes reutilizables, los cuales están diseñados para facilitar la gestión y escalabilidad. A continuación se detalla cada uno de los principales componentes:

### 1. **Navbar**

Componente de la barra de navegación que incluye:

- Enlaces a las principales secciones del sitio.

**Archivo**: `Navbar.jsx`

### 2. **Hero Section**

Componente de la barra de navegación que incluye:

- Imagen de inicio y sobre nosotros

**Archivo**: `HeroSection.jsx`

### 3. **ProductList**

Muestra una lista de productos en tarjetas responsivas. Cada producto incluye:

- Imagen del producto.
- Título y descripción.
- Precio y botón de compra.

**Archivo**: `ProductList.jsx`

### 4. **ContactSection**

Formulario de contacto que permite a los usuarios ponerse en contacto con el equipo para consultas o sugerencias.

**Archivo**: `ContactSection.jsx`

### 5. **Footer**

Pie de página con enlaces a redes sociales, información adicional, y derechos de autor.

**Archivo**: `Footer.jsx`



---

## Instalación y Ejecución

### Requisitos

Para ejecutar el proyecto en tu entorno local, asegúrate de tener instalado:

- **Node.js** 
- **npm**

### 1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/Web.git

   ```
   ### 2. Instala las dependencias necesarias con npm
```bash
 npm install
 ```

### 3.  Configurar Tailwind CSS

```bash

npm install -D tailwindcss 
npx tailwindcss init

```

https://tailwindcss.com/docs/installation consulta en su documentacion

- Luego, agrega las directivas de Tailwind en el archivo src/index.css

```bash

@tailwind base;
@tailwind components;
@tailwind utilities;

```

### 4. Ejecuta el proyecto

```bash

npm start

```

### Autora : Dania Merari Urias


   
