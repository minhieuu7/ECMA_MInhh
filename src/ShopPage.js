import {products} from "../data/data.js";
export default function shopPage (){
    return `
        <div class="col">
            ${products.map(function(item){
                return `
                    <div>
                    <img src='${item.img}'>
                    <h1>Tên sản phẩm: ${item.name}</h1>
                    <h3>Giá: ${item.price}</h3>
                    <h6><a href="/shop/${item.id}">Chi tiết sản phẩm</a></h6>
                    <br>
                    </div>
                `
            }).join('')}
        </div>
    `
}
