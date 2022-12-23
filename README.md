#  💻Ecommerce React CoderHouse By: María Trinidad Quiroz 💻
Este proyecto se trata de un ecommerce de juguetes y accesorios para mascotas como perros y gatos 🐶🐱.
### **Herramientas:**
* JavaScript
* React Js
* HTML
* CSS
* SCSS
### **Otros:**
* Firebase
* React-router-dom
* React Bootstrap
* React Toastify
* Sweet Alert 2
## **Capturas**
---
![](/src/assets/GifFuncionalidad.gif)
![](/src/assets/Screen1.png)
![](/src/assets/Screen2.png)
![](/src/assets/Screen3.png)

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

### **🚨Actividad 5: Cart Context🚨**
* Implementa React Context para mantener el estado de compra del user.
* Al clickear comprar en ItemDetail se debe guardar en el CartContext el producto y su cantidad en forma de objeto { name, price, quantity, etc. } dentro del array de productos agregados.
* Detalle importante: CartContext debe tener la lógica incorporada de no aceptar duplicados y mantener su consistencia.
* Métodos recomendados: 
    * `addItem(item, quantity)` // agregar cierta cantidad de un ítem al carrito
    * `removeItem(itemId)` // Remover un item del cart por usando su id
    * `removeList()` // Remover todos los items

### **🚨Actividad 6: Tecnicas de rendering🚨**
* Expande tu componente Cart.js con el desglose de la compra y actualiza tu CartWidget.js para hacerlo reactivo al contexto.
* Debe mostrar el desglose de tu carrito y el precio total.
* Debe estar agregada la ruta ‘cart’ al BrowserRouter.
* Debe mostrar todos los ítems agregados agrupados.
* Por cada tipo de ítem, incluye un control para eliminar ítems.
* De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems y un react-router Link o un botón para que pueda volver al Landing (ItemDetailContainer.js) para buscar y comprar algo.
* Ahora debe consumir el CartContext y mostrar en tiempo real (aparte del ícono) qué cantidad de ítems están agregados (2 camisas y 1 gorro equivaldrían a 3 items).
* El cart widget no se debe mostrar más si no hay items en el carrito, aplicando la técnica que elijas (dismount, style, etc).
* Cuando el estado interno de ItemDetail tenga la cantidad de ítems solicitados mostrar en su 
lugar un botón que diga “Terminar mi compra”.
* Ejemplo inicial del Cart:
    ```javascript
    const Cart = () => {
        //accede al contexto con el hook useContext
        return (
            //recorre el estado global con un map y renderiza nombre del producto, cantidad de items agregados y precio por item.
            //importe total por producto (para lo cual necesitarás agregar una función global en el contexto).
        )
    }
    export default Cart;
    ```
* Ejemplo inicial del CartWidget:
    ```javascript
    const CartWidget = () => {
    //accede al contexto con el hook useContext
        const ctx = useContext(CartContext);

        return (
            <Badge badgeContent={ctx.calcItemsQty()} color="secondary">
                <ShoppingCartOutlined />
            </Badge>
        );
    }

    export default CartWidget;
    ``` 
    * `calcItemsQty()` es una función global del contexto que retorna la cantidad de items en el carrito

### **🚨Actividad 7: Firebase 1🚨**
* Conecta tu nueva ItemCollection de google Firestore a tu ItemListContainer y ItemDetailContainer.
* Conecta tu colección de firestore con el listado de ítems y con el detalle de ítem.
* Elimina los async mocks (promises) y reemplazalos por los llamados de Firestore.
* Si navegas a /item/:id, debe ocurrir una consulta de (1) documento. 
* Si navegas al catálogo, debes consultar (N) documentos con un query filtrado, implementando la lógica de categorías y obteniendo el id de categoría del parámetro de react-router :categoryId.

### **🚨Actividad 8: Firebase 2🚨**
* Crea tu colección de órdenes.
* Utiliza las operaciones de inserción para insertar tu orden en la colección y dale al user su id de orden auto-generada.
* Crea los mappings para poder grabar un objeto del formato:
    ```javascript
    { buyer: { name, phone, email }, items: [{id, title, quantity, price}], date, total }
    ```
* Crea el objeto ORDER con la información solicitada:
    ```javascript
    let order = {
      buyer: {
        name: "An Ecommerce Client",
        email: "client@coderhouse.com",
        phone: "123456789"
      },
      total: //utiliza una función global para calcular el importe total de la orden
      items: //mapea tu carrito para agregar aquí solo los datos solicitados de cada producto
      date: serverTimestamp()	//método de firebase para asignar la fecha y hora del servidor
    };
    ```
* Luego deberás crear una función que agregue ese objeto a un documento en una collección ORDERS.

### **🥇Entrega del Proyecto Final🥇**
* Desarrollarás una app de un e-commerce para poder vender productos de un rubro
a elección.
* User story/brief:
    * Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles.
    * Desde el detalle se debe poder ver la descripción, foto y precio e ingresarlo al carrito.
    * Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total.
    * Al ingresar su nombre, apellido, teléfono e e-mail (ingresándolo dos veces para
    corroborar que sea correcto), debe activarse el botón de ‘realizar compra’.
    * Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden.
* Piezas sugeridas:
    * NavBar
    * CartWidget
    * ItemListContainer
    * ItemList
    *ItemDetailContainer
    * ItemDetail
        * ItemQuantitySelector
        * Description
        * AddItemButton
    * Checkout
        * Brief (detalle de compra)
* Requisitos base:
    * **Inicio**: Al momento de ingresar a la app en la ruta base `‘/’`
        * Visualizar -como mínimo- un set de productos disponibles para la compra.
        * Contar con algún acceso visible a la vista de carrito que debe alojarse en el route `/cart`.
        * Acceder a un menú desplegable que contendrá las categorías. Al clickear en una, debe navegar a la lista de productos de la misma mediante un route `/categories/:categoryId`. Éste invocará la misma vista que el home, pero visualizando sólamente productos de esa categoría.

    * **Flow**: Al clickear un ítem del listado debe navegar a la ruta `/item/:id`, donde `id` es el id del item (generado por firebase), y ver la descripción del producto ( foto, precio, selector de cantidad). Si se ingresa a `/item/:id` y el producto no existe en firebase, debemos responder un mensaje adecuado que indique algo relacionado a que el producto no existe.
    * **Firebase**: Implementar al menos dos colecciones:
        * **items**: catálogo completo
            * Link para foto (puede almacenarse de modo estático en la página en una subruta `/images/:itemid`.
            * Precio unitario
            * Descripción (sólo se ve en detalle)
            * Categoria (id a mano para versión estática, o id de firebase para versión dinámica -opcional-)
        * **orders**: las órdenes generadas, que deben incluir los productos, descripciones y los precios al momento de la compra.
            * Las órdenes deben poder tener items surtidos, cada uno con su cantidad. Por ejemplo: remeras x 2 y gorra x 1
            * id, items, fecha, estado ( por defecto en ‘generada’)
        * **categories** (solo para versión dinámica -opcional-):
            * Versión dinámica (-opcional-): Crear una colección de categories en firebase para hidratar el menú y usar los id’s de éstos para linkearlos a sus ítems. Idealmente, `categories/:id` debería tener una descripción {id: ‘ad43k348j’, key: ‘calzado’, description: ‘Calzado’} para que quede `/categories/calzado` en lugar de `/categories/ad43k348j`.



