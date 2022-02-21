export const products = [
    {id: 1, name: "West ham Local" , price: "60" , category: "premierleague", img: "https://cdn.shopify.com/s/files/1/0016/1061/2806/products/ac-milan-2021-22-puma-third-kit-6_9038cbe9-ad36-4534-81c6-b2d6c05782c2_1024x1024@2x.png?v=1641423618", stock:20 , description:"Descripcion de camiseta West Ham" },
    {id: 2, name: "Barcelona visitante", price: "90", category: "laliga", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/segunda-camiseta-nike-fc-barcelona-2021-22-9_eb3d2930-58e7-4364-9384-5fb97daae505_1024x1024@2x.jpg?v=1634149483" , stock:14 , description:"Descripcion de camiseta Barcelona" },
    {id: 3, name: "Argentina mundial 2006", price: "80", category: "vintage", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/argentina-titular-2006-155376_1024x1024@2x.jpg?v=1631653464" , stock:10 , description:"Descripcion de camiseta Argentina" },
    {id: 4, name: "Liverpool Titular" , price: "90" , category: "premierleague", img: "https://cdn.shopify.com/s/files/1/0016/1061/2806/products/liverpool-2021-22-nike-home-kit-1_540x.jpg?v=1631041766", stock:13 , description:"Descripcion de camiseta Liverpool" },
    {id: 5, name: "Atletico Madrid Titular", price: "90", category: "laliga", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/camiseta-atletico-madrid-2020-21-iii_1024x1024@2x.jpg?v=1614061368" , stock:14 , description:"Descripcion de camiseta Atletico Madrid" },
    {id: 6, name: "Argentina mundial 1986 Suplente", price: "70", category: "vintage", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/baa6fc82_3c00cf5f-ac3d-4447-80f1-385778ae5987_1024x1024@2x.jpg?v=1626220690" , stock:10 , description:"Descripcion de camiseta Argentina 86' suplente" }

]


export const traerProductos = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(products)
    }, 1000)
});

export const traerProduct = (id) => {
    return new Promise((resolve)=>{
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(()=>{
            resolve(prod)
        }, 1000)
    });
}

export const getCategory = (categoryId) => {
    return new Promise ((resolve)=> {
        const categFiltrados = products.filter((producto) => producto.category === categoryId);
        setTimeout(() => {
            categoryId ? resolve(categFiltrados) : resolve(products)
        }, 500)
    })
}