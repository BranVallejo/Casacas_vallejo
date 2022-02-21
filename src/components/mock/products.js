export const products = [
    {id: 1, name: "West ham 21/22 Local" , price: "60" , category: "premierleague", img: "https://cdn.shopify.com/s/files/1/0016/1061/2806/products/ac-milan-2021-22-puma-third-kit-6_9038cbe9-ad36-4534-81c6-b2d6c05782c2_1024x1024@2x.png?v=1641423618", stock:20 , description:"Descripcion de camiseta West Ham" },
    {id: 2, name: "Barcelona 21/22 Visitante", price: "90", category: "laliga", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/segunda-camiseta-nike-fc-barcelona-2021-22-9_eb3d2930-58e7-4364-9384-5fb97daae505_1024x1024@2x.jpg?v=1634149483" , stock:14 , description:"Descripcion de camiseta Barcelona Suplente" },
    {id: 3, name: "Argentina Mundial 2006", price: "80", category: "vintage", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/argentina-titular-2006-155376_1024x1024@2x.jpg?v=1631653464" , stock:10 , description:"Descripcion de camiseta Argentina" },
    {id: 4, name: "Liverpool 21/22 Titular" , price: "90" , category: "premierleague", img: "https://cdn.shopify.com/s/files/1/0016/1061/2806/products/liverpool-2021-22-nike-home-kit-1_540x.jpg?v=1631041766", stock:13 , description:"Descripcion de camiseta Liverpool" },
    {id: 5, name: "Atletico Madrid 20/21 Titular", price: "90", category: "laliga", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/camiseta-atletico-madrid-2020-21-iii_1024x1024@2x.jpg?v=1614061368" , stock:14 , description:"Descripcion de camiseta Atletico Madrid" },
    {id: 6, name: "Argentina Mundial 1986 Suplente", price: "70", category: "vintage", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/baa6fc82_3c00cf5f-ac3d-4447-80f1-385778ae5987_1024x1024@2x.jpg?v=1626220690" , stock:10 , description:"Descripcion de camiseta Argentina 86' Suplente" },
    {id: 7, name: "Man City 21/22 Titular" , price: "95" , category: "premierleague", img: "https://cdn.shopify.com/s/files/1/0016/1061/2806/products/mancitytitu_588552be-f66f-4189-bd35-78be525c3a88_1024x1024@2x.jpg?v=1637722222", stock:13 , description:"Descripcion de camiseta Man City" },
    {id: 8, name: "Real Madrid 21/22 Titular", price: "90", category: "laliga", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/realmadridtitular_c8ef6e44-7f36-4d21-a65f-90852ca73980_1024x1024@2x.jpg?v=1636551875" , stock:13 , description:"Descripcion de camiseta Real Madrid" },
    {id: 9, name: "España Mundial 2010 Suplente", price: "70", category: "vintage", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/espanainiesta_1024x1024@2x.jpg?v=1622528905" , stock:8 , description:"Descripcion de camiseta España 2010 Suplente" }

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