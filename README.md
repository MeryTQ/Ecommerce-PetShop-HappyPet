#  💻Ecommerce React CoderHouse By: María Trinidad Quiroz 💻
Este proyecto final se trata de un ecommerce de juguetes y accesorios para mascotas como perros y gatos 🐶🐱.
## **Captura**
---
![](/src/assets/Gif-funcionalidad.gif)

## **Desafíos y Pre-entregas**
---
### **🥉Primera pre-entrega🥉**
* Crea una carpeta dentro de src llamada components que contenga la implementación del componente `NavBar` dentro del archivo `NavBar.js`. Su funcionalidad es la de renderizar una barra de menú (Navbar).
* Brand (título/nombre de la tienda).
* Un listado de categorías clickeables.
* Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).
* Crea un componente `CartWidget.js` con un ícono, y ubícalo en el navbar. 
* Crea un componente contenedor `ItemListContainer.js` con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado. Impórtalo dentro de App.js, y abajo de NavBar.js. 

### **🚨Actividad 1: Contador con botón🚨**
* Crea un componente `ItemCount.js`, que debe estar compuesto de un botón y controles, para incrementar y decrementar la cantidad requerida de ítems
* El número contador nunca puede superar el stock disponible.
De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd.
* Si hay stock al clickear el botón se debe ejecutar `onAdd` con un número que debe ser la cantidad seleccionada por el usuario.

### **🚨Actividad 2: Catálogo con MAP🚨**
* Crea los componentes `Item.js` e `ItemList.js` para mostrar algunos productos en tu ItemListContainer.js. Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red
* `Item.js`: Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles (los desarrollaremos más adelante).
* `ItemList.js` Es un agrupador de un set de componentes Item.js. 
* Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red.

### **🚨Actividad 3: Detalle del producto🚨**
* Crea tu componente `ItemDetailContainer` con la misma premisa que ItemListContainer.
* Crea tu componente `ItemDetail.js` que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio.

### **🥉Segunda Pre-entrega🥉**
* Configura en App.js el routing usando un BrowserRouter de tu aplicación con `react-router-dom`.
* Componentes: 
    * Navbar con cart.
    * Catálogo.  
    * Detalle de producto.
* Rutas a configurar:
    * ‘/’ navega a `<ItemListContainer />`
    * ‘/category/:categoryId’ navega a `<ItemListContainer />`
    * ‘/item/:itemId’ navega a `<ItemDetailContainer />`
* Links a configurar:
    * Clickear en el brand debe navegar a ‘/’
    * Clickear un Item.js debe navegar a /item/:id
    * Clickear en una categoría del navbar debe navegar a /category/:categoryId 
* Para finalizar deberá integrar los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase.

### **🚨Actividad 4: Sincronizar Counter🚨**
* Importa el ItemCount.js de la primera pre-entrega del PF en el counter ItemDetail.js, y configura el evento de compra, siguiendo los detalles de manual.
* Debes lograr separar la responsabilidad del count, del detalle del ítem, y esperar los eventos de agregado emitidos por el ItemCount 
* Cuando ItemCount emita un evento onAdd almacenarás ese valor en un estado interno del ItemDetail para hacer desaparecer el ItemCount
* El botón de terminar mi compra debe poder navegar a un componente vacío por el momento en la ruta `‘/cart’`.




