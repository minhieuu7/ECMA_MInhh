import { products } from "../data/data";
import { useEffect, useState } from "../utilities/index";
// xóa sp
const ProductAdmin = () => {
  const [data, setData] = useState(products);
  
  useEffect(()=>{
    const btns = document.querySelector(".btn-remove");
    for(let btn of btns){
      btn.addEventListener("click", ()=> {
        const id = this.dataset.id;
        const newProducts = data.filter((products) => products.id !== parseInt(id));
        setData(newProducts);
      });
    }
  });

  return `
    <div class="container">
        <h1>Product Admin Page</h1>
        <table class="table" border="1" cellspacing="0" cellpadding="5">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sp</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Chức năng</th>
          </tr>
        </thead>
  
        <tbody>
        ${data.map(function(item, index){
            return `
            <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td><img src="${item.img}" widtd='40px' height='40px'></td>
            <td>${item.price}</td>
            <td>
              <button class="btn btn-remove"  data-id="${item.id}" >Xóa</button>
            </td>
          </tr>
            `
        }).join('')}
        </tbody>
      </table>
    </div>
  `
}

export default ProductAdmin
