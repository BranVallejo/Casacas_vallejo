export const products = [
    {id: 1, name: "West ham Local" , price: "60" , category: "Premier", img: "https://cdn.shopify.com/s/files/1/0016/1061/2806/products/ac-milan-2021-22-puma-third-kit-6_9038cbe9-ad36-4534-81c6-b2d6c05782c2_1024x1024@2x.png?v=1641423618", stock:20 , description:"Descripcion de camiseta West Ham" },
    {id: 2, name: "Barcelona visitante", price: "90", category: "LaLiga", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/segunda-camiseta-nike-fc-barcelona-2021-22-9_eb3d2930-58e7-4364-9384-5fb97daae505_1024x1024@2x.jpg?v=1634149483" , stock:14 , description:"Descripcion de camiseta Barcelona" },
    {id: 3, name: "Argentina mundial 2006", price: "80", category: "Vintage", img:"https://cdn.shopify.com/s/files/1/0016/1061/2806/products/argentina-titular-2006-155376_1024x1024@2x.jpg?v=1631653464" , stock:10 , description:"Descripcion de camiseta Argentina" }
]


export const traerProductos = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products)
    }, 2000)
});

export const traerProduct = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products[0])
    }, 2000)
});