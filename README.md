# RetryFlow - Merchant Retry Dashboard

Dashboard interactivo para configurar reglas de reintento de pagos y visualizar el impacto en tiempo real.

## 🚀 Instalación y Ejecución

### Prerrequisitos
- **Node.js** versión 16 o superior ([Descargar aquí](https://nodejs.org/))
- npm (viene incluido con Node.js)

### Pasos para ejecutar en otra PC

1. **Copiar el proyecto**
   - Comprime toda la carpeta `merchant-retry-dashboard`
   - **IMPORTANTE**: Puedes excluir la carpeta `node_modules` para que sea más ligero (se volverá a crear)
   - Transfiere el archivo a la otra PC y descomprime

2. **Instalar dependencias**
   ```bash
   cd merchant-retry-dashboard
   npm install
   ```
   Este comando descargará todas las dependencias necesarias (React, Tailwind, etc.)

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación se abrirá en `http://localhost:5173/` (o el puerto que muestre la consola)

4. **Build para producción (opcional)**
   ```bash
   npm run build
   ```
   Esto genera una carpeta `dist` con archivos estáticos listos para producción

## 📦 ¿Qué archivos son necesarios?

### ✅ Incluir:
- `src/` - Código fuente
- `public/` - Archivos públicos
- `index.html`
- `package.json` - Lista de dependencias
- `package-lock.json` - Versiones exactas
- `vite.config.js` - Configuración de Vite
- `tailwind.config.js` - Configuración de Tailwind
- `postcss.config.js` - Configuración de PostCSS
- `README.md` - Este archivo

### ❌ Excluir (se regeneran):
- `node_modules/` - Dependencias (muy pesado, ~200MB)
- `dist/` - Build de producción
- `.vite/` - Caché de Vite

## 🛠️ Comandos Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm run preview` - Vista previa del build de producción

## 📝 Características

- ✨ Configuración visual de reglas de reintento
- 📊 Simulación de impacto en tiempo real
- 🎨 Diseño moderno con Tailwind CSS
- 📱 Totalmente responsive
- 🤖 Insights AI para optimización

## 🔧 Tecnologías

- React 18
- Vite
- Tailwind CSS 3.4
- Lucide React (iconos)

## 💡 Solución de Problemas

**Error al instalar:**
- Verifica que Node.js esté instalado: `node --version`
- Elimina `node_modules` y `package-lock.json`, luego ejecuta `npm install` de nuevo

**Puerto en uso:**
- Vite buscará automáticamente otro puerto disponible
- O puedes cerrar el proceso que usa el puerto 5173

**Estilos no se aplican:**
- Verifica que Tailwind CSS v3.4 esté instalado
- Refresca el navegador con Ctrl+Shift+R
