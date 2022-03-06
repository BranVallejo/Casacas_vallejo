import { createContext, useState } from "react"

export const CartContext  = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) =>{
        if (isInCart(item.id)) {
            sumanCantidad(item.id, cantidad)
        } else {
            setCart([...cart, { ...item, cantidad}]);

        }
    };

    const isInCart = (id) =>{
        const validacion = cart.some((producto)=> producto.id === id);
        return validacion;
    }

    const sumanCantidad = (id, cantidad) =>{
        const newProducts = cart.map((prod) => {
            if (prod.id === id) {
                const newProduct = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };

    const clearItems = () =>{
        setCart([]);
    }

    const removeItem = (id) =>{
        const itemsFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(itemsFiltrados)
    }

    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}