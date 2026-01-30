# Ecomerces 🛒

**Ecomerce** creado con React y Vite. Aplicación de ejemplo para mostrar un catálogo de productos, ver detalles, sumar productos al carrito y finalizar compras usando Firebase como backend.

---

## ✨ Características

- Catálogo de productos y filtrado por categorías
- Página de detalle de producto con contador y añadir al carrito
- Carrito persistente usando React Context
- Integración con Firebase (Firestore) para obtener productos
- Notificaciones con `react-toastify` y loaders para cargas asíncronas

## 🧰 Tecnologías

- React 19 + Vite
- Firebase (Firestore)
- React Router DOM
- Bulma / Bootstrap Icons


## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio:

   ```bash
   git clone <tu-repo> && cd Ecomerces
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Build para producción:

   ```bash
   npm run build
   npm run preview
   ```

5. Linter:

   ```bash
   npm run lint
   ```

## ⚙️ Configuración de Firebase

- Las credenciales de Firebase están en `src/firebase/config.js`. Puedes usar variables de entorno si prefieres (por ejemplo `.env`) y actualizar ese archivo.
- Asegúrate de tener Firestore configurado y de que la colección de productos coincida con la que espera `src/firebase/db.js`.

> Nota: Si guardas credenciales en `.env`, reinicia el servidor de desarrollo después de crear o cambiar el archivo.

## 📁 Estructura principal del proyecto

- `src/`
  - `components/` - Componentes UI (NavBar, ItemList, ItemDetail, Cart, etc.)
  - `context/` - `CartContext` y proveedor de carrito
  - `firebase/` - `config.js`, `db.js` (conexión a Firestore)
  - `css/` - Estilos globales
  - `assets/` - Imágenes y recursos
  - `App.jsx`, `main.jsx`

## 🧪 Scripts disponibles

- `npm run dev` — ejecutar en modo desarrollo
- `npm run build` — crear versión de producción
- `npm run preview` — previsualizar la build
- `npm run lint` — ejecutar ESLint


## 📬 Contacto y licencia

- Autor: repositorio local `nahuel502010@gmail.com`.


---

¡Listo! Si quieres, puedo ajustar el README para incluir screenshots, ejemplos de endpoints de Firestore o instrucciones para desplegar en Netlify/ Vercel. 💡
