import { products } from "../data/data.js";


export default function productsDetailPage ({ id }) {
    // tìm kiếm id sản phẩm
    const product = products.find((item) => item.id === parseInt(id));
    console.log(product);
    // nếu ko có thì trả về true 
    if(!product) return null;
    // nếu có trả ra giao diện
    return `
        <img src='${product.img}'>
        <h1>${product.name}</h1>
        <h3>Giá: ${product.price}</h3>
        <br><br><br><br>
    `
};