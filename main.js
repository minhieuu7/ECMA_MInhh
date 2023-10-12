import './style.css';
import './node_modules/bootstrap';
import Navigo from 'navigo';
import homePage from './src/HomePage.js';
import AboutPage from './src/Aboutpage.js';
import shopPage from './src/ShopPage.js';
import productsDetailPage from './src/ProductDetail.js';
import ContactPage from './src/Contact.js';
import ProductAdmin from './admin/Product.js';
const app = document.querySelector('#app');

// tạo định tuyến 
const router = new Navigo("/", {linksSelector:'a', hash: true});
router.on("/home", ()=>render(app, homePage));
router.on("/about", ()=>render(app, AboutPage));
router.on("/shop", ()=>render(app, shopPage));
router.on("/contact",()=>render(app, ContactPage));
// chi tiết sản phẩm
router.on("/shop/:id", ({ data }) => render(app, ()=> productsDetailPage(data)));

//admin 
router.on("/admin/products", ()=>render(app, ProductAdmin));

router.resolve();

// gọi Hàm:
// app.innerHTML = homePage();

// Hàm render 
function render (target, content)  {
      target.innerHTML = content();
}

//home page
// render(app, homePage);
//AboutPage
// render(app, AboutPage);

