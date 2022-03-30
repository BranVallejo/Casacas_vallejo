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

    const clearItems = () => {
        setCart([])
    }

    const removeItem = (id) =>{
        const itemsFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(itemsFiltrados)
    }

    const getTotal = () => {
        const countCart = cart.map(prod => prod.price * prod.cantidad);
        
        if(countCart.length){
            return countCart.reduce((item, camiseta) => item = item + camiseta);
        } else {
            return 0;
        }
    }

    const getQuantity = () => {
        let cantidad = 0
        cart.forEach(product => {            
            cantidad = cantidad + product.cantidad
        });
        return cantidad
    }
    
    return(
        <CartContext.Provider value={{cart, addToCart, clearItems, removeItem, sumanCantidad, isInCart, getTotal, getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}