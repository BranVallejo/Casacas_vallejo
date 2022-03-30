# Casacas, la casa de todos los hinchas
Una e-commerce de camisetas de fútbol, hecho en React.

## Tecnologías
  Casacas es una web en la que los hinchas de las principales ligas del fútbol encuentran sus camisetas favoritas. No se limita a camisetas actuales también incluye camisetas retro/vintage de los momentos más memorables de este deporte.
La idea del proyecto es que los hinchas puedan tener acceso a camisetas como lo tienen en las páginas de Nike, Adidas, Puma, etc.

![GIF Casacas prueba de funcionamiento - Curso React](https://user-images.githubusercontent.com/87451318/160915962-911fc9ee-a7cc-496c-ae10-780751529c31.gif)


## Tecnologías

- HTML 5
- CSS
- JavaScript
- React v17.0.2
- NodeJS v16.4.2
- Firebase


## Ejecución de la aplicación:

1. Abrir una nueva terminal y clonar el repositorio con el siguiente comando:
```sh
git clone https://github.com/almanoduerme/coderhouse-react.git
```

2. Dentro del proyecto, abrir una nueva terminal y ejecutar el siguiente comando:
```sh
cd coderhouse-react
npm install
npm start
```

## Dependencias extras

- React Icons: Utilizada para símbolos como el circulo de carga y el carrito de compras.
- React Router v5: Se utiliza para la navegavilidad, siendo el método que me pareció óptimo para este proyecto.
- Firebase: Se utiliza para conectar con la base de datos de Firebase.


## NavBar

En el NavBar se encuentran 4 componentes: Premier League, Laliga, Vintaje, Cart.
Las primeras 3 filtran los productos dependiendo de la liga a la que pertenezca el producto, cambia así mismo su categoría. El último es el carrito de productos. Mientras tenga un producto dentro se podra navegar hacia el mismo.


## Navegabilidad

Hecho con el uso del Hook de React useParam que lo filtra de la siguiente manera.
- Main ("/"): Renderiza las imágenes de productos destacados, un container para acceder a las distintas categorías y otro con todos los productos existentes en la base de datos.

- Category ("/category/:categoryId"): Renderiza los productos filtrados en base a su categoría.

- Item ("/detail/:productId"): Renderiza una card con los detalles del producto seleccionado (nombre, descripción, imágen, stock).

- Cart ("/cart"): Renderiza el carrito de compras con los productos agregados por el usuario.


### `Decisiones`

Decidí categorizar los productos según la liga a la que pertecen y darle un apartado a los productos vintage.
Es la mejor forma de organizarlas y lo hace simple para los usuarios.

En las cards se encuentra la siguiente información:
  Nombre del producto (Equipo, Temporada o Año, Titularidad de la camiseta).
  Imagen del producto.
  Precio del producto.
  Botón para comprar.
  Ver detalle.
Esta información me parece la justa y suficiente para el usuario. En el apartado de detalles hay una descripción genérica que debo cambiar.
